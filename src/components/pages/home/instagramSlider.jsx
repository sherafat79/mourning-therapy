"use client";
import Image from "next/image";
import React, { useCallback, useRef } from "react";
import leftIcon from "@/assets/images/icons/left.svg";
import rightIcon from "@/assets/images/icons/right.svg";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";

// Fabric-toned gradient tiles — replace with real Instagram images when available
const tileGradients = [
  "linear-gradient(135deg, #f7f0ea, #e8ddd4)",
  "linear-gradient(145deg, #e8ddd4, #c9b8ae)",
  "linear-gradient(160deg, #f0e6dc, #d9cec7)",
  "linear-gradient(120deg, #c9b8ae, #b8a89e)",
  "linear-gradient(150deg, #fdfaf7, #f0e6dc)",
  "linear-gradient(135deg, #e8ede8, #c9b8ae)",
  "linear-gradient(140deg, #f7f0ea, #c9b8ae)",
  "linear-gradient(155deg, #e8ddd4, #f0e6dc)",
  "linear-gradient(130deg, #d9cec7, #e8ddd4)",
];

function FabricTile({ gradient, index }) {
  return (
    <div
      className="w-full h-full relative overflow-hidden rounded-sm"
      style={{ background: gradient, minHeight: "160px" }}
    >
      <div className="absolute inset-0 fabric-texture" />
      <div
        className={`absolute inset-0 opacity-20 ${index % 2 === 0 ? "fabric-float" : "silk-drift"}`}
        style={{
          background: "radial-gradient(ellipse at 30% 40%, rgba(255,255,255,0.6) 0%, transparent 60%)",
        }}
      />
    </div>
  );
}

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
      <div className="text-center mb-10">
        <p className="text-xs tracking-widest text-cardbg mb-3 font-medium">INSTAGRAM</p>
        <h2 className="font-Yeseva text-center font-normal leading-9 text-[2rem]">
          من را در اینستاگرام دنبال کنید
        </h2>
      </div>
      <div className="flex items-center gap-6 justify-center h-full mt-8 md:w-[70%] p-4 md:p-0 mx-auto">
        <button onClick={handleNext} className="flex-shrink-0 w-8 h-8">
          <Image src={leftIcon} width={32} height={32} alt="قبلی" className="h-full w-full" />
        </button>
        <Swiper
          modules={[Navigation]}
          ref={sliderRef}
          spaceBetween={10}
          loop
          className="w-full"
          slidesPerView={2}
          breakpoints={{ 998: { slidesPerView: 5, spaceBetween: 12 } }}
        >
          {tileGradients.map((gradient, i) => (
            <SwiperSlide key={i} className="h-40">
              <FabricTile gradient={gradient} index={i} />
            </SwiperSlide>
          ))}
        </Swiper>
        <button onClick={handlePrev} className="flex-shrink-0 w-8 h-8">
          <Image src={rightIcon} width={32} height={32} alt="بعدی" className="h-full w-full" />
        </button>
      </div>
    </section>
  );
}

export default Instagram;
