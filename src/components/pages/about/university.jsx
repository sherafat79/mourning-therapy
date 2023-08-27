import React from "react";
import UniversityItem from "./universityItem";
import colImg from "@/assets/images/colifornia.png";
import uni2 from "@/assets/images/uni2.png";

function University() {
  return (
    <section className="flex flex-col md:flex-row justify-center gap-4  items-center w-full px-4 md:px-0 ">
      <UniversityItem
        title="Pepperdine University"
        description="Master of Arts in Clinical Psychology with an emphasis in Marriage and Family Therapy"
        icon={uni2}
      />
      <UniversityItem
        description="Bachelor of Arts in Psychology and Social Behavior"
        icon={colImg}
        title="University of California, Irvine"
      />
    </section>
  );
}

export default University;
