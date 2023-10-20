const spriteHref = "/sprite.svg";

const Svg = ({ name, ...props }) => {
  return (
    <svg {...props}>
      <use href={`${spriteHref}#${name}`} />
    </svg>
  );
};

export default Svg;
