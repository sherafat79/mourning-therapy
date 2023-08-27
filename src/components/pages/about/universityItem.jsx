/* eslint-disable react/no-unescaped-entities */
import Image from "next/image";
import React from "react";
import colImg from "@/assets/images/colifornia.png";
function UniversityItem({ icon }) {
  return (
    <div className=" h-full  border-8 text-black border-cardbg rounded-[50%] flex flex-col justify-start items-center text-center  p-16">
      <Image
        className="md:w-72 md:h-72 w-24 h-24"
        src={colImg}
        width={1028}
        height={1028}
        alt="uni"
      />
      <h2 className="font-Yeseva font-normal mt-8 md:mt-0 text-sm md:text-[2rem] ">
        University of California, Irvine
      </h2>{" "}
      <p className="font-jakarta text-sm md:text-xl italic ">
        Bachelor of Arts in Psychology and Social Behavior
      </p>
    </div>
  );
}

export default UniversityItem;
