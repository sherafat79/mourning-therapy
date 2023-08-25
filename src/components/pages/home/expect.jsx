/* eslint-disable react/no-unescaped-entities */
import Image from "next/image";
import React from "react";
import defaultImage from "@/assets/images/backgrounds/def.png";

function Expect() {
  return (
    <section className="text-black">
      <h2 className="font-Yeseva text-center font-normal leading-9 text-[2rem] ">
        What to Expect
      </h2>
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
          <h4 className="font-Yeseva font-normal  text-2xl mb-7 ">
            Journey Towards Healing
          </h4>
          <p className="font-jakarta text-sm leading-7 ">
            When you choose therapy with Ariana Behravan, anticipate an
            empathetic, secure environment where your unique needs are
            prioritized. In our sessions, you'll have the opportunity to explore
            your emotions, navigate life's challenges, and gain valuable
            insights. Together, we'll develop effective coping strategies,
            empowering you to achieve your goals. Our collaborative process is
            designed to foster personal growth, enhance your wellbeing, and
            guide you towards a path of emotional resilience and fulfillment.
          </p>
        </div>
      </div>
    </section>
  );
}

export default Expect;
