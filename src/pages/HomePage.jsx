import React from "react";
import { banner } from "../assets";
import Hero from "../components/Hero";
import PrePlans from "../components/PrePlans";
import Benifits from "../components/Benifits";

const HomePage = () => {
  return (
    <section className="sm:top-[90px] top-[70px] relative">
      <Hero />
      <PrePlans />
      <Benifits />
    </section>
  );
};

export default HomePage;
