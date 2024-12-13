// components/Experience.tsx
import React from "react";
import { Link } from "react-router-dom";
import ExperienceCard from "./ExperienceCard";

const experiences = [
  {
    image: "/images/e1.jpg",
    title:
      "ME Elecmetal’s ME PolyLight Design Reduces Wear Rate in SAG Mill Discharge Lifters by 17%",
    linkText: "More",
    linkUrl: "#",
  },
  {
    image: "/images/e2.jpg",
    title:
      "Valley Forge Ridgeback® bolts improve discharge end tension in SAG mills by 11%",
    linkText: "More",
    linkUrl: "#",
  },
  {
    image: "/images/e3.jpg",
    title:
      "ME Elecmetal’s Heavy Duty Liner Application Increases 1250 Tower Mill’s Availability by 50%",
    linkText: "More",
    linkUrl: "#",
  },
];

const Experience: React.FC = () => {
  return (
    <section className="py-8 bg-gray-100">
      <div className="px-4 md:px-20 container mx-auto">
        <div className="flex justify-between items-center mb-8">
          <h2 className="section-title">Unlock Insights from Our Experience</h2>
          <Link
            to="#"
            className="text-secondary font-semibold inline-flex items-center"
          >
            More &rarr;
          </Link>
        </div>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {experiences.map((experience, index) => (
            <ExperienceCard
              key={index}
              image={experience.image}
              title={experience.title}
              linkText={experience.linkText}
              linkUrl={experience.linkUrl}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
