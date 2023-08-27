import React from "react";
import ServiceCard from "./serviceCard";
import icon from "@/assets/images/icons/discussion.svg";
import iconIndividual from "@/assets/images/icons/tiredness.svg";
import iconFamily from "@/assets/images/icons/social-community.svg";
function Services() {
  return (
    <section className="p-4">
      <h2 className="font-Yeseva mb-16 text-4xl text-center ">
        Compassionate Therapy Services
      </h2>
      <div className="flex flex-col md:flex-row items-center w-full justify-center gap-8 md:px-40">
        <ServiceCard
          content="Individual therapy is a one-on-one process that helps individuals understand their emotions."
          title="Individual Therapy"
          icon={iconIndividual}
          href="/services?type=Individual"
          link="Therapy for Individuals"
        />
        <ServiceCard
          content="Aids partners in resolving conflicts and enhancing communication for healthier relationships"
          title="Marriage & Couples Counseling"
          icon={icon}
          href="/services?type=Couples"
          link="Therapy for Marriage & Couples"
        />
        <ServiceCard
          content="Family therapy fosters healthier interactions and resolves conflicts within family dynamics."
          title="Family Therapy"
          icon={iconFamily}
          href="/services?type=family"
          link="Therapy for Families"
        />
      </div>
    </section>
  );
}

export default Services;
