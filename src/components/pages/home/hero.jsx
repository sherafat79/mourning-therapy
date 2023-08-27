/* eslint-disable react/no-unescaped-entities */
"use client";
import React from "react";
import { AnimationOnScroll } from "react-animation-on-scroll";

function Hero() {
  return (
    <section className="bg-1 bg-cover bg-no-repeat flex justify-center items-center  h-screen">
      <AnimationOnScroll animateIn="animate__zoomIn" duration={3}>
        <div className="bg-milk bg-opacity-80 p-11 w-[40rem] text-black  backdrop-blur-[5.5px] ">
          <h2 className="font-Yeseva font-normal leading-9 text-[2rem] ">
            Healing begins with you; embrace your journey and together, we'll
            unravel the rest.
          </h2>{" "}
          <p className="text-sm font-jakarta font-medium mt-4 leading-7">
            As a therapist, Ariana Behravan, recognizes the power of true
            listening. She goes beyond simply paying full attention, offering
            you the vital resources needed for lasting and meaningful
            transformation.
          </p>
          <button className="font-jakarta hover:bg-line ease-in-out duration-500 leading-7 p-1 font-semibold mt-14 text-sm rounded bg-brown flex justify-center items-center w-11/12 mx-auto">
            Schedule Consultation
          </button>
        </div>
      </AnimationOnScroll>
    </section>
  );
}

export default Hero;
