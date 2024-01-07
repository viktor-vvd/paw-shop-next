import { useRouter } from "next/router";
import React from "react";
/* import { useNavigate, useParams } from "react-router-dom"; */

const Sort = ({sortValue = { sort: "default", order: "desc" }, handleSortChange}) => {
  const router = useRouter();
  const {categorySlug, sort, order, page} = router.query;
  /* const navigate = useNavigate();
  const { slug } = useParams(); */

  return (
    <div className="container-horizontal sort__container">
      <span className="text sort__text">Sort by:</span>
      <div className="container-horizontal sort__wrapper">
        <select
          className="text sort"
          name="sortValue"
          defaultValue={JSON.stringify(sortValue)}
          onChange={(event) => handleSortChange(event)}
        >
          <option className="text sort__item" value={JSON.stringify({ sort: "default", order: "desc" })}>
            Relevance
          </option>
          <option
            className="text sort__item"
            value={JSON.stringify({ sort: "price", order: "asc" })}
          >
            Price, low to high
          </option>
          <option
            className="text sort__item"
            value={JSON.stringify({ sort: "price", order: "desc" })}
          >
            Price, high to low
          </option>
          <option
            className="text sort__item"
            value={JSON.stringify({ sort: "rating", order: "asc" })}
          >
            Rating, low to high
          </option>
          <option
            className="text sort__item"
            value={JSON.stringify({ sort: "rating", order: "desc" })}
          >
            Rating, high to low
          </option>
        </select>
      </div>
    </div>
  );
};

export default Sort;
