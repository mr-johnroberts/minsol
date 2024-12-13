// pages/Affiliates.tsx
import React from "react";
import Consultant from "../components/Consultant";
import Affiliations from "../components/Affiliations";

const affiliationsEvents = [
  {
    title: "Metallurgy",
    description:
      "Elecmetal through the ME Elecmetal brand is one of the world's leading producers and vendors of integrated solutions for the mining market, through an extensive network of its own manufacturing plants, joint ventures, licenses and strategic alliances.",
    logo: "/images/l1.jpg",
  },
  {
    title: "Glassware",
    description:
      "Elecmetal through the ME Elecmetal brand is one of the world's leading producers and vendors of integrated solutions for the mining market, through an extensive network of its own manufacturing plants, joint ventures, licenses and strategic alliances.",
    logo: "/images/l2.jpg",
  },
  {
    title: "Wineries",
    description:
      "Elecmetal through the ME Elecmetal brand is one of the world's leading producers and vendors of integrated solutions for the mining market, through an extensive network of its own manufacturing plants, joint ventures, licenses and strategic alliances.",
    logo: "/images/l3.jpg",
  },
  {
    title: "Communications",
    description:
      "Elecmetal through the ME Elecmetal brand is one of the world's leading producers and vendors of integrated solutions for the mining market, through an extensive network of its own manufacturing plants, joint ventures, licenses and strategic alliances.",
    logo: "/images/l4.jpg",
  },
  {
    title: "Power Generation",
    description:
      "Elecmetal through the ME Elecmetal brand is one of the world's leading producers and vendors of integrated solutions for the mining market, through an extensive network of its own manufacturing plants, joint ventures, licenses and strategic alliances.",
    logo: "/images/l5.jpg",
  },
];

const Affiliates: React.FC = () => {
  return (
    <div className="bg-white">
      <div className="px-4 md:px-28 mx-auto">
        <header className="py-8 mx-auto flex flex-col items-center">
          <p className="text-grey max-w-2xl text-left my-12 text-base">
            Elecmetal is the head of a group of companies that develops
            different activities with annual sales over USD 1.1 billion, and
            through their own affiliates participates in various industries such
            as the metallurgical, wineries, glassware, renewable energy and
            communications.
          </p>
          <img src="/images/affiliate.png" className="mt-10" />
        </header>
        <Affiliations events={affiliationsEvents} />
      </div>
      <Consultant />
    </div>
  );
};

export default Affiliates;
