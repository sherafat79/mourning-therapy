"use client";
import Image from "next/image";
/* eslint-disable react/no-unescaped-entities */
import React from "react";
import { AnimationOnScroll } from "react-animation-on-scroll";
import bg from "@/assets/images/backgrounds/bg-2.png";
import Link from "next/link";
function Info() {
  return (
    <AnimationOnScroll animateIn="animate__fadeInUp" duration={3}>
      <section className=" flex flex-col   text-black md:justify-center justify-end items-center md:w-8/12 w-full mx-auto md:gap-16 gap-8 ">
        <h2 className="font-Yeseva text-2xl px-3 text-center ">
          You are worthy of a life brimming with love, joy, and satisfaction.
          Our commitment is to guide you in discovering it.
        </h2>
        <AnimationOnScroll animateIn="animate__zoomIn" duration={3}>
          <div className="bg-2   animate__zoomIn bg-contain md:bg-cover bg-no-repeat w-full rounded    ">
            <div className="md:w-2/5 w-full md:text-bg   md:p-8 p-0">
              <Image
                src={bg}
                width={1024}
                className="md:hidden block"
                height={512}
                alt="bg"
              />
              <h2 className="font-Yeseva text-2xl md:text-left text-center  md:p-0 p-4">
                Mourning Therapy, led by Ariana Behravan, is Newport Beach's
                leading destination for individual, couple, and family therapy.
              </h2>
              <p className="text-sm leading-7 mt-6 font-jakarta md:p-0 p-4">
                Ariana Behravan, a compassionate and experienced therapist
                working in the areas of anxiety, depression, grief, substance
                issues, relationship issues, and family conflict. She is
                dedicated to helping individuals and families overcome
                challenges and find healing.
              </p>
              <Link
                href="/about"
                className="font-jakarta hover:bg-line ease-in-out duration-500 leading-7 p-1 font-semibold mt-14 text-sm rounded bg-brown flex justify-center items-center md:w-full w-10/12 md:mx-0 mx-auto"
              >
                Discover More About Ariana Behravan
              </Link>
            </div>
          </div>
        </AnimationOnScroll>
      </section>
    </AnimationOnScroll>
  );
}

export default Info;
