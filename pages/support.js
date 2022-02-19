import React from 'react';
import dynamic from 'next/dynamic';
import Script from 'next/script';
import Image from 'next/image';

//components
const MainNav = dynamic(() => import('../components/MainNav'));
const Footer = dynamic(() => import('../components/Footer'));
const SupportSVG = dynamic(() => import('../public/assets/support.svg'));
export default function Support() {
  return (
    <div className=" 5xl:max-w-[1980px] 5xl:h-full ">
      <Script
        src="https://www.googletagmanager.com/gtag/js?id=UA-176402481-3"
        strategy="afterInteractive"
      />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
        window.dataLayer = window.dataLayer || [];
        function gtag(){window.dataLayer.push(arguments);}
        gtag('js', new Date());

        gtag('config', 'UA-176402481-3');
      `}
      </Script>

      <MainNav />
      <div className="h-auto w-full bg-black-secondary flex flex-col justify-center align-middle items-center">
        <SupportSVG className="mt-[234px]" />
        <h3 className="text-white uppercase font-bebas text-titleBigScreen pt-13.75">
          support
        </h3>
        <span className="max-w-[767px] text-center  text-white font-steamParagraph pt-4">
          If you love the game, consider supporting me for continued
          development, faster updates, and exclusive content only for
          supporters!
        </span>
      </div>

      <Footer />
    </div>
  );
}
