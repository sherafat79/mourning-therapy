import React from "react";
import GuidingCard from "./guidingCard";

function Guiding() {
  return (
    <section className="bg-4 py-16 text-black w-full flex justify-center  bg-cover bg-no-repeat   items-center flex-col ">
      <h2 className="font-Yeseva mb-11 text-center font-normal leading-9 text-[2rem] ">
        Guiding Principles of Care
      </h2>{" "}
      <div className="md:w-2/3 w-11/12 flex md:flex-row flex-col gap-6 items-center justify-center ">
        <GuidingCard />
        <GuidingCard />
        <GuidingCard />
      </div>
    </section>
  );
}

export default Guiding;
