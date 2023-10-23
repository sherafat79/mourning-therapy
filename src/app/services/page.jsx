import ServicesContainer from "@/containers/Services";
import React from "react";

function page({ searchParams }) {
  return <ServicesContainer type={searchParams.type ?? "individual"} />;
}

export default page;
