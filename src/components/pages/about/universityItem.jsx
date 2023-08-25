/* eslint-disable react/no-unescaped-entities */
import Image from "next/image";
import React from "react";
import colImg from "@/assets/images/colifornia.png";
function UniversityItem({ icon }) {
  return (
    <div className=" h-full  border-8 text-black border-cardbg rounded-[50%] flex flex-col justify-start items-center text-center p-16">
      <Image
        className="w-72 h-72"
        src={colImg}
        width={1028}
        height={1028}
        alt="uni"
      />
      <h2 className="font-Yeseva font-normal  text-[2rem] ">
        University of California, Irvine
      </h2>{" "}
      <p className="font-jakarta text-xl italic ">
        Bachelor of Arts in Psychology and Social Behavior
      </p>
    </div>
  );
}

export default UniversityItem;
