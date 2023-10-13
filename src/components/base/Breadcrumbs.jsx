import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

const Breadcrumbs = ({ item }) => {
  const paths = usePathname();
  console.log(paths);
  const pathNames = paths.split("/").filter((path) => path);

  return (
    <ul className="container-horisontal breadcrumbs">
      <li>
        <Link href="/" className="text breadcrumbs__item">
          Home
        </Link>
      </li>
      {pathNames.length > 0 && (
        <span className="text breadcrumbs__item">{">"}</span>
      )}
      {pathNames.map((crumb, index) => (
        <React.Fragment key={index}>
          {index < pathNames.length - 1 ? (
            <Link
              href={`/${pathNames.slice(0, index + 1).join("/")}`}
              className="text breadcrumbs__item"
            >
              {crumb[0].toUpperCase() + crumb.slice(1, crumb.length)}
            </Link>
          ) : (
            <span className="text breadcrumbs__item breadcrumbs__item_active">
              {item?.name
                ? item?.name
                : crumb[0].toUpperCase() + crumb.slice(1, crumb.length)}
            </span>
          )}
          {index < pathNames.length - 1 && (
            <span className="text breadcrumbs__item">{">"}</span>
          )}
        </React.Fragment>
      ))}
    </ul>
  );
};

export default Breadcrumbs;
