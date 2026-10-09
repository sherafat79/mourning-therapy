import React from "react";
import ServiceCard from "./serviceCard";
import icon from "@/assets/images/icons/discussion.svg";
import iconIndividual from "@/assets/images/icons/tiredness.svg";
import iconFamily from "@/assets/images/icons/social-community.svg";
import { getDictionary } from "@/i18n/dictionaries";
import { localePath } from "@/i18n/config";

const icons = [iconIndividual, icon, iconFamily];

function Services({ locale }) {
  const { services } = getDictionary(locale).home;
  return (
    <section className="p-4">
      <div className="text-center mb-14">
        <p className="text-xs tracking-widest text-cardbg mb-3 font-medium">{services.eyebrow}</p>
        <h2 className="font-Yeseva text-4xl">{services.title}</h2>
      </div>
      <div className="flex flex-col md:flex-row items-stretch w-full justify-center gap-6 md:px-40">
        {services.items.map((item, i) => (
          <ServiceCard
            key={item.href}
            content={item.content}
            title={item.title}
            icon={icons[i]}
            href={localePath(locale, item.href)}
            link={services.learnMore}
            iconAlt={services.iconAlt}
          />
        ))}
      </div>
    </section>
  );
}

export default Services;
