import images from "@imports/ImagesImport";
import Image from "next/image";
import { useRouter } from "next/router";
import React from "react";
/* import { useNavigate } from "react-router-dom"; */

const Category = ({ item, setCurrentPage }) => {
  const router = useRouter();
  const {slug, sort, order, page} = router.query;
/*   const navigate = useNavigate();
  const params = new URLSearchParams(window.location.search); */

  const handleOptionChange = (changeEvent) => {
    router.push(`/catalog/${changeEvent.target.value}?sort=${sort || "default"}&order=${order || "desc"}&page=1`);
    /* navigate(`/catalog/${changeEvent.target.value}?sort=${params.get("sort") || "default"}&order=${params.get("order") || "desc"}&page=1`);*/
    setCurrentPage(1); 
  };

  return (
    <div className="container-vertical category">
      <div className="container-horisontal category__buttons">
        <label className="container-horisontal" name="category">
          <input
            type="radio"
            name="category"
            value="cat"
            checked={item.slug === "cat"}
            className="category__input"
            onChange={handleOptionChange}
          />
          <div className="container-horisontal category__button cat">
            <span className="text__button">
              For <span className="cat">CAT</span>
            </span>
            <Image
              className="button__icon"
              src={images["catIcon"]}
              loading="lazy"
              alt="arrow"
              width="30"
              height="30"
            />
          </div>
        </label>
        <label className="container-horisontal" name="category">
          <input
            type="radio"
            name="category"
            value="dog"
            checked={item.slug === "dog"}
            className="category__input"
            onChange={handleOptionChange}
          />
          <div className="container-horisontal category__button dog">
            <span className="text__button">
              For <span className="dog">DOG</span>
            </span>
            <Image
              className="button__icon"
              src={images["dogIcon"]}
              loading="lazy"
              alt="arrow"
              width="30"
              height="30"
            />
          </div>
        </label>
      </div>
      <hr />
    </div>
  );
};

export default Category;
