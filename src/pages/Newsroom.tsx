import React, { useEffect } from "react";
import NewsCard from "../components/NewsCard";
import Consultant from "../components/Consultant";

const newsItems = [
  {
    title:
      "ME Elecmetal’s Approach to Sustainability in the Metallurgical Industry",
    date: "12/09/2024",
    category: "News Sostenibilidad",
    image: "/images/n1.jpg",
    link: "#",
  },
  {
    title: "ME Elecmetal announces important investment in South Africa",
    date: "04/09/2024",
    category: "News",
    image: "/images/n2.jpg",
    link: "#",
  },
  {
    title:
      "Advancing Operational Excellence with ME Elecmetal’s Integrated Management System",
    date: "16/08/2024",
    category: "News Sostenibilidad",
    image: "/images/n3.jpg",
    link: "#",
  },
  {
    title: "ME Elecmetal announces important investment in South Africa",
    date: "04/09/2024",
    category: "News",
    image: "/images/n2.jpg",
    link: "#",
  },
  {
    title:
      "ME Elecmetal’s Approach to Sustainability in the Metallurgical Industry",
    date: "12/09/2024",
    category: "News Sostenibilidad",
    image: "/images/n1.jpg",
    link: "#",
  },
  {
    title:
      "Advancing Operational Excellence with ME Elecmetal’s Integrated Management System",
    date: "16/08/2024",
    category: "News Sostenibilidad",
    image: "/images/n3.jpg",
    link: "#",
  },
];

const Newsroom: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <section className="">
      <div className="px-4 md:px-20 container mx-auto py-12">
        <h3 className="section-title">News</h3>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {newsItems.map((item, index) => (
            <NewsCard
              key={index}
              title={item.title}
              date={item.date}
              category={item.category}
              image={item.image}
              link={item.link}
            />
          ))}
        </div>
      </div>
      <Consultant />
    </section>
  );
};

export default Newsroom;
