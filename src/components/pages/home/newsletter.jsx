import Image from "next/image";
import React from "react";
import defaultImage from "@/assets/images/backgrounds/def.png";

function NewsLetter() {
  return (
    <section className=" mx-auto flex  bg-cardbg gap-11 w-3/4">
      <div className="w-1/2">
        <Image
          src={defaultImage}
          width={128}
          height={128}
          alt="img"
          className="w-full h-full"
        />
      </div>
      <div className="w-1/2 p-20 flex flex-col justify-center items-center">
        <h2 className="font-Yeseva text-center font-normal leading-9 text-[2rem] ">
          NEWSLETTER
        </h2>
        <p className="font-jakarta mt-6 text-base leading-7">
          Stay updated with our latest insights, therapeutic strategies, and
          tips for healthier relationships.
        </p>
        <div className="flex gap-1 font-jakarta w-full  mt-5">
          <input
            type="email"
            placeholder="your email address"
            className="bg-white   w-8/12 bg-opacity-20 px-4 py-1 rounded placeholder:text-darkBrown text-xs "
          />
          <button className="bg-brown flex  hover:bg-line ease-in-out duration-500   w-4/12 rounded justify-center items-center px-2 py-3">
            Send
          </button>
        </div>
      </div>
    </section>
  );
}

export default NewsLetter;
