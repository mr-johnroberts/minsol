// pages/MeFitCrushing.tsx
import React from "react";
import Hero from "../components/solutions/Hero";
import Stats from "../components/solutions/Stats";
import Help from "../components/solutions/Help";
// import Companies from "../components/solutions/Companies";
import Consultant from "../components/Consultant";

const MeFitCrushing: React.FC = () => {
  return (
    <>
      <Hero
        title="ME FIT Crushing"
        subtitle="ME FIT Crushing focuses on optimizing the main stage of ore extraction, reducing effective processing costs, and boosting the availability and safety of all types of mills."
        buttonText="Contact a consultant"
        // buttonLink="/contact"
        backgroundImage="/images/t3.png"
        flexImage="/images/crushing.png"
        imageAlt="Crushing mill"
      />
      <Stats />
      <Help />
      {/* <Companies /> */}
      <Consultant />
    </>
  );
};

export default MeFitCrushing;
