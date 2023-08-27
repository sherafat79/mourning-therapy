import React from "react";

function GuidingCard({ title, description }) {
  return (
    <div className="flex flex-col h-80  gap-4 md:max-w-sm rounded bg-milk bg-opacity-80 md:py-10 px-5 p-6  backdrop-blur-[5.5px]  ">
      <h5 className="text-base text-center font-Yeseva">{title}</h5>
      <p className="text-base font-jakarta leading-7">{description}</p>
    </div>
  );
}

export default GuidingCard;
