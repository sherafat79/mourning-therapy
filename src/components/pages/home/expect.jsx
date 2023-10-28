/* eslint-disable react/no-unescaped-entities */
"use client";

import Image from "next/image";
import React from "react";
import defaultImage from "@/assets/images/backgrounds/def.png";
import { AnimationOnScroll } from "react-animation-on-scroll";

function Expect() {
  return (
    <section className="text-black">
      <h2 className="font-Yeseva text-center font-normal leading-9 text-[2rem] ">
        What to Expect
      </h2>
      <div className="flex flex-col md:flex-row items-center gap-20 justify-center mt-16 md:w-[60%] md:mx-auto">
        <div className="md:w-1/2 w-full ">
          <AnimationOnScroll animateIn="animate__zoomIn" duration={2}>
            <Image
              src={defaultImage}
              width={128}
              height={128}
              alt="img"
              className="w-full h-full"
            />
          </AnimationOnScroll>
        </div>
        <div className="text-black md:w-1/2 w-full p-8   ">
          <AnimationOnScroll animateIn="animate__fadeInRight" duration={2}>
            <h4 className="font-Yeseva font-normal  text-2xl mb-7 ">
              Journey Towards Healing
            </h4>
            <p className="font-jakarta text-sm leading-7 ">
              When you choose therapy with Ariana Behravan, anticipate an
              empathetic, secure environment where your unique needs are
              prioritized. In our sessions, you'll have the opportunity to
              explore your emotions, navigate life's challenges, and gain
              valuable insights. Together, we'll develop effective coping
              strategies, empowering you to achieve your goals. Our
              collaborative process is designed to foster personal growth,
              enhance your wellbeing, and guide you towards a path of emotional
              resilience and fulfillment.
            </p>
          </AnimationOnScroll>
        </div>
      </div>
    </section>
  );
}

export default Expect;
