// components/ExperienceCard.tsx
import React from "react";
import { Link } from "react-router-dom";

interface ExperienceCardProps {
  image: string;
  title: string;
  linkText: string;
  linkUrl: string;
}

const ExperienceCard: React.FC<ExperienceCardProps> = ({
  image,
  title,
  linkText,
  linkUrl,
}) => {
  return (
    <div className="relative bg-white rounded-lg shadow-lg overflow-hidden">
      <div className="relative w-full h-48 overflow-hidden">
        <img src={image} alt={title} className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-black bg-opacity-40 opacity-0 hover:opacity-100 transition-opacity duration-300"></div>
      </div>
      <div className="p-4">
        <h3 className="text-lg font-semibold text-blue-800 mb-2">{title}</h3>
        <Link
          to={linkUrl}
          className="text-secondary font-semibold inline-flex items-center"
        >
          {linkText} &rarr;
        </Link>
      </div>
    </div>
  );
};

export default ExperienceCard;
