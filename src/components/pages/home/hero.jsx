"use client";
import Link from "next/link";
import React, { useEffect, useRef } from "react";

function Hero() {


  return (
    <section className="relative flex justify-center md:items-center items-end h-screen overflow-hidden">
      {/* Slow-motion video background */}
      <video
      
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
        src="/hero.mp4"
      />

      {/* Warm overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#2E2B28]/30 via-[#F0E6DC]/20 to-[#FAF7F4]/60" />

      {/* Content card — no entrance animation */}
      <div className="relative bg-[#FAF7F4]/80 backdrop-blur-md p-10 md:w-[42rem] w-full text-black fabric-wave border-r-2 border-cardbg/40">
        <div className="w-12 h-0.5 bg-cardbg mb-6 mr-auto" />

        <h1 className="font-Yeseva font-normal leading-relaxed text-[1.8rem] text-black">
          تغییر وقتی ماندگار است که از درون احساس امنیت شروع شود، نه از اجبار ذهن.
        </h1>

        <p className="text-sm font-jakarta font-medium mt-5 leading-8 text-textmuted">
          صحرا حسینی، درمانگر بدن‌محور و هیجانی — فضایی آرام برای کار با بدن، احساس و تجربه‌ی زنده‌ی شما.
        </p>

        <div className="w-8 h-0.5 bg-line mt-6 mr-auto" />

        <Link
          href="/contact"
          className="font-jakarta hover:bg-line ease-out duration-300 leading-7 p-2 font-semibold mt-10 text-sm rounded-sm bg-brown flex justify-center items-center w-10/12 mx-auto"
        >
          شروع مشاوره
        </Link>
      </div>
    </section>
  );
}

export default Hero;
