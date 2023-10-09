import Footer from "@components/base/Footer";
import Header from "@components/base/Header/Header";
import React from "react";

/*import { Montserrat_Alternates, Montserrat, Amatic_SC } from 'next/font/google';

 const montserrat_alternates = Montserrat_Alternates({
  weight: ['300', '400', '500', '700', '900'],
  style: ['normal'],
  subsets: ['latin'],
  display: 'swap',
});
export const amatic_sc = Amatic_SC({
  weight: ['700'],
  style: ['normal'],
  subsets: ['latin'],
  display: 'swap',
});
export const montserrat = Montserrat({
  weight: ['500'],
  style: ['normal'],
  subsets: ['latin'],
  display: 'swap',
}); */

const DefaultLayout = ({ children }) => {
  return (
    <>
      <Header />
      <main className="main container-vertical">
        {children}
      </main>
      <Footer />
    </>
  );
};

export default DefaultLayout;
