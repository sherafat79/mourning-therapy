import React from "react";
import UniversityItem from "./universityItem";
import { getDictionary } from "@/i18n/dictionaries";

function University({ locale }) {
  const items = getDictionary(locale).about.university;
  return (
    <section className="flex flex-col md:flex-row justify-center gap-8 items-center w-full px-4 md:px-0">
      {items.map((item) => (
        <UniversityItem key={item.title} title={item.title} description={item.description} />
      ))}
    </section>
  );
}

export default University;
