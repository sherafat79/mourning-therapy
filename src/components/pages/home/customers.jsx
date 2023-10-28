/* eslint-disable react/no-unescaped-entities */
"use client";
import Image from "next/image";
import React, { useCallback, useRef } from "react";
import defaultImage from "@/assets/images/icons/customer.svg";
import leftIcon from "@/assets/images/icons/left.svg";
import rightIcon from "@/assets/images/icons/right.svg";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";

function Customers() {
  const sliderRef = useRef(null);
  const handlePrev = useCallback(() => {
    if (!sliderRef.current) return;
    sliderRef.current.swiper.slidePrev();
  }, []);

  const handleNext = useCallback(() => {
    if (!sliderRef.current) return;
    sliderRef.current.swiper.slideNext();
  }, []);
  return (
    <section className="text-black">
      <div className="flex items-center justify-between  h-full mt-16 md:w-[70%]  w-full  p-4 md:p-0 mx-auto">
        <button className="w-11 h-6 " onClick={handleNext}>
          <Image
            src={leftIcon}
            width={128}
            height={128}
            alt="instagram"
            className="h-full w-full"
          />
        </button>
        <Swiper
          modules={[Navigation]}
          ref={sliderRef}
          spaceBetween={0}
          loop
          slidesPerView={1}
          className="w-11/12"
        >
          <SwiperSlide>
            <div className="text-center">
              <Image
                src={defaultImage}
                height={64}
                className="mx-auto mb-16"
                alt="icon"
                width={64}
              />
              <h5 className="font-Yeseva md:text-2xl text-sm ">
                Working with Ariana Behravan has been life-changing; her
                empathy, understanding, and guidance helped me navigate my
                emotional challenges and transformed my life for the better.
              </h5>
              <p className="text-cardbg font-jakarta text-xl font-semibold mt-7">
                Student
              </p>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="text-center">
              <Image
                src={defaultImage}
                height={64}
                className="mx-auto mb-16"
                alt="icon"
                width={64}
              />
              <h5 className="font-Yeseva md:text-2xl text-sm ">
                Working with Ariana Behravan has been life-changing; her
                empathy, understanding, and guidance helped me navigate my
                emotional challenges and transformed my life for the better.
              </h5>
              <p className="text-cardbg font-jakarta text-xl font-semibold mt-7">
                Student
              </p>
            </div>
          </SwiperSlide>
        </Swiper>
        <button onClick={handlePrev}>
          <Image
            src={rightIcon}
            width={128}
            height={128}
            alt="instagram"
            className="h-full w-full"
          />
        </button>
      </div>
    </section>
  );
}

export default Customers;
