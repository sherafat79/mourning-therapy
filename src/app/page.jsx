import Hero from "@/components/pages/home/hero";
import Info from "@/components/pages/home/info";
import OnlineTherapy from "@/components/pages/home/onlineTherapy";
import Services from "@/components/pages/home/services";
import Expect from "@/components/pages/home/expect";

import Guiding from "@/components/pages/home/guiding";
import Results from "@/components/pages/home/results";
import Journey from "@/components/pages/home/journey";
import Booking from "@/components/pages/home/booking";
import NewsLetter from "@/components/pages/home/newsletter";
import Instagram from "@/components/pages/home/instagramSlider";
import "swiper/css";
import "swiper/css/navigation";
import Customers from "@/components/pages/home/customers";
/* eslint-disable react/no-unescaped-entities */
export default function Home() {
  return (
    <div className="flex flex-col pb-20  gap-[5.75rem]">
      <Hero />
      <Info />
      <Services />
      <OnlineTherapy />
      <Expect />
      <Guiding />
      <Customers />
      <Results />
      <Journey />
      <Booking />
      <Instagram />
      <NewsLetter />
    </div>
  );
}
