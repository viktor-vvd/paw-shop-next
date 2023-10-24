import React, { useState } from "react";
import Link from "next/link";
import { ClosePurple, Menu as MenuSvg } from "@public/svg";

const Menu = () => {
  const [showMenu, setshowMenu] = useState(false);
  return (
    <div className="menu__container">
      <div className="menu__button" onClick={() => setshowMenu(true)}>
        <MenuSvg alt="cart" width="37" height="21" />
      </div>
      <div className={showMenu?"overlay show":"overlay hide"} ></div>

      <div
        className={
          showMenu
            ? "container-vertical menu show"
            : "container-vertical menu hide"
        }
      >
        <div className="container-horisontal menu__header">
          <h2 className="title">Menu</h2>
          <ClosePurple
            className="close__icon"
            loading="lazy" alt="close"
            width="32" height="32"
            onClick={() => setshowMenu(false)}
          />
        </div>
        <hr />
        <div className="container-vertical menu__bottom">
          <nav className="header__nav menu__nav">
            <ul className="container-vertical nav__list">
              <li className="nav__list__item">
                <Link href="/">Home</Link>
              </li>
              <li className="nav__list__item">
                <Link href="/catalog">
                  For <b className="cat">CAT</b>
                </Link>
              </li>
              <li className="nav__list__item">
                <Link href="/">
                  For <b className="dog">DOG</b>
                </Link>
              </li>
              <li className="nav__list__item">
                <Link href="/">Contacts</Link>
              </li>
              <li className="nav__list__item">
                <Link href="/">Tracking</Link>
              </li>
            </ul>
          </nav>
          <Link className="phone" href="tel:1-800-055-5566">
            1-800-055-5566
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Menu;
