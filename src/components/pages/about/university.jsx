import React from "react";
import UniversityItem from "./universityItem";

function University() {
  return (
    <section className="flex flex-col md:flex-row justify-center gap-4 md:h-[600px] items-center w-11/12 md:w-[80%] mx-auto ">
      <UniversityItem />
      <UniversityItem />
    </section>
  );
}

export default University;
