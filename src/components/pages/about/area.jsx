"use client";
import Image from "next/image";
import React from "react";
import defaultImage from "@/assets/images/icons/area.svg";
import { AnimationOnScroll } from "react-animation-on-scroll";
import { useI18n } from "@/i18n/provider";

function Area() {
  const { t } = useI18n();
  const h = t.about.area;
  return (
    <section className="text-black">
      <div className="flex md:flex-row flex-col items-center gap-16 justify-center md:mt-16 md:w-[60%] p-8 md:p-0 mx-auto">
        <div className="md:w-1/2 w-full">
          <AnimationOnScroll animateIn="animate__fadeIn" duration={1} animateOnce={true}>
            <div className="silk-drift">
              <Image src={defaultImage} width={128} height={128} alt={h.imageAlt} className="w-full h-full" />
            </div>
          </AnimationOnScroll>
        </div>
        <div className="text-black md:w-1/2 text-center md:text-start w-full">
          <AnimationOnScroll animateIn="animate__fadeIn" duration={1} animateOnce={true}>
            <div className="w-8 h-0.5 bg-cardbg mb-6 ms-auto ms-0" />
            <h2 className="font-Yeseva font-normal text-[2rem] mb-8">
              {h.title}
            </h2>
            <div className="font-jakarta text-base leading-9 text-textmuted space-y-2">
              {h.items.map((item) => (
                <p key={item}>{item}</p>
              ))}
            </div>
          </AnimationOnScroll>
        </div>
      </div>
    </section>
  );
}

export default Area;
