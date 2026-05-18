"use client";
import React from "react";
import { AnimationOnScroll } from "react-animation-on-scroll";

function Results() {
  return (
    <section className="w-full relative overflow-hidden min-h-[28rem] flex items-center justify-end">
      {/* Full-width fabric background — replaces bg-5.png */}
      <div
        className="absolute inset-0 fabric-float fabric-delay-1"
        style={{
          background: "linear-gradient(200deg, #f7f0ea 0%, #e8ddd4 35%, #c9b8ae 70%, #b8a89e 100%)",
        }}
      >
        <div className="absolute inset-0 fabric-texture" />
        <div
          className="absolute bottom-0 left-0 w-2/3 h-full opacity-25 silk-drift fabric-delay-2"
          style={{
            background:
              "radial-gradient(ellipse at 30% 60%, rgba(253,250,247,0.9) 0%, transparent 55%)",
          }}
        />
        <div
          className="absolute inset-0 opacity-10"
          style={{
            background:
              "repeating-linear-gradient(65deg, transparent 0px, transparent 50px, rgba(255,255,255,0.25) 50px, rgba(255,255,255,0.25) 51px)",
          }}
        />
      </div>

      {/* Content — right-aligned (RTL: left side visually) */}
      <div className="relative md:ml-80 ml-0 w-full md:w-auto">
        <AnimationOnScroll animateIn="animate__fadeIn" duration={1} animateOnce={true}>
          <div className="bg-[#FAF7F4]/85 backdrop-blur-md p-8 md:w-[22rem] w-full text-black fabric-wave border-r-2 border-cardbg/30">
            <div className="w-8 h-0.5 bg-cardbg mb-5" />
            <h2 className="font-Yeseva font-normal leading-9 text-xl text-darkBrown">
              Emotional Regulation · Somatic Work · Decision Support
            </h2>
            <p className="text-sm font-jakarta font-medium mt-5 leading-8 text-textmuted">
              کار با اضطراب، فریز و فرسودگی از طریق تنظیم سیستم عصبی. بازسازی حس ایمنی در بدن و همراهی در تصمیم‌های مهم زندگی با آگاهی از الگوهای درونی.
            </p>
          </div>
        </AnimationOnScroll>
      </div>
    </section>
  );
}

export default Results;
