"use client";

import Image from "next/image";
import React from "react";
import { AnimationOnScroll } from "react-animation-on-scroll";
import bg from "@/assets/images/backgrounds/bg-3.png";
import Link from "next/link";

function OnlineTherapy() {
  return (
    <section
      // className="md:bg-3 bg-cover bg-no-repeat w-full md:px-80"
      className="md:bg-3 md:bg-cover md:bg-no-repeat w-full md:px-80"
    >
      <Image
        src={bg}
        width={1024}
        className="md:hidden block"
        height={512}
        alt="bg"
      />
      <AnimationOnScroll animateIn="animate__fadeInUp" duration={2}>
        <div className="md:bg-milk bg-white  md:bg-opacity-80 p-8  md:w-[20rem] w-full text-black  md:backdrop-blur-[5.5px] ">
          <h2 className="font-Yeseva font-normal leading-9 text-xl text-darkBrown ">
            Connected Care: Remote Therapy Sessions
          </h2>{" "}
          <p className="text-sm font-jakarta font-medium mt-6 leading-7">
            Our unique digital counseling services invite you to experience
            therapeutic support within the serene environment of your personal
            surroundings. Offering a blend of convenience and empathy, we strive
            to deliver profound assistance that meets your unique needs, all
            while prioritizing your comfort.
          </p>
          <Link
            href="/services"
            className="font-jakarta hover:bg-line ease-in-out duration-500 leading-7 p-1 font-semibold md:mt-48 text-sm rounded bg-brown flex justify-center items-center md:w-11/12 mt-8 w-full mx-auto"
          >
            Online Therapy Services
          </Link>
        </div>
      </AnimationOnScroll>
    </section>
  );
}

export default OnlineTherapy;
