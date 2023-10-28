/* eslint-disable react/no-unescaped-entities */
"use client";

import Image from "next/image";
import React from "react";

function UniversityItem({ icon, title, description }) {
  return (
    <div className=" h-full   border-8 text-black border-cardbg overflow-hidden rounded-[50%] flex flex-col justify-start items-center text-center  p-16">
      <div className="max-w-md md:px-10">
        <Image
          className="md:w-72 md:h-72 w-24 mx-auto h-24"
          src={icon}
          width={512}
          height={512}
          alt="uni"
        />
        <h2 className="font-Yeseva font-normal md:mt-2 mt-8 leading-normal text-sm md:text-[2rem] ">
          {title}
        </h2>{" "}
        <p className="font-jakarta mt-2 text-sm md:text-xl italic ">
          {description}
        </p>
      </div>
    </div>
  );
}

export default UniversityItem;
