"use client";
import React from "react";
import { AnimationOnScroll } from "react-animation-on-scroll";
import Link from "next/link";
import { useI18n } from "@/i18n/provider";

function OnlineTherapy() {
  const { t, path } = useI18n();
  const h = t.home.online;
  return (
    <section className="w-full relative overflow-hidden min-h-[28rem] flex items-center">
      {/* Full-width fabric background — replaces bg-3.png */}
      <div
        className="absolute inset-0 fabric-wave"
        style={{
          background: "linear-gradient(160deg, #e8ddd4 0%, #c9b8ae 40%, #b8a89e 100%)",
        }}
      >
        <div className="absolute inset-0 fabric-texture" />
        <div
          className="absolute top-0 start-0 w-2/3 h-full opacity-20 silk-drift fabric-delay-1"
          style={{
            background:
              "radial-gradient(ellipse at 70% 50%, rgba(253,250,247,0.8) 0%, transparent 60%)",
          }}
        />
        {/* Diagonal fabric lines */}
        <div
          className="absolute inset-0 opacity-10"
          style={{
            background:
              "repeating-linear-gradient(115deg, transparent 0px, transparent 40px, rgba(255,255,255,0.3) 40px, rgba(255,255,255,0.3) 41px)",
          }}
        />
      </div>

      {/* Content */}
      <div className="relative ms-80 ms-0 w-full md:w-auto">
        <AnimationOnScroll animateIn="animate__fadeIn" duration={1} animateOnce={true}>
          <div className="bg-[#FAF7F4]/85 backdrop-blur-md p-8 md:w-[22rem] w-full text-black fabric-wave border-s-2 border-cardbg/30">
            <div className="w-8 h-0.5 bg-cardbg mb-5" />
            <h2 className="font-Yeseva font-normal leading-9 text-xl text-darkBrown">
              {h.title}
            </h2>
            <p className="text-sm font-jakarta font-medium mt-5 leading-8 text-textmuted">
              {h.text}
            </p>
            <Link
              href={path("/contact")}
              className="font-jakarta hover:bg-line ease-out duration-200 leading-7 p-1 font-semibold mt-10 text-sm rounded-sm bg-brown flex justify-center items-center w-full mx-auto"
            >
              {h.cta}
            </Link>
          </div>
        </AnimationOnScroll>
      </div>
    </section>
  );
}

export default OnlineTherapy;
