"use client";
import React from "react";
import {AnimationOnScroll} from "react-animation-on-scroll";
import Link from "next/link";
import Image from "next/image";

function Info() {
  return (
    <section className="flex flex-col text-black md:justify-center justify-end items-center md:w-8/12 w-full mx-auto md:gap-16 gap-8">
      <div className="text-center px-4">
        <p className="text-xs tracking-widest text-cardbg mb-3 font-medium">
          SAHRA EMBODIMENT
        </p>
        <h2 className="font-Yeseva text-2xl leading-relaxed">
          ما به جای اصلاح سریع یا فشار برای تغییر،
          <br className="hidden md:block" />
          با بدن، هیجان و تجربه‌ی زنده‌ی فرد کار می‌کنیم.
        </h2>
      </div>

      <AnimationOnScroll
        animateIn="animate__fadeIn"
        duration={1}
        className="w-full"
        animateOnce={true}
      >
        {/* Split Visual & Text panel */}
        <div className="w-full rounded-sm border border-line flex flex-col-reverse md:flex-row items-stretch min-h-[26rem] overflow-hidden bg-white">
          {/* Right side: Text container (in RTL: displays on the right on desktop, bottom on mobile) */}
          <div className="md:w-3/5 w-full md:p-12 p-8 flex flex-col justify-center relative bg-white">
            <div className="absolute inset-0 fabric-texture pointer-events-none" />
            <div className="relative z-10 fabric-float">
              <div className="w-8 h-0.5 bg-cardbg mb-5" />
              <h3 className="font-Yeseva text-xl md:text-2xl leading-relaxed text-black mb-4">
                صحرا تجسم، به رهبری صحرا حسینی — فضایی برای کار عمیق با خود.
              </h3>
              <p className="text-sm leading-8 font-jakarta text-textmuted">
                صحرا حسینی، درمانگر بدن‌محور و هیجانی است که با رویکردی آرام و
                غیرقضاوتی، همراه افرادی است که می‌خواهند از اضطراب، فرسودگی و
                الگوهای تکراری رها شوند.
              </p>
              <Link
                href="/about"
                className="font-jakarta hover:bg-line ease-out duration-200 leading-7 p-2.5 font-semibold mt-8 text-sm rounded-sm bg-brown text-black flex justify-center items-center md:w-1/2 w-full"
              >
                بیشتر درباره صحرا حسینی
              </Link>
            </div>
          </div>

          {/* Left side: Image container (in RTL: displays on the left on desktop, top on mobile) */}
          <div className="md:w-2/5 w-full relative min-h-[30rem] md:min-h-auto">
            <Image
              src="/images/IMG_1294.JPG"
              alt="صحرا تجسم"
              fill
              className="object-cover"
              sizes="(max-width: 998px) 100vw, 40vw"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-r from-black/5 to-transparent pointer-events-none" />
            <div className="absolute inset-0 fabric-texture pointer-events-none" />
          </div>
        </div>
      </AnimationOnScroll>
    </section>
  );
}

export default Info;
