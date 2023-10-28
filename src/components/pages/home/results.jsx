"use client";

import Image from "next/image";
/* eslint-disable react/no-unescaped-entities */
import React from "react";
import bg from "@/assets/images/backgrounds/bg-5.png";

function Results() {
  return (
    <section className="md:bg-5 bg-cover bg-no-repeat w-full md:px-80  flex-row-reverse">
      <Image
        src={bg}
        width={1024}
        className="md:hidden block"
        height={512}
        alt="bg"
      />

      <div className="bg-white  md:bg-opacity-80 p-8  md:w-[20rem] w-full text-black  backdrop-blur-[5.5px] ">
        <h2 className="font-Yeseva font-normal leading-9 text-xl text-darkBrown ">
          Guided by Results: Our Empowering Approach
        </h2>{" "}
        <p className="text-sm font-jakarta font-medium mt-6 leading-7">
          At the heart of our therapy is a results-oriented approach, designed
          to facilitate meaningful and lasting change. We prioritize
          evidence-based strategies and tailor them to your unique
          circumstances, ensuring your journey towards healing is both
          empowering and effective. Our aim is not just to help you navigate
          through life's challenges, but to equip you with the tools and
          insights to thrive in your daily life and relationships.
        </p>
      </div>
    </section>
  );
}

export default Results;
