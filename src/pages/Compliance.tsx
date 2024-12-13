import Consultant from "../components/Consultant";
import FlexCard from "../components/FlexCard";

const sections = [
  {
    imageSrc: "/images/c1.jpg",
    title: "Business conduct standards",
    description:
      "Information about ME Elecmetal's corporate governance, social responsibility and sustainable development practices.",
    linkText: "Download document",
    linkUrl: "#",
    bgColor: "bg-gray-100", // Light gray background
    reverse: false, // Default layout
  },
  {
    imageSrc: "/images/c2.jpg",
    title: "Another Topic",
    description:
      "Description for the second topic. Adjust content as needed for your specific context.",
    linkText: "Learn more",
    linkUrl: "#",
    bgColor: "bg-white", // White background
    reverse: true, // Reversed layout
  },
  {
    imageSrc: "/images/c3.jpg",
    title: "Yet Another Topic",
    description:
      "This is the third section. Add unique content to make the section informative and visually appealing.",
    linkText: "View details",
    linkUrl: "#",
    bgColor: "bg-gray-100", // Light gray background
    reverse: false, // Default layout
  },
  {
    imageSrc: "/images/c4.jpg",
    title: "Final Topic",
    description:
      "Conclude with the final section details, focusing on user engagement and actionable links.",
    linkText: "Explore",
    linkUrl: "#",
    bgColor: "bg-white", // White background
    reverse: true, // Reversed layout
  },
  {
    imageSrc: "/images/c5.jpg",
    title: "Final Topic",
    description:
      "Conclude with the final section details, focusing on user engagement and actionable links.",
    linkText: "Explore",
    linkUrl: "#",
    bgColor: "bg-white", // White background
    reverse: false, // Reversed layout
  },
];

const Compliance = () => {
  return (
    <div>
      {sections.map((section, index) => (
        <FlexCard
          key={index}
          imageSrc={section.imageSrc}
          title={section.title}
          description={section.description}
          linkText={section.linkText}
          linkUrl={section.linkUrl}
          bgColor={section.bgColor}
          reverse={section.reverse}
        />
      ))}
      <Consultant />
    </div>
  );
};

export default Compliance;
