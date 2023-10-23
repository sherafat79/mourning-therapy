/* eslint-disable react/no-unescaped-entities */
"use client";
import Link from "next/link";
import React, { useCallback, useState } from "react";
import IndividualImage from "@/assets/images/backgrounds/Individual.png";
import FamilyImage from "@/assets/images/backgrounds/Family.png";
import CouplesImage from "@/assets/images/backgrounds/Couples.png";
import Individual from "@/components/pages/services/Individual";
import { useSearchParams } from "next/navigation";
import Image from "next/image";
import Family from "@/components/pages/services/Family";
import Couples from "@/components/pages/services/Couples";
const data = [
  {
    id: 1,
    name: "Individual Therapy",
    image: IndividualImage,
    query: "individual",
  },
  {
    id: 2,
    name: "Couples Therapy",
    image: CouplesImage,
    query: "couples",
  },
  {
    id: 3,
    name: "Family Therapy",
    image: FamilyImage,
    query: "family",
  },
];
function ServicesContainer({ type }) {
  const [activeTab, setActiveTab] = useState(
    data.find((item) => item.query === type.toLowerCase())
  );
  const RenderTabContent = useCallback(() => {
    switch (type.toLowerCase()) {
      case "individual":
        setActiveTab(
          data.find((item) => item.query === type.toLowerCase()) ?? data[0]
        );
        return <Individual />;
      case "couples":
        setActiveTab(
          data.find((item) => item.query === type.toLowerCase()) ?? data[0]
        );
        return <Couples />;
      case "family":
        setActiveTab(
          data.find((item) => item.query === type.toLowerCase()) ?? data[0]
        );
        return <Family />;

      default:
        break;
    }
  }, [type]);
  return (
    <div className="w-full flex service-container">
      <div className="side w-1/5 px-16 py-12 hidden md:block bg-side ">
        <h4 className="font-jakarta text-xl font-bold text-black mb-10">
          SERVICE SPECIALTIES
        </h4>
        <ul className="flex font-medium text-black  font-jakarta text-base flex-col gap-5 ">
          {data.map((item) => (
            <li key={item.name}>
              <Link
                className={`ease-in-out duration-500 hover:text-cardbg  ${
                  type.toLowerCase() === item.query && "text-cardbg font-bold"
                }`}
                href={`/services?type=${item.query}`}
                shallow={false}
              >
                {item.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>
      <div className="md:w-4/5 w-full text-black ">
        <div className="h-[27rem] w-full bg-cardbg">
          <Image
            width={1024}
            height={512}
            alt="image"
            src={activeTab.image}
            className="h-full w-full"
          />
        </div>
        <div className=" md:p-20  p-8 flex font-jakarta text-xl leading-[2.5rem]  flex-col gap-11 ">
          <h1 className="text-[2rem] font-Yeseva">{activeTab.name}</h1>
          <RenderTabContent />
        </div>
      </div>
    </div>
  );
}

export default ServicesContainer;
