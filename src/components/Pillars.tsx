// components/Pillars.tsx
import React from "react";

// const pillars = [
//   {
//     icon: "fluent:document-signature-20-regular",
//     title: "ME SIGNATURE",
//     description:
//       "Our Values are our hallmark, they guide our decision-making and the way we relate and commit.",
//   },
//   {
//     icon: "mdi:people-outline",
//     title: "OUR PEOPLE",
//     description:
//       "Respect for people’s dignity and their complete development, in addition to the proactive search for excellence.",
//   },
//   {
//     icon: "material-symbols-light:nature-people-outline-rounded", // Replace with the correct icon URL
//     title: "THE ENVIRONMENT",
//     description:
//       "Caring for the environment and having a positive impact on nature is a global challenge that we address in each of the solutions we deliver to our clients.",
//   },
//   {
//     icon: "ep:connection", // Replace with the correct icon URL
//     title: "VALUE CONNECTIONS",
//     description:
//       "Innovation and collaboration are essential principles to create value jointly and together with our stakeholders.",
//   },
// ];

const Pillars: React.FC = () => {
  return (
    <section className="bg-blu text-white py-12 px-4 md:px-28">
      <header className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold">Sustainability</h2>
      </header>
      <div className="text-center">
        <p className="leading-relaxed md:text-lg">
          We are dedicated to promoting sustainable practices in all aspects of
          our operations. By prioritizing environmental stewardship, social
          responsibility, and economic viability, we aim to contribute to the
          long-term health of the mining industry and the communities we serve.{" "}
          <br />
          <br />
          Minsol Limited is proud to be a leading provider of mining consultancy
          and logistics services in Sub-Saharan Africa, with a diverse portfolio
          that includes corporate studies, logistics, product manufacturing, and
          onsite support. Our dedication to excellence, innovation, and
          sustainabilitybility, combined with our adaptive approach, has
          solidified our position as a trusted partner in the mining industry.
        </p>
      </div>
    </section>
  );
};

export default Pillars;
