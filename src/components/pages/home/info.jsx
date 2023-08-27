/* eslint-disable react/no-unescaped-entities */
import React from "react";

function Info() {
  return (
    <section className=" flex flex-col text-black justify-center items-center w-8/12 mx-auto gap-16 ">
      <h2 className="font-Yeseva text-2xl text-center ">
        You are worthy of a life brimming with love, joy, and satisfaction. Our
        commitment is to guide you in discovering it.
      </h2>
      <div className="bg-2 bg-cover bg-cover bg-no-repeat w-full rounded    ">
        <div className="w-2/5 text-bg  p-8">
          <h2 className="font-Yeseva text-2xl  text-left ">
            Mourning Therapy, led by Ariana Behravan, is Newport Beach's leading
            destination for individual, couple, and family therapy.
          </h2>
          <p className="text-sm leading-7 mt-6 font-jakarta">
            Ariana Behravan, a compassionate and experienced therapist working
            in the areas of anxiety, depression, grief, substance issues,
            relationship issues, and family conflict. She is dedicated to
            helping individuals and families overcome challenges and find
            healing.
          </p>
          <button className="font-jakarta leading-7 p-1 font-semibold mt-14 text-sm rounded bg-brown flex justify-center items-center w-full">
            Discover More About Ariana Behravan
          </button>
        </div>
      </div>
    </section>
  );
}

export default Info;
