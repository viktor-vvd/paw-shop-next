import React from "react";
import images from "@imports/ImagesImport";
import Image from "next/image";
import Link from "next/link";
/* import Button from "./Button";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useIncomingsSaveMutation } from "api/promoApi"; */

const Footer = () => {
  /* const schema = yup.object({
    email: yup
      .string()
      .required("E-mail is a required field")
      .email("Please enter a valid email address")
      .matches(/@[^.]*\./),
  });
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    mode: "onChange",
    resolver: yupResolver(schema),
  });

  const [incomingsSave, { isError, error, isSuccess, data }] =
    useIncomingsSaveMutation();

  const onSubmit = async (formData) => {
    const result = await incomingsSave({
      email: formData.email,
      type: "newsletter",
    });
    if (result.data) {
      reset();
    }
  }; */
  return (
    <footer className="container-vertical footer">
      {/* <div className="container-horisontal outer__container footer_top">
        <div className="container-horisontal container footer__promo">
          <Image
            className="footer__background_toy"
            src={images["footerbg1"]}
            loading="lazy"
            alt="Image"
            width="280"
            height="180"
          />
          <Image
            className="footer__background_ball"
            src={images["footerbg2"]}
            loading="lazy"
            alt="Image"
            width="116"
            height="232"
          />
          <span className="footer__promo__text">
            Get the latest news and promotions. No spam, just a few emails per
            year.
          </span>
          <form className="container-horisontal footer__promo__form" onSubmit={handleSubmit(onSubmit)}>
            <input
              className="text_light footer__promo__input"
              name="email"
              type="text"
              placeholder="Your e-mail"
              {...register("email")}
            />
            {errors.email && (
              <span className="text_light form__error">
                {errors.email?.message}
              </span>
            )}
            {error?.data.errors.email && (
              <span className="text_light form__error">
                {errors?.data.errors.email}
              </span>
            )}
            {isSuccess && (
              <span className="text_light form__success">{data?.message}</span>
            )}
            <Button
              type="submit"
              className="footer__promo__button"
              value="Subscribe"
            />
          </form>
        </div>
      </div> */}
      <div className="container-vertical outer__container footer_bottom">
        <div className="container-horisontal container footer__info__container">
          <div className="container-vertical footer__contacts__wrapper">
            <div className="container-horisontal footer__logo__container">
              <Image
                className="footer__logo"
                src={images["logoWhite"]}
                loading="lazy"
                alt="logo"
                width="54"
                height="64"
              />
              <h2 className="logo__text footer__logo__text">PawShop</h2>
            </div>
            <div className="container-horisontal footer__phone__wrapper">
              <Image
                className="footer__phone__logo"
                src={images["phone"]}
                loading="lazy"
                alt="logo"
                width="25"
                height="25"
              />
              <a className="phone footer__phone" href="tel:1-800-055-5566">
                1-800-055-5566
              </a>
            </div>
            <div className="container-horisontal footer__socials">
              <div className="container-horisontal social">
                <Image
                  className="social__icon"
                  src={images["insta"]}
                  loading="lazy"
                  alt="logo"
                  width="20"
                  height="20"
                />
              </div>
              <div className="container-horisontal social">
                <Image
                  className="social__icon"
                  src={images["facebook"]}
                  loading="lazy"
                  alt="logo"
                  width="10"
                  height="20"
                />
              </div>
              <div className="container-horisontal social">
                <Image
                  className="social__icon social__icon_twitter"
                  src={images["twitter"]}
                  loading="lazy"
                  alt="logo"
                  width="20"
                  height="16"
                />
              </div>
            </div>
          </div>
          <div className="container-horisontal footer__nav__container">
            <nav className="container-vertical footer__nav">
              <Link className="text footer__nav__link" href="/">
                Home
              </Link>
              <Link className="text footer__nav__link" href="/">
                Cat supplies
              </Link>
              <Link className="text footer__nav__link" href="/">
                Dog supplies
              </Link>
              <Link className="text footer__nav__link" href="/">
                Contacts
              </Link>
              <Link className="text footer__nav__link" href="/">
                Tracking
              </Link>
            </nav>
            <nav className="container-vertical footer__nav">
              <Link className="text footer__nav__link" href="/">
                Terms of Service
              </Link>
              <Link className="text footer__nav__link" href="/">
                Refund policy
              </Link>
              <Link className="text footer__nav__link" href="/">
                Privacy policy
              </Link>
              <Link className="text footer__nav__link" href="/">
                Shipping policy
              </Link>
              <Link className="text footer__nav__link" href="/">
                FAQ
              </Link>
            </nav>
          </div>
        </div>
        <div className="container-vertical container footer__payment-copyright__container">
          <hr className="container footer__divider" />
          <div className="container-horisontal container footer__payment-copyright__wrapper">
            <div className="container-horisontal footer__payment">
              <Image
                className="footer__payment__icon"
                src={images["googlepay"]}
                loading="lazy"
                alt="payment"
                width="100%"
                height="100%"
              />
              <Image
                className="footer__payment__icon"
                src={images["applepay"]}
                loading="lazy"
                alt="payment"
                width="62"
                height="35"
              />
              <Image
                className="footer__payment__icon"
                src={images["mastercard"]}
                loading="lazy"
                alt="payment"
                width="62"
                height="35"
              />
              <Image
                className="footer__payment__icon"
                src={images["visa"]}
                loading="lazy"
                alt="payment"
                width="62"
                height="35"
              />
              <Image
                className="footer__payment__icon"
                src={images["visa1"]}
                loading="lazy"
                alt="payment"
                width="62"
                height="35"
              />
            </div>
            <span className="text footer__copyright">
              Copyright © 2022. All Rights Reserved by SleepGo
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;