/* eslint-disable react/no-unescaped-entities */
import Image from "next/image";
import React from "react";
import defaultImage from "@/assets/images/icons/medical-analysis.svg";
import JourneyCard from "./JourneyCard";

function Journey() {
  return (
    <section className="text-black">
      <h2 className="font-Yeseva text-center font-normal leading-9 text-[2rem] ">
        Begin Your Journey With Ariana Behravan
      </h2>
      <div className="flex items-center gap-20 justify-center mt-16 w-4/6 mx-auto">
        <JourneyCard />
        <div className="border-l h-[200px] border-opacity-25  border-black"></div>
        <JourneyCard />
      </div>
    </section>
  );
}

export default Journey;
