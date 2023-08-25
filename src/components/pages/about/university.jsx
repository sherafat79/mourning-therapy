import React from "react";
import UniversityItem from "./universityItem";

function University() {
  return (
    <section className="flex justify-center gap-4 h-[600px] items-center w-[80%] mx-auto ">
      <UniversityItem />
      <UniversityItem />
    </section>
  );
}

export default University;
