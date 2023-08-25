import React from "react";
import ServiceCard from "./serviceCard";
import icon from "@/assets/images/icons/discussion.svg";
function Services() {
  return (
    <section className="p-4">
      <h2 className="font-Yeseva mb-16 text-4xl text-center ">
        Compassionate Therapy Services
      </h2>
      <div className="flex items-center w-full justify-center gap-8 px-40">
        <ServiceCard
          content="Individual therapy is a one-on-one process that helps individuals understand their emotions."
          title="Individual Therapy"
          icon={icon}
          href="/"
          link="Therapy for Individuals"
        />
        <ServiceCard
          content="Individual therapy is a one-on-one process that helps individuals understand their emotions."
          title="Individual Therapy"
          icon={icon}
          href="/"
          link="Therapy for Individuals"
        />
        <ServiceCard
          content="Individual therapy is a one-on-one process that helps individuals understand their emotions."
          title="Individual Therapy"
          icon={icon}
          href="/"
          link="Therapy for Individuals"
        />
      </div>
    </section>
  );
}

export default Services;
