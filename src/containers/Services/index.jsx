/* eslint-disable react/no-unescaped-entities */
"use client";
import Link from "next/link";
import React, { useCallback, useState } from "react";
import Individual from "@/components/pages/services/Individual";
import Family from "@/components/pages/services/Family";
import Couples from "@/components/pages/services/Couples";

// Fabric gradient panels — replace with real photos when available
const servicePanels = {
  individual: "linear-gradient(145deg, #f7f0ea 0%, #e8ddd4 50%, #c9b8ae 100%)",
  couples: "linear-gradient(160deg, #e8ddd4 0%, #c9b8ae 40%, #a89890 100%)",
  family: "linear-gradient(135deg, #f0e6dc 0%, #d9cec7 50%, #b8a89e 100%)",
};

const data = [
  { id: 1, name: "جلسات فردی بدن‌محور", query: "individual" },
  { id: 2, name: "حمایت در تصمیم‌گیری", query: "couples" },
  { id: 3, name: "کار هیجانی و سوماتیک", query: "family" },
];

function ServicesContainer({ type }) {
  const [activeTab, setActiveTab] = useState(
    data.find((item) => item.query === type.toLowerCase()) ?? data[0]
  );

  React.useEffect(() => {
    const found = data.find((item) => item.query === type.toLowerCase()) ?? data[0];
    if (activeTab?.id !== found.id) {
      setActiveTab(found);
    }
  }, [type, activeTab]);

  const RenderTabContent = useCallback(() => {
    switch (type.toLowerCase()) {
      case "individual": return <Individual />;
      case "couples": return <Couples />;
      case "family": return <Family />;
      default: return <Individual />;
    }
  }, [type]);

  return (
    <div className="w-full flex service-container">
      <div className="side w-1/5 px-16 py-12 hidden md:block bg-side">
        <h2 className="font-jakarta text-xl font-bold text-black mb-10">
          خدمات
        </h2>
        <ul className="flex font-medium text-black font-jakarta text-base flex-col gap-5">
          {data.map((item) => (
            <li key={item.name}>
              <Link
                className={`ease-out duration-200 hover:text-cardbg ${
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
      <div className="md:w-4/5 w-full text-black">
        {/* Fabric banner — replaces service image */}
        <div
          className="h-[27rem] w-full relative overflow-hidden fabric-wave"
          style={{ background: servicePanels[type.toLowerCase()] ?? servicePanels.individual }}
        >
          <div className="absolute inset-0 fabric-texture" />
          <div
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-2/3 h-2/3 opacity-20 gentle-ripple"
            style={{ background: "radial-gradient(ellipse, #fdfaf7 0%, transparent 65%)" }}
          />
          <div
            className="absolute inset-0 opacity-10"
            style={{
              background:
                "repeating-linear-gradient(110deg, transparent 0px, transparent 55px, rgba(255,255,255,0.2) 55px, rgba(255,255,255,0.2) 56px)",
            }}
          />
          <div className="absolute bottom-8 right-10">
            <h3 className="font-Yeseva text-white/60 text-2xl">{activeTab.name}</h3>
          </div>
        </div>
        <div className="md:p-20 p-8 flex font-jakarta text-xl leading-[2.5rem] flex-col gap-11">
          <h1 className="text-[2rem] font-Yeseva">{activeTab.name}</h1>
          <RenderTabContent />
        </div>
      </div>
    </div>
  );
}

export default ServicesContainer;
