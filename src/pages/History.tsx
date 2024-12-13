// pages/History.tsx
import React from "react";
import Timeline from "../components/Timeline";
import Consultant from "../components/Consultant";

const historicalEvents = [
  {
    year: "1917",
    description:
      "In Chile, Compañía Electrometalúrgica S.A., Elecmetal, was founded and installed the first electric arc furnace for steel casting in Latin America. At the same time, Minneapolis Electric Steel Casting (ME) began operations in the United States.",
  },
  {
    year: "1927",
    description: 'Began manufacturing molten material for "mineral grinding."',
  },
  {
    year: "1938",
    description:
      "Purchased and installed new technology for the large-scale manufacture of forged balls for mining grinding.",
  },
  {
    year: "1959",
    description:
      "Signed manufacturing license agreement with Electric Steel Co., ESCO, of Portland, Oregon (USA) to produce earthmoving spare parts.",
  },
  {
    year: "1976",
    description:
      "Installed a vacuum casting system at our Duluth foundry in the United States.",
  },
  {
    year: "2001",
    description:
      "Expanded its metallurgical business by purchasing the assets of ME International and ME West Castings.",
  },
  {
    year: "2007",
    description:
      "Entered into a Joint Venture to supply steel spare parts for earthmoving equipment to local and export markets.",
  },
  {
    year: "2021",
    description:
      "Launched the ME Digital Lab to drive digital innovation for the mining market.",
  },
];

const History: React.FC = () => {
  return (
    <div className="bg-white">
      <div className="px-4 md:px-28 mx-auto">
        <header className="py-8 mx-auto flex flex-col items-center">
          <p className="text-grey max-w-2xl text-left my-12 text-base">
            With over 100 years of history, our long journey has proven us to be
            a very reliable company. Alongside our associates we have met
            numerous milestones marked by achievements and growth that have made
            us proud and pleased to continue expanding together.
          </p>
          <img src="/images/history.png" className="mt-10" />
        </header>
        <Timeline events={historicalEvents} />
      </div>
      <Consultant />
    </div>
  );
};

export default History;
