import Link from "next/link";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";

const Breadcrumbs = ({ item }) => {
  const routes = [
    { route: "/", href: ["/"], title: "Home", slug: null },
    {
      route: "/catalog",
      href: ["/catalog/all"],
      title: "Catalog",
      slug: null,
    },
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
  const router = useRouter();
  const [breadcrumbs, setBreadcrumbs] = useState([]);

  useEffect(() => {
    const actualRoutes = routes.filter((route) =>
      router.route.includes(route.route)
    );
    const breadcrumbs = actualRoutes.map((route, i) => {
      let href = "";
      let title = "";
      route.slug &&
        route?.slug.map((slug, index) => {
          href += route.href[index] + router.query[slug];
          if (i < actualRoutes.length - 1) {
            router.query[slug]
              ? (title = router.query[slug])
              : (title = route.title);
          }
        });
      href === "" && (href = route.href[0]);
      (title === ""||!title) && (title = route.title);
      return {
        ...route,
        href: href,
        title: title[0].toUpperCase() + title.slice(1),
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
