import Link from "next/link";
import { usePathname } from "next/navigation";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";

const Breadcrumbs = ({ item }) => {
  const routes = [
    { route: "/", href: ["/"], title: "Home", slug: null },
    {
      route: "/catalog/[categorySlug]",
      href: ["/catalog/"],
      title: "Catalog",
      slug: ["categorySlug"],
    },
    {
      route: "/catalog/[categorySlug]/product/[productSlug]",
      href: ["/catalog/", "/product/"],
      title: item?.name || "Product",
      slug: ["categorySlug", "productSlug"],
    },
  ];
  const paths = usePathname();
  const pathNames = paths.split("/").filter((path) => path);
  const router = useRouter();
  const [breadcrumbs, setBreadcrumbs] = useState([]);

  useEffect(() => {
    const actualRoutes = routes.filter((route) =>
      router.route.includes(route.route)
    );
    const breadcrumbs = actualRoutes.map((route) => {
      let href = "";
      route.slug &&
        route?.slug.map((slug, index) => {
          href += route.href[index] + router.query[slug];
        });
      href === "" && (href = "/");
      return {
        ...route,
        href: href,
      };
    });
    console.log(router);
    setBreadcrumbs(breadcrumbs);
  }, [router]);

  return (
    <ul className="container-horisontal breadcrumbs">
      {breadcrumbs.map((route, index) => (
        <React.Fragment key={index}>
          {index < breadcrumbs.length - 1 ? (
            <Link href={route.href} className="text breadcrumbs__item" passHref>
              {route.title}
            </Link>
          ) : (
            <span className="text breadcrumbs__item breadcrumbs__item_active">
              {route.title}
            </span>
          )}
          {index < breadcrumbs.length - 1 && (
            <span className="text breadcrumbs__item">{">"}</span>
          )}
        </React.Fragment>
      ))}
    </ul>
  );
};

export default Breadcrumbs;
