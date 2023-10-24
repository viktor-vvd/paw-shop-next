import Footer from "@components/base/Footer";
import Header from "@components/base/Header/Header";
import React from "react";

import { Montserrat_Alternates, Montserrat } from 'next/font/google';
import localFont from 'next/font/local';
export const montserrat_alternates = Montserrat_Alternates({
  weight: ['300', '400', '500', '700', '900'],
  style: ['normal'],
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-montserrat_alternates',
});
export const amatic_sc = localFont({
  src: [
    {
      path: './../src/assets/fonts/Amatic_SC/AmaticSC-Bold.ttf',
      weight: '700',
    },
  ],
});

export const inter = localFont({
  src: [
    {
      path: './../src/assets/fonts/Inter/Inter-VariableFont_slnt,wght.ttf',
      weight: '400',
    },
  ],
});

export const montserrat = Montserrat({
  weight: ['300', '400', '500'],
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-montserrat',
});

const DefaultLayout = ({ children }) => {
  return (
    <div className="App">
      <style jsx global>{`
        :root {
          --font-montserrat_alternates: ${montserrat_alternates.style.fontFamily};
          --font-amatic_sc: ${amatic_sc.style.fontFamily};
          --font-montserrat: ${montserrat.style.fontFamily};
          --font-inter: ${inter.style.fontFamily};
        }
      `}</style>
    <Header />
      <main className="main container-vertical">
        {children}
      </main>
      <Footer />
    </div>
  );
};

export default DefaultLayout;
