// pages/MeFitGrinding.tsx
import React from "react";
import Hero from "../components/solutions/Hero";
import Stats from "../components/solutions/Stats";
import Help from "../components/solutions/Help";
import Consultant from "../components/Consultant";

const MeFitGrinding: React.FC = () => {
  return (
    <>
      <Hero
        title="ME FIT Grinding"
        subtitle="ME FIT Grinding focuses on optimizing the main stage of ore extraction, reducing effective processing costs, and boosting the availability and safety of all types of mills."
        buttonText="Contact a consultant"
        // buttonLink="/contact"
        backgroundImage="/images/p1.jpg"
        flexImage="/images/g1.jpg"
        imageAlt="Grinding mill"
      />
      <Stats />
      <Help />
      {/* <Companies /> */}
      <Consultant />
    </>
  );
};

export default MeFitGrinding;
