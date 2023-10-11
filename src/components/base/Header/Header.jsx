import React, { useEffect, useState } from "react";
import images from "@imports/ImagesImport";
import Menu from "@components/base/Header/Menu";
/* import { useDispatch, useSelector } from "react-redux";
import { setAuthModal, setCartModal } from "redux/reducers/modalsSlice";
import Cookies from "js-cookie";
import { useLogoutUserMutation } from "api/authApi";
import { removeTokens } from "redux/reducers/authSlice"; */
import { IoLogOutOutline } from "react-icons/io5";
import Link from "next/link";
import Image from "next/image";
/* import { removeCart } from "redux/reducers/cartSlice";
import { catalogApi } from "api/catalogApi";
import { cartApi } from "api/cartApi"; */

const Header = ({ isCheckout = false }) => {
  const [offset, setOffset] = useState(0);
  /*   const dispatch = useDispatch();
  const [access_token, setAccess_token] = useState(Cookies.get("access_token"));
  const isAuth = useSelector((state) => state.auth.isAuth);
  const [auth, setAuth] = useState(access_token || isAuth);
  const cartCount = useSelector((state) => state.cart.cartCount);
  const cartTotal = useSelector((state) => state.cart.cartTotal);

  const [logout, {  }] = useLogoutUserMutation();

  const onLogout = async () => {
    const result = await logout();
    if (result.data) {
      Cookies.remove("access_token", {
        path: "/",
        secure: true,
      });
      Cookies.remove("cart_id", {
        path: "/",
        secure: true,
      });
      dispatch(removeTokens());
      setAccess_token(null);
      dispatch(removeCart());
      dispatch(cartApi.util.invalidateTags(["Cart"]));
      console.log(result.data);
    }
  }; */

  useEffect(() => {
    const onScroll = () => setOffset(window.scrollY);
    window.removeEventListener("scroll", onScroll);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={
        offset > 3
          ? "container-horisontal outer__container header header_scrolled"
          : "container-horisontal outer__container header"
      }
    >
      <div className="container-horisontal container header__container">
        <Link href="/">
          <div className="container-horisontal header__logo">
            <Image
              className="logo__icon"
              src={images["logo"]}
              alt="logo"
              width="37"
              height="43"
            />
            <h1 className="logo__text">PawShop</h1>
          </div>
        </Link>
        {!isCheckout && (
          <>
            <nav className="header__nav">
              <ul className="container-horisontal nav__list">
                <li className="nav__list__item">
                  <Link href={"/catalog/"+JSON.stringify({category:"cat", sort: "rating", order: "desc", page:1})}>
                    For <b>CAT</b>
                  </Link>
                </li>
                <li className="nav__list__item">
                  <Link href="/catalog/dog?sort=default&order=desc&page=1">
                    For <b>DOG</b>
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
            <div className="container-horisontal header__buttons">
              <div>
                 {/*{auth ? ( 
                  <IoLogOutOutline
                    className="profile"
                    loading="lazy"
                    alt="logout"
                    width="26"
                    height="26"
                    title="Logout"
                    onClick={onLogout}
                  />
                 ) : ( */}
                  <Image
                    className="profile"
                    src={images["user"]}
                    loading="lazy"
                    alt="user"
                    width="26"
                    height="26"
                    title="Authorise"
                    /* onClick={() => dispatch(setAuthModal(true))} */
                  />
                 {/*)} */}
              </div>
              <div className="container-horisontal header__cart">
                <div
                  className="container-horisontal header__cart__button"
                  /* onClick={() => dispatch(setCartModal(true))} */
                >
                  <Image
                    className="header__cart__icon"
                    src={images["basket"]}
                    loading="lazy"
                    alt="cart"
                    width="26"
                    height="26"
                  />
                  <span className="header__cart__number">1{/* {cartCount} */}</span>
                </div>
                <span className="header__cart__sum">$0{/* {cartTotal} */}</span>
              </div>
              <Menu />
            </div>
          </>
        )}
      </div>
    </header>
  );
};

export default Header;
