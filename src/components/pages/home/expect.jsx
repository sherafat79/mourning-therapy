"use client";
import React from "react";
import {AnimationOnScroll} from "react-animation-on-scroll";
import Image from "next/image";
import { useI18n } from "@/i18n/provider";

function Expect() {
  const { t } = useI18n();
  const h = t.home.expect;
  return (
    <section className="text-black">
      <div className="text-center mb-12">
        <p className="text-xs tracking-widest text-cardbg mb-3 font-medium">
          {h.eyebrow}
        </p>
        <h2 className="font-Yeseva font-normal leading-9 text-[2rem]">
          {h.title}
        </h2>
      </div>
      <div className="flex flex-col md:flex-row items-center gap-16 justify-center md:w-[65%] md:mx-auto px-6">
        {/* Fabric visual panel */}
        <div className="md:w-1/2 w-full">
          <AnimationOnScroll
            animateIn="animate__fadeIn"
            duration={1}
            animateOnce={true}
          >
            <div className="breathe w-full aspect-square rounded-sm relative overflow-hidden">
              <Image
                src="/images/1.jpeg"
                alt={h.imageAlt}
                fill
                className="object-cover"
                sizes="(max-width: 998px) 100vw, 50vw"
              />
              {/* Fabric texture lines */}
              <div className="absolute inset-0 fabric-texture" />
              <div
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3/4 h-3/4 rounded-full opacity-20 gentle-ripple"
                style={{
                  background:
                    "radial-gradient(ellipse, #fdfaf7 0%, transparent 70%)",
                }}
              />
              <div className="absolute bottom-8 start-8 w-16 h-0.5 bg-white/50 z-10" />
              <div className="absolute bottom-12 start-8 w-10 h-0.5 bg-white/30 z-10" />
            </div>
          </AnimationOnScroll>
        </div>

        <div className="text-black md:w-1/2 w-full">
          <AnimationOnScroll
            animateIn="animate__fadeIn"
            duration={1}
            animateOnce={true}
          >
            <div className="w-8 h-0.5 bg-cardbg mb-6" />
            <h3 className="font-Yeseva font-normal text-2xl mb-6">
              {h.subtitle}
            </h3>
            <div className="font-jakarta text-sm leading-8 text-textmuted space-y-4">
              {h.paragraphs.map((text, i) => (
                <p key={i}>{text}</p>
              ))}
            </div>
          </AnimationOnScroll>
        </div>
      </div>
    </section>
  );
}

export default Expect;
