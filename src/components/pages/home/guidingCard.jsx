import React from "react";

function GuidingCard({ title, description }) {
  return (
    <div className="flex flex-col w-[21.5rem]  h-[21.5rem] gap-5 rounded bg-milk bg-opacity-80 md:pt-12 md:pb-8 px-6 p-6 backdrop-blur-[5.5px] flex-1">
      <h5 className="text-base text-center font-Yeseva">{title}</h5>
      <p className="text-base font-jakarta leading-7">{description}</p>
    </div>
  );
}

export default GuidingCard;
