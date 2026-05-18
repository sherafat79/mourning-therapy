"use client";
import React from "react";
import { AnimationOnScroll } from "react-animation-on-scroll";

function UniversityItem({ title, description }) {
  return (
    <div className="border-8 text-black border-cardbg overflow-hidden rounded-[50%] flex flex-col justify-center items-center text-center p-16 relative">
      <AnimationOnScroll animateIn="animate__fadeIn" duration={1} animateOnce={true}>
        <div className="max-w-md md:px-10">
          {/* Fabric accent circle */}
          <div
            className="w-24 h-24 md:w-40 md:h-40 rounded-full mx-auto mb-6 breathe relative overflow-hidden"
            style={{
              background: "linear-gradient(135deg, #f7f0ea 0%, #e8ddd4 50%, #c9b8ae 100%)",
            }}
          >
            <div className="absolute inset-0 fabric-texture" />
            <div
              className="absolute inset-0 opacity-30 gentle-ripple"
              style={{ background: "radial-gradient(ellipse, #fdfaf7 0%, transparent 70%)" }}
            />
          </div>
          <h2 className="font-Yeseva font-normal leading-normal text-sm md:text-[1.6rem]">{title}</h2>
          <p className="font-jakarta mt-2 text-sm md:text-base text-textmuted italic">{description}</p>
        </div>
      </AnimationOnScroll>
    </div>
  );
}

export default UniversityItem;
