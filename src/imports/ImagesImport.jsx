import logo from "@images/logo.svg";
import logoWhite from "@images/logoWhite.svg";
import bg1 from "@images/bg1.webp";
import ball from "@images/ball.webp";
import bone from "@images/bone.webp";
import aboutimage1 from "@images/aboutimage1.webp";
import aboutimage2 from "@images/aboutimage2.webp";
import applepay from "@images/applepay.webp";
import basket from "@images/basket.svg";
import catIcon from "@images/catIcon.svg";
import cat from "@images/cat.webp";
import checkmark from "@images/checkmark.svg";
import closePurple from "@images/closePurple.svg";
import comment1image1 from "@images/comment1image1.png?as=webp";
import comment1image3 from "@images/comment1image3.png?as=webp";
import comment3image1 from "@images/comment3image1.png?as=webp";
import dog from "@images/dog.webp";
import dogbg from "@images/dogbg.webp";
import dogbgSM from "@images/dogbgSM.webp";
import dogIcon from "@images/dogIcon.svg";
import facebook from "@images/facebook.svg";
import footerbg1 from "@images/footerbg1.webp";
import footerbg2 from "@images/footerbg2.webp";
import googlepay from "@images/googlepay.webp";
import insta from "@images/insta.svg";
import leftButtonArrow from "@images/leftButtonArrow.svg";
import mastercard from "@images/mastercard.webp";
import menu from "@images/menu.svg";
import paws1 from "@images/paws1.webp";
import paws2 from "@images/paws2.webp";
import paws3 from "@images/paws3.webp";
import phone from "@images/phone.svg";
import product1 from "@images/product1.png?as=webp";
import product2 from "@images/product2.png?as=webp";
import product3 from "@images/product3.png?as=webp";
import product4 from "@images/product4.png?as=webp";
import promoimgMD from "@images/promoimgMD.webp";
import promoimgPC from "@images/promoimgPC.webp";
import promoimgSM from "@images/promoimgSM.webp";
import returnIcon from "@images/return.svg";
import rightButtonArrow from "@images/rightButtonArrow.svg";
import star from "@images/star.svg";
import support from "@images/support.svg";
import topLeftArrow from "@images/topLeftArrow.svg";
import topRightArrow from "@images/topRightArrow.svg";
import topRightPurpleArrow from "@images/topRightPurpleArrow.svg";
import twitter from "@images/twitter.svg";
import user from "@images/user.svg";
import visa from "@images/visa.webp";
import visa1 from "@images/visa1.webp";
import google from "@images/google.svg";
import facebookColor from "@images/facebookColor.svg";
import cartPurple from "@images/cartPurple.svg";
import deleteIcon from "@images/delete.svg";
import defaultImg from "@images/default.webp";
import filterArrowTop from "@images/filterArrowTop.svg";
import telegramColor from "@images/telegramColor.svg";
import facebookColorMini from "@images/facebookColorMini.svg";
import twitterColor from "@images/twitterColor.svg";
import gallery from "@images/gallery.svg";
import closeMini from "@images/closeMini.svg";
import leftPurpleArrow from "@images/leftPurpleArrow.svg";
import loadingGif from "@images/loadingGif.gif";
import mastercard2 from "@images/mastercard2.svg";
import visa2 from "@images/visa2.svg";
import paypal from "@images/paypal.svg";

const images = {
  logo: logo,
  logoWhite: logoWhite,
  bg1: bg1,
  ball: ball,
  bone: bone,
  aboutimage1: aboutimage1,
  aboutimage2: aboutimage2,
  applepay: applepay,
  basket: basket,
  catIcon: catIcon,
  cat: cat,
  checkmark: checkmark,
  closePurple: closePurple,
  comment1image1: comment1image1,
  comment1image3: comment1image3,
  comment3image1: comment3image1,
  dog: dog,
  dogbg: dogbg,
  dogbgSM: dogbgSM,
  dogIcon: dogIcon,
  facebook: facebook,
  footerbg1: footerbg1,
  footerbg2: footerbg2,
  googlepay: googlepay,
  insta: insta,
  leftButtonArrow: leftButtonArrow,
  mastercard: mastercard,
  menu: menu,
  paws1: paws1,
  paws2: paws2,
  paws3: paws3,
  phone: phone,
  product1: product1,
  product2: product2,
  product3: product3,
  product4: product4,
  promoimgMD: promoimgMD,
  promoimgPC: promoimgPC,
  promoimgSM: promoimgSM,
  returnIcon: returnIcon,
  rightButtonArrow: rightButtonArrow,
  star: star,
  support: support,
  topLeftArrow: topLeftArrow,
  topRightArrow: topRightArrow,
  topRightPurpleArrow: topRightPurpleArrow,
  twitter: twitter,
  user: user,
  visa: visa,
  visa1: visa1,
  google: google,
  facebookColor: facebookColor,
  cartPurple: cartPurple,
  deleteIcon: deleteIcon,
  defaultImg: defaultImg,
  filterArrowTop: filterArrowTop,
  telegramColor: telegramColor,
  facebookColorMini: facebookColorMini,
  twitterColor: twitterColor,
  gallery: gallery,
  closeMini: closeMini,
  loadingGif: loadingGif,
  leftPurpleArrow: leftPurpleArrow,
  mastercard2: mastercard2,
  visa2: visa2,
  paypal: paypal,
};

/* function importAll(r) {
  let images = {};
  r.keys().map((item, index) => {
    images[item.replace("./", "").replace("public/images/", "").split(".")[0]] =
      r(item);
  });
  console.log(images);
  return images;
} 

const images = importAll(
  require.context("@images", false, /\.(png|jpe?g|svg|webp)$/)
); */

export default images;
