/* eslint-disable react/no-unescaped-entities */
"use client";

import Image from "next/image";
import React from "react";
import defaultImage from "@/assets/images/icons/area.svg";

function Area() {
  return (
    <section className="text-black">
      <div className="flex md:flex-row flex-col items-center gap-20 justify-center md:mt-16 md:w-[60%] p-8 md:p-0 mx-auto">
        <div className="md:w-2/5 w-full">
          <Image
            src={defaultImage}
            width={128}
            height={128}
            alt="img"
            className="w-full h-full"
          />
        </div>
        <div className="text-black md:w-1/2 text-center md:text-left w-full ">
          <h4 className="font-Yeseva font-normal  text-[2rem] mb-10 ">
            Key Areas of Expertise
          </h4>
          <p className="font-jakarta text-xl leading-normal ">
            Anxiety Disorders, Depression, Trauma and PTSD, Substance Abuse,
            Relationship Issues, Bipolar Disorder, Codependency, Coping
            Strategies, Divorce, Family Disputes, Grief, Marital and Premarital
            Counselling, Pregnancy, Prenatal, Postpartum Challenges
          </p>
        </div>
      </div>
    </section>
  );
}

export default Area;
