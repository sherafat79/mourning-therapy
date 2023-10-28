/* eslint-disable react/no-unescaped-entities */

import Link from "next/link";
import React from "react";

function Hero() {
  return (
    <section className="bg-1 bg-cover bg-no-repeat flex justify-center md:items-center items-end  h-screen">
      <div className="bg-[#F8F8F8] md:bg-opacity-80 bg-opacity-100 p-11 md:w-[40rem] w-full text-black  md:backdrop-blur-[5.5px] backdrop-blur-0   ">
        <h2 className="font-Yeseva font-normal leading-9 text-[2rem] ">
          Healing begins with you; embrace your journey and together, we'll
          unravel the rest.
        </h2>{" "}
        <p className="text-sm font-jakarta font-medium mt-4 leading-7">
          As a therapist, Ariana Behravan, recognizes the power of true
          listening. She goes beyond simply paying full attention, offering you
          the vital resources needed for lasting and meaningful transformation.
        </p>
        <Link
          href="/contact"
          className="font-jakarta hover:bg-line ease-in-out duration-500 leading-7 p-1 font-semibold mt-14 text-sm rounded bg-brown flex justify-center items-center w-11/12 mx-auto"
        >
          Schedule Consultation
        </Link>
      </div>
    </section>
  );
}

export default Hero;
