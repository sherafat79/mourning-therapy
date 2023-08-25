/* eslint-disable react/no-unescaped-entities */
import Image from "next/image";
import React from "react";
import defaultImage from "@/assets/images/icons/area.svg";

function Area() {
  return (
    <section className="text-black">
      <div className="flex items-center gap-20 justify-center mt-16 w-[60%] mx-auto">
        <div className="w-1/2">
          <Image
            src={defaultImage}
            width={128}
            height={128}
            alt="img"
            className="w-full h-full"
          />
        </div>
        <div className="text-black w-1/2 ">
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
