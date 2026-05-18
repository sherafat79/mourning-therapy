"use client";
import React from "react";
import { AnimationOnScroll } from "react-animation-on-scroll";
import Link from "next/link";

function Info() {
  return (
    <section className="flex flex-col text-black md:justify-center justify-end items-center md:w-8/12 w-full mx-auto md:gap-16 gap-8">
      <div className="text-center px-4">
        <p className="text-xs tracking-widest text-cardbg mb-3 font-medium">SAHRA EMBODIMENT</p>
        <h2 className="font-Yeseva text-2xl leading-relaxed">
          ما به جای اصلاح سریع یا فشار برای تغییر،
          <br className="hidden md:block" />
          با بدن، هیجان و تجربه‌ی زنده‌ی فرد کار می‌کنیم.
        </h2>
      </div>

      <AnimationOnScroll animateIn="animate__fadeIn" duration={1} className="w-full" animateOnce={true}>
        {/* Fabric background panel — replaces bg-2.png */}
        <div
          className="w-full rounded-sm relative overflow-hidden"
          style={{ background: "linear-gradient(135deg, #f7f0ea 0%, #e8ddd4 50%, #d9cec7 100%)" }}
        >
          <div className="absolute inset-0 fabric-texture" />
          <div
            className="absolute top-0 left-0 w-full h-full opacity-30 fabric-wave"
            style={{
              background:
                "repeating-linear-gradient(100deg, transparent 0px, transparent 60px, rgba(255,255,255,0.15) 60px, rgba(255,255,255,0.15) 61px)",
            }}
          />

          <div className="relative md:w-2/5 w-full md:p-8 p-6 fabric-float">
            <div className="w-8 h-0.5 bg-cardbg mb-5" />
            <h2 className="font-Yeseva text-xl leading-relaxed">
              صحرا تجسم، به رهبری صحرا حسینی — فضایی برای کار عمیق با خود.
            </h2>
            <p className="text-sm leading-8 mt-5 font-jakarta text-textmuted">
              صحرا حسینی، درمانگر بدن‌محور و هیجانی است که با رویکردی آرام و غیرقضاوتی، همراه افرادی است که می‌خواهند از اضطراب، فرسودگی و الگوهای تکراری رها شوند.
            </p>
            <Link
              href="/about"
              className="font-jakarta hover:bg-line ease-out duration-200 leading-7 p-1 font-semibold mt-10 text-sm rounded-sm bg-brown flex justify-center items-center md:w-full w-10/12 md:mx-0 mx-auto"
            >
              بیشتر درباره صحرا حسینی
            </Link>
          </div>
        </div>
      </AnimationOnScroll>
    </section>
  );
}

export default Info;
