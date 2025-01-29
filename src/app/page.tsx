// components
import {  Footer } from "@/components";

// sections
import Hero from "./hero";
import InformationSection from "./information-section";
import WeeklyCodingChart from "@/components/WeeklyCodingInfo";

export default function Portfolio() {
  return (
    <>
      <Hero />
      <WeeklyCodingChart />
      <InformationSection />
      <Footer />
    </>
  );
}
