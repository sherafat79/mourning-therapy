import React from "react";
import JourneyCard from "./JourneyCard";
import serviceIcon from "@/assets/images/icons/medical-analysis.svg";
import supportIcon from "@/assets/images/icons/customer-support.svg";
import { getDictionary } from "@/i18n/dictionaries";
import { localePath } from "@/i18n/config";

const icons = [supportIcon, serviceIcon];

function Journey({ locale }) {
  const { journey } = getDictionary(locale).home;
  return (
    <section className="text-black">
      <div className="text-center mb-12">
        <p className="text-xs tracking-widest text-cardbg mb-3 font-medium">{journey.eyebrow}</p>
        <h2 className="font-Yeseva font-normal leading-9 text-[2rem]">
          {journey.title}
        </h2>
      </div>
      <div className="flex flex-col md:flex-row items-center gap-16 justify-center w-4/6 mx-auto">
        {journey.items.map((item, i) => (
          <React.Fragment key={item.href}>
            {i > 0 && (
              <>
                <hr className="text-black w-full md:hidden mt-10" />
                <div className="border-e h-[180px] hidden md:block border-opacity-20 border-black" />
              </>
            )}
            <JourneyCard
              icon={icons[i]}
              href={localePath(locale, item.href)}
              title={item.title}
              link={item.link}
              description={item.description}
              iconAlt={journey.iconAlt}
            />
          </React.Fragment>
        ))}
      </div>
    </section>
  );
}

export default Journey;
