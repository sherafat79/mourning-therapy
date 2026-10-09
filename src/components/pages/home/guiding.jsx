import React from "react";
import GuidingCard from "./guidingCard";
import { getDictionary } from "@/i18n/dictionaries";

function Guiding({ locale }) {
  const { guiding } = getDictionary(locale).home;
  return (
    <section className="bg-4 py-20 text-black w-full flex justify-center bg-cover bg-no-repeat items-center flex-col fabric-texture">
      <div className="text-center mb-12">
        <p className="text-xs tracking-widest text-darkBrown mb-3 font-medium">{guiding.eyebrow}</p>
        <h2 className="font-Yeseva font-normal leading-9 text-[2rem]">{guiding.title}</h2>
      </div>
      <div className="flex md:flex-row flex-col gap-6 items-stretch justify-center px-6">
        {guiding.items.map((item) => (
          <GuidingCard key={item.title} title={item.title} description={item.description} />
        ))}
      </div>
    </section>
  );
}

export default Guiding;
