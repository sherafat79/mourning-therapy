/* eslint-disable react/no-unescaped-entities */
import React from "react";
import JourneyCard from "./JourneyCard";
import serviceIcon from "@/assets/images/icons/medical-analysis.svg";
import supportIcon from "@/assets/images/icons/customer-support.svg";

function Journey() {
  return (
    <section className="text-black">
      <h2 className="font-Yeseva text-center font-normal leading-9 text-[2rem] ">
        Begin Your Journey With Ariana Behravan
      </h2>
      <div className="flex flex-col md:flex-row items-center gap-20 justify-center mt-16 w-4/6 mx-auto">
        <JourneyCard
          icon={supportIcon}
          href="/contact"
          title="Book a Free Phone Consultation"
          link="Contact Us"
          description="Book your free consultation and let our supportive process guide you towards positive changes and well-being."
        />
        <hr className="text-black w-full md:hidden  mt-14" />
        <div className="border-l h-[200px] hidden md:block border-opacity-25  border-black"></div>
        <JourneyCard
          icon={serviceIcon}
          href="/service"
          title="Familiarize Yourself with Our Process"
          link="View Our Services"
          description="In your initial phone consultation, your therapist will address any queries you have and set up your inaugural session."
        />
      </div>
    </section>
  );
}

export default Journey;
