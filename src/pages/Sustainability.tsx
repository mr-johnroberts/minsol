// components/Sustainability.tsx
import React from "react";
import Commitment from "../components/Commitment";
import Pillars from "../components/Pillars";
import Signature from "../components/Signature";
import Message from "../components/Message";
import SustainabilityCard from "../components/SustainabilityCard";
import Consultant from "../components/Consultant";
import News from "../components/News";

const sections = [
  {
    imageSrc: "/images/p1.jpg",
    title: "Our people",
    description:
      "Our concern for the well-being of our team is inspired by our own history and seal, that is, respect for the people's dignity and their essential development, in addition to the proactive search for excellence. At the same time, our central points in people management are: Health and Safety; Diversity and Inclusion and a comprehensive development of our Talents, fostering long term and reliable relationships with each of our collaborators. In terms of Health and Safety we have a goal: “Zero harm in direct operations.”",
    linkUrl: "#",
    bgColor: "bg-gray-100",
    reverse: false,
  },
  {
    imageSrc: "/images/p2.jpg",
    title: "The Environment",
    description:
      "The environmental protection is an urgent global challenge that we address in each of our operations and solutions delivered to our clients, which is why we are committed to being an active agent to promote GHG reduction and the development of more circularity in the industry by innovating and designing better alternatives and providing permanent information about our environmental performance to the market. Some relevant initiatives implemented that aim to reduce GHG emissions and the Circular Economy are: measuring production processes emissions and their subsequent management, maximizing steel management, and separating rubber and steel from linings. They are all key aspects in reducing emissions per T of  final outcome.",
    linkUrl: "#",
    bgColor: "bg-white",
    reverse: true,
  },
  {
    imageSrc: "/images/p3.jpg",
    title: "Value Creation Connections",
    description:
      "We are working to make mining sustainable by creating value throughout our chain as one of our purposes, and  innovation and collaboration are the essential principles to achieve this, along with our main stakeholders: suppliers, partners, clients and communities. Thus, we seek to actively integrate, by mobilizing sustainability from the origin of the industrial process to the end customer, in our surroundings and each region where we operate. Along with our suppliers and partners, we  want to develop programs that enhance their capabilities;  with Clients, we want to listen to their needs and offer the best alternatives, enhancing our role as a strategic ally to meet their own goals. Regarding Communities, we seek to recognize each other, collaborating with their organizations, addressing their needs and mitigating the effects of our operations, while enhancing the benefits of our mutual vicinity.",
    linkUrl: "#",
    bgColor: "bg-gray-100",
    reverse: false,
  },
];

const Sustainability: React.FC = () => {
  return (
    <section>
      <div
        className="relative w-full h-[500px] bg-cover bg-center"
        style={{
          backgroundImage: "url('/images/sus.jpg')",
        }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>

        {/* Content */}
        <div className="absolute inset-0 flex flex-col justify-center items-center text-center px-4 md:px-12">
          <h1 className="text-white text-3xl md:text-5xl font-bold leading-tight">
            PREPARING FOR A SUSTAINABLE FUTURE
            <br />
            FOR OVER 100 YEARS
          </h1>
          <p className="text-white text-lg md:text-2xl mt-4">
            IN TODAY'S WORLD, SUSTAINABILITY IS MORE IMPORTANT THAN EVER BEFORE.
            IT REQUIRES A COLLECTIVE EFFORT FROM ALL OF US.
          </p>
        </div>
      </div>
      <Commitment />
      <Pillars />
      <Signature />
      <Message />
      {sections.map((section, index) => (
        <SustainabilityCard
          key={index}
          imageSrc={section.imageSrc}
          title={section.title}
          description={section.description}
          linkUrl={section.linkUrl}
          bgColor={section.bgColor}
          reverse={section.reverse}
        />
      ))}
      <News />
      <Consultant />
    </section>
  );
};

export default Sustainability;
