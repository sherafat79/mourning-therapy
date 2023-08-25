import React from "react";

function OnlineTherapy() {
  return (
    <section className="bg-3 bg-cover bg-center bg-no-repeat w-full px-80">
      <div className="bg-milk bg-opacity-80 p-8  w-[20rem] text-black  backdrop-blur-[5.5px] ">
        <h2 className="font-Yeseva font-normal leading-9 text-xl text-darkBrown ">
          Connected Care: Remote Therapy Sessions
        </h2>{" "}
        <p className="text-sm font-jakarta font-medium mt-6 leading-7">
          Our unique digital counseling services invite you to experience
          therapeutic support within the serene environment of your personal
          surroundings. Offering a blend of convenience and empathy, we strive
          to deliver profound assistance that meets your unique needs, all while
          prioritizing your comfort.
        </p>
        <button className="font-jakarta leading-7 p-1 font-semibold mt-48 text-sm rounded bg-brown flex justify-center items-center w-11/12 mx-auto">
          Online Therapy Services
        </button>
      </div>
    </section>
  );
}

export default OnlineTherapy;
