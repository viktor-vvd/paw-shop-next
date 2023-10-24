import { promises as fs } from 'node:fs';
import * as path from 'node:path';

// Function to convert a string to camelCase style
function convertToCamelCase(input) {
  return input
    .replace(/[^a-zA-Z0-9]/g, ' ') // Replace all characters except letters and numbers with spaces
    .split(' ')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1)/* .toLowerCase() */) // Capitalize the first letter and make the rest lowercase
    .join('');
}

const generateIndexFile = async () => {
  try {
    // Use process.argv to get command line arguments
    const [, , svgFolderPath, iconsIndexPath] = process.argv;

    // Resolve paths
    const cwd = process.cwd();
    const resolvedSvgFolderPath = path.join(cwd, svgFolderPath);
    const resolvedIconsIndexPath = path.join(cwd, iconsIndexPath);

    // Read all SVG files in the folder (asynchronously)
    const svgFiles = await fs.readdir(resolvedSvgFolderPath);
    const filteredSvgFiles = svgFiles.filter(file => file.endsWith('.svg'));

    // Generate import and export statements
    const importStatements = filteredSvgFiles.map(file => `import ${convertToCamelCase(file.replace('.svg', ''))} from '@${path.relative(process.cwd(), path.join(resolvedSvgFolderPath, file)).replace(/\\/g, '/')}';`);
    const exportStatements = filteredSvgFiles.map(file => `${convertToCamelCase(file.replace('.svg', ''))},`);

    // Write the generated code to the file
    const code = [
      '// Automatically generated index file for SVG icons',
      ...importStatements,
      '',
      'export {',
      ...exportStatements,
      '};',
    ].join('\n');

    await fs.writeFile(resolvedIconsIndexPath, code, 'utf-8');
    console.log('Index file generated successfully.');
  } catch (error) {
    console.error('Error generating index file:', error);
  }
};

generateIndexFile();