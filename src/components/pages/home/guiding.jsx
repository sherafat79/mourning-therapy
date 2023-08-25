import React from "react";
import GuidingCard from "./guidingCard";

function Guiding() {
  return (
    <section className="bg-4 py-16 text-black w-full flex justify-center items-center flex-col ">
      <h2 className="font-Yeseva mb-11 text-center font-normal leading-9 text-[2rem] ">
        Guiding Principles of Care
      </h2>{" "}
      <div className="w-2/3 flex gap-6 items-center justify-center ">
        <GuidingCard />
        <GuidingCard />
        <GuidingCard />
      </div>
    </section>
  );
}

export default Guiding;
