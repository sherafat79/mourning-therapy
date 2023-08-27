import React from "react";
import GuidingCard from "./guidingCard";

function Guiding() {
  return (
    <section className="bg-4 py-16 text-black w-full flex justify-center  bg-cover bg-no-repeat   items-center flex-col ">
      <h2 className="font-Yeseva mb-11 text-center font-normal leading-9 text-[2rem] ">
        Guiding Principles of Care
      </h2>{" "}
      <div className="md:w-2/3 w-11/12 flex md:flex-row flex-col gap-6 items-center justify-center ">
        <GuidingCard
          title="Compassionate Understanding"
          description="We believe in providing a safe, empathetic space where you feel seen, heard, and validated. We strive to understand your unique experiences and emotions, offering genuine care and respect."
        />
        <GuidingCard
          title="Collaborative Empowerment"
          description=" We value your active participation in the therapeutic process. By working together, we aim to unlock your inner strengths, develop effective coping strategies, and empower you to achieve your personal and relational goals."
        />
        <GuidingCard
          title="Commitment to Growth"
          description="We are dedicated to facilitating personal development and resilience. Utilizing evidence-based practices and constantly staying informed about the latest research and therapeutic techniques, we help you navigate life's challenges and embrace a path of growth and healing"
        />
      </div>
    </section>
  );
}

export default Guiding;
