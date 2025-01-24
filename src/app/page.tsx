// components
import { Navbar, Footer } from "@/components";

// sections
import Hero from "./hero";
import InformationSection from "./information-section";

export default function Portfolio() {
  return (
    <>
      <Navbar />
      <Hero />
      <InformationSection />
      <Footer />
    </>
  );
}
