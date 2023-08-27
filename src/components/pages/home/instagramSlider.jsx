/* eslint-disable react/no-unescaped-entities */
"use client";
import Image from "next/image";
import React, { useCallback, useRef } from "react";
import defaultImage from "@/assets/images/backgrounds/def.png";
import leftIcon from "@/assets/images/icons/left.svg";
import rightIcon from "@/assets/images/icons/right.svg";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";

function Instagram() {
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
      <h2 className="font-Yeseva text-center font-normal leading-9 text-[2rem] ">
        FOLLOW ME ON INSTAGRAM
      </h2>
      <div className="flex  items-center gap-20 justify-center h-full mt-16 md:w-[60%] p-8 md:p-0  mx-auto">
        <button onClick={handleNext}>
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
          spaceBetween={10}
          loop
          className="w-full"
          slidesPerView={1}
          breakpoints={{
            998: {
              slidesPerView: 5,
              spaceBetween: 20,
            },
          }}
        >
          <SwiperSlide className="md:w-40 w-60 md:h-40 h-60">
            <Image
              src={defaultImage}
              width={128}
              height={128}
              alt="instagram"
              className="h-full w-full"
            />
          </SwiperSlide>
          <SwiperSlide className="md:w-40 w-60 md:h-40 h-60">
            <Image
              src={defaultImage}
              width={128}
              height={128}
              alt="instagram"
              className="h-full w-full"
            />
          </SwiperSlide>
          <SwiperSlide className="md:w-40 w-60 md:h-40 h-60">
            <Image
              src={defaultImage}
              width={128}
              height={128}
              alt="instagram"
              className="h-full w-full"
            />
          </SwiperSlide>
          <SwiperSlide className="md:w-40 w-60 md:h-40 h-60">
            <Image
              src={defaultImage}
              width={128}
              height={128}
              alt="instagram"
              className="h-full w-full"
            />
          </SwiperSlide>
          <SwiperSlide className="md:w-40 w-60 md:h-40 h-60">
            <Image
              src={defaultImage}
              width={128}
              height={128}
              alt="instagram"
              className="h-full w-full"
            />
          </SwiperSlide>
          <SwiperSlide className="md:w-40 w-60 md:h-40 h-60">
            <Image
              src={defaultImage}
              width={128}
              height={128}
              alt="instagram"
              className="h-full w-full"
            />
          </SwiperSlide>
          <SwiperSlide className="md:w-40 w-60 md:h-40 h-60">
            <Image
              src={defaultImage}
              width={128}
              height={128}
              alt="instagram"
              className="h-full w-full"
            />
          </SwiperSlide>
          <SwiperSlide className="md:w-40 w-60 md:h-40 h-60">
            <Image
              src={defaultImage}
              width={128}
              height={128}
              alt="instagram"
              className="h-full w-full"
            />
          </SwiperSlide>
          <SwiperSlide className="md:w-40 w-60 md:h-40 h-60">
            <Image
              src={defaultImage}
              width={128}
              height={128}
              alt="instagram"
              className="h-full w-full"
            />
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

export default Instagram;
