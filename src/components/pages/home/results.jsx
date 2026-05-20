"use client";
import React from "react";
import {AnimationOnScroll} from "react-animation-on-scroll";
import Image from "next/image";

function Results() {
  return (
    <section className="w-full relative overflow-hidden min-h-[30rem] flex flex-col-reverse md:flex-row items-stretch bg-sand border-y border-line">
      {/* Left side: Content card (in RTL: displays on the left on desktop, bottom on mobile) */}
      <div className="md:w-1/2 w-full p-8 md:p-16 flex flex-col justify-center relative bg-sand">
        <div className="absolute inset-0 fabric-texture pointer-events-none" />
        <div
          className="absolute inset-0 opacity-10 pointer-events-none"
          style={{
            background:
              "repeating-linear-gradient(65deg, transparent 0px, transparent 50px, rgba(255,255,255,0.25) 50px, rgba(255,255,255,0.25) 51px)",
          }}
        />
        <AnimationOnScroll
          animateIn="animate__fadeIn"
          duration={1}
          animateOnce={true}
          className="relative z-10 w-full"
        >
          <div className="bg-[#FAF7F4]/90 backdrop-blur-md p-8 w-full text-black fabric-wave border-r-2 border-cardbg/30 rounded-sm">
            <div className="w-8 h-0.5 bg-cardbg mb-5" />
            <h2 className="font-Yeseva font-normal leading-9 text-xl md:text-2xl text-darkBrown">
              Emotional Regulation · Somatic Work · Decision Support
            </h2>
            <p className="text-sm font-jakarta font-medium mt-5 leading-8 text-textmuted">
              کار با اضطراب، فریز و فرسودگی از طریق تنظیم سیستم عصبی. بازسازی حس
              ایمنی در بدن و همراهی در تصمیم‌های مهم زندگی با آگاهی از الگوهای
              درونی.
            </p>
          </div>
        </AnimationOnScroll>
      </div>

      {/* Right side: Image (in RTL: displays on the right on desktop, top on mobile) */}
      <div className="md:w-1/2 w-full relative min-h-[36rem] md:min-h-auto">
        <Image
          src="/images/IMG_1257.JPG"
          alt="نتایج رویکرد"
          fill
          className="object-cover"
          sizes="(max-width: 998px) 100vw, 50vw"
          priority
        />
        <div className="absolute inset-0 fabric-texture pointer-events-none" />
        <div
          className="absolute bottom-0 left-0 w-full h-full opacity-10 pointer-events-none"
          style={{
            background:
              "radial-gradient(ellipse at 30% 60%, rgba(253,250,247,0.9) 0%, transparent 55%)",
          }}
        />
      </div>
    </section>
  );
}

export default Results;
