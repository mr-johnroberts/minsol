// components/CaseStudy.tsx
import React, { useEffect } from "react";
import Clients from "@/components/Clients";
import SplitTable from "@/components/SplitTable";
import { Icon } from "@iconify/react/dist/iconify.js";

// const caseStudy = [
//   {
//     image: "/images/z1.jpg", // Replace with real image URL
//     title: "REPLACEMENT SPARES FOR CONE CRUSHER",
//     description:
//       "Discover how our innovative solutions reduce wear rates and improve efficiency in SAG mill operations.",
//     link: "#",
//   },
//   {
//     image: "/images/z2.jpg", // Replace with real image URL
//     title:
//       "Valley Forge Ridgeback® bolts improve discharge end tension in SAG mills by 11%",
//     description:
//       "Learn about the impact of Ridgeback® bolts in improving performance and reducing tension in SAG mills.",
//     link: "#",
//   },
//   {
//     image: "/images/z3.png", // Replace with real image URL
//     title:
//       "ME Elecmetal’s Heavy Duty Liner Application Increases 1250 Tower Mill’s Availability by 50%",
//     description:
//       "Explore how heavy-duty liners significantly improve mill availability and operational efficiency.",
//     link: "#",
//   },
//   {
//     image: "/images/z4.jpg", // Replace with real image URL
//     title:
//       "ME Elecmetal’s Heavy Duty Liner Application Increases 1250 Tower Mill’s Availability by 50%",
//     description:
//       "Explore how heavy-duty liners significantly improve mill availability and operational efficiency.",
//     link: "#",
//   },
//   {
//     image: "/images/t2.jpg", // Replace with real image URL
//     title:
//       "Valley Forge Ridgeback® bolts improve discharge end tension in SAG mills by 11%",
//     description:
//       "Learn about the impact of Ridgeback® bolts in improving performance and reducing tension in SAG mills.",
//     link: "#",
//   },
//   {
//     image: "/images/t2.jpg", // Replace with real image URL
//     title:
//       "Valley Forge Ridgeback® bolts improve discharge end tension in SAG mills by 11%",
//     description:
//       "Learn about the impact of Ridgeback® bolts in improving performance and reducing tension in SAG mills.",
//     link: "#",
//   },
// ];

const Products: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <section className="bg-gray-100">
      <div className="container mx-auto">
        {/* Title Section */}
        <div className="px-4 md:px-20 py-8">
          <header className="text-center mb-12">
            <h1 className="section-title">Our Products</h1>
          </header>

          <div className="flex flex-col gap-y-5">
            <h2 className="capitalize text-2xl mb-2">
              Installed ground support consumables (split set and welded/mine
              mesh)
            </h2>
            <div className="flex flex-col md:flex-row gap-5">
              <div className="w-full md:h-[500px]">
                <img
                  src="/images/gr.jpg"
                  alt=""
                  className="w-full h-full object-cover rounded"
                />
              </div>
              <div className="w-full md:h-[500px]">
                <img
                  src="/images/ground.jpg"
                  alt=""
                  className="w-full h-full object-cover rounded"
                />
              </div>
            </div>

            <p className="leading-relaxed text-grey my-3 text-lg">
              We provide robust mining and ground support solutions, including
              high-quality welded mesh and split set products. Our welded mesh
              offers superior stability and reinforcement for underground mine
              structures, while our split sets ensure effective ground support
              and stability. Both solutions are designed to enhance safety and
              performance in mining operations, ensuring reliable and durable
              ground support in challenging environments.
            </p>
            <div>
              <h2 className="text-2xl mb-2 mt-6">Split Sets</h2>
              <div className="flex flex-col md:flex-row gap-6 mb-6">
                <img
                  src="/images/split.jpg"
                  alt=""
                  className="md:w-full h-[300px] md:h-[450px] object-cover rounded"
                />
              </div>
              <p className="leading-relaxed text-grey my-3 text-lg mb-6">
                Our Split Sets are crafted from high-tensile steel, roll-formed
                into a tubular section with a continuous longitudinal opening.
                An 8mm steel ring is fixed 5mm from the collar end of the tube.
                When installed into the recommended drilled hole size with the
                appropriate bearing plate, the Split Set creates a compressive
                force against the rock. <br />
                <br />
                The compression of the tubular Split Set within the drilled hole
                transfers load from the steel to the rock, enhancing contact and
                generating radial pressure. This design provides increased
                frictional resistance, helping to secure the Split Set and
                resist pull-out forces. Available in both non-galvanized and
                hot-dipped galvanized finishes, the tapered end facilitates easy
                insertion.
              </p>
              <SplitTable />
            </div>
            <div>
              <h2 className="text-2xl mb-2">Wielded Mesh</h2>
              <div className="mb-6">
                <img
                  src="/images/mesh.jpg"
                  alt=""
                  className="md:w-full h-[300px] md:h-[450px] object-cover rounded"
                />
              </div>

              <p className="leading-relaxed text-grey my-3 text-lg">
                Minsol manufactures and supplies Mining Mesh (Welded Mesh) for
                permanent surface coverage in underground excavations. This mesh
                can be installed with roof bolts, split sets, or other supports,
                and used in conjunction with combi washers and straps to enhance
                protection against Falls of Ground (loose rocks) and improve
                safety for mining crews and underground machinery.
                <br />
                <br /> All mesh products from Minsol are manufactured to strict
                ISO quality standards to meet underground mining safety
                specifications. The mesh is available in lengths ranging from 1m
                to 4.5m and widths from 1m to 2.4m. The mesh is available with
                wire gauges of 5.6mm and 4mm, and a cost-saving option features
                a combination of 5.6mm diameter main wires and 4mm diameter
                cross wires.
              </p>
            </div>
            <div>
              <h2 className="text-2xl mb-2 mt-6">
                Premier Solutions for Mineral Processing Needs
              </h2>
              <p className="leading-relaxed text-grey my-3 text-lg">
                At Minsol, we leverage our strategic partnerships with
                industry-leading manufacturers and service providers to deliver
                top-quality products and services across the sub-region. Our
                extensive portfolio is designed to meet the diverse needs of the
                mining and processing industries.
              </p>
              <div>
                <h2 className="text-xl mb-2 mt-6">Mill Miners</h2>
                <ul>
                  <li className="leading-relaxed text-grey my-3 text-lg flex items-center gap-x-2">
                    <Icon icon="lets-icons:check-fill" className="text-main" />
                    <span className="font-medium">
                      SAG Mill & Ball Mill Liners:
                    </span>{" "}
                    Enhance the performance and longevity of your mills with our
                    high-quality liners
                  </li>
                  <li className="leading-relaxed text-grey my-3 text-lg flex items-center gap-x-2 ">
                    <Icon icon="lets-icons:check-fill" className="text-main" />
                    <span className="font-medium">
                      Protective Linings:
                    </span>{" "}
                    Protect your equipment with our advanced lining solutions
                  </li>
                  <li className="leading-relaxed text-grey my-3 text-lg flex items-center gap-x-2 ">
                    <Icon icon="lets-icons:check-fill" className="text-main" />
                    <span className="font-medium">
                      Track Encapsulation Systems:
                    </span>{" "}
                    Polycorp's expertly designed encapsulation systems deliver
                    superior protection.
                  </li>
                </ul>
              </div>
              <div>
                <h2 className="text-xl mb-2 mt-8">Grinding Media</h2>
                <ul>
                  <li className="leading-relaxed text-grey my-3 text-lg gap-x-2">
                    {/* <Icon icon="lets-icons:check-fill" className="text-main" /> */}
                    <span className="font-medium">Steel Balls:</span> Available
                    in diameters of 50mm, 60mm, 80mm, 90mm, 100mm, and 110mm,
                    our steel balls are produced by West Africa Forgings Ltd.,
                    Ghana, ensuring durability and performance.
                  </li>
                </ul>
              </div>
            </div>
            <div>
              <h2 className="text-2xl mb-2 mt-6">
                Reagents and Processing Inputs
              </h2>
              <p className="leading-relaxed text-grey my-3 text-lg mb-6">
                At Minsol Limited, we specialize in supplying a wide range of
                high-quality chemicals and mining reagents to the mining, oil,
                and gas industries. Our products are designed to meet the
                rigorous demands of various industrial applications. Explore our
                offerings below
              </p>

              <div className="flex flex-col md:flex-row">
                <div className="md:w-2/6 justify-center">
                  <h2 className="text-xl mb-2 mt-6">Industrial Chemicals</h2>
                  <ul>
                    <li className="leading-relaxed text-grey text-lg flex items-center gap-x-2 mb-2">
                      <Icon
                        icon="lets-icons:check-fill"
                        className="text-main"
                      />
                      Barium Sulphate
                    </li>
                    <li className="leading-relaxed text-grey text-lg flex items-center gap-x-2 mb-2">
                      <Icon
                        icon="lets-icons:check-fill"
                        className="text-main"
                      />
                      Calcium Chloride
                    </li>
                    <li className="leading-relaxed text-grey text-lg flex items-center gap-x-2 mb-2">
                      <Icon
                        icon="lets-icons:check-fill"
                        className="text-main"
                      />
                      Caustic Soda
                    </li>
                    <li className="leading-relaxed text-grey text-lg flex items-center gap-x-2 mb-2">
                      <Icon
                        icon="lets-icons:check-fill"
                        className="text-main"
                      />
                      Hydrated Lime
                    </li>
                    <li className="leading-relaxed text-grey text-lg flex items-center gap-x-2 mb-2">
                      <Icon
                        icon="lets-icons:check-fill"
                        className="text-main"
                      />
                      Sodium Metabisulphite
                    </li>
                    <li className="leading-relaxed text-grey text-lg flex items-center gap-x-2 mb-2">
                      <Icon
                        icon="lets-icons:check-fill"
                        className="text-main"
                      />
                      Sodium Silicate
                    </li>
                  </ul>
                </div>
                <div className="md:w-2/6 justify-center">
                  <h2 className="text-xl mb-2 mt-6">Mining Reagents</h2>
                  <ul>
                    <li className="leading-relaxed text-grey text-lg flex items-center gap-x-2 mb-2">
                      <Icon
                        icon="lets-icons:check-fill"
                        className="text-main"
                      />
                      Activated Carbon
                    </li>
                    <li className="leading-relaxed text-grey text-lg flex items-center gap-x-2 mb-2">
                      <Icon
                        icon="lets-icons:check-fill"
                        className="text-main"
                      />
                      Sodium Cyanide
                    </li>
                    <li className="leading-relaxed text-grey text-lg flex items-center gap-x-2 mb-2">
                      <Icon
                        icon="lets-icons:check-fill"
                        className="text-main"
                      />
                      Hydrogen Peroxide
                    </li>
                  </ul>
                </div>
                <div className="md:w-2/6 justify-center">
                  <h2 className="text-xl mb-2 mt-6">Processing Aids</h2>
                  <ul>
                    <li className="leading-relaxed text-grey text-lg flex items-center gap-x-2 mb-2">
                      <Icon
                        icon="lets-icons:check-fill"
                        className="text-main"
                      />
                      Magnesium Oxide
                    </li>
                    <li className="leading-relaxed text-grey text-lg flex items-center gap-x-2 mb-2">
                      <Icon
                        icon="lets-icons:check-fill"
                        className="text-main"
                      />
                      Nitric Acid
                    </li>
                    <li className="leading-relaxed text-grey text-lg flex items-center gap-x-2 mb-2">
                      <Icon
                        icon="lets-icons:check-fill"
                        className="text-main"
                      />
                      Soda Ash
                    </li>
                  </ul>
                </div>
              </div>
              <div className="flex flex-col md:flex-row w-full justify-between gap-x-5 mt-6">
                <img
                  src="/images/ch1.jpg"
                  alt=""
                  className="md:w-2/6 h-[300px] object-cover rounded"
                />
                <img
                  src="/images/ch2.png"
                  alt=""
                  className="md:w-2/6 h-[300px] object-cover rounded"
                />
                <img
                  src="/images/ch3.png"
                  alt=""
                  className="md:w-2/6 h-[300px] object-cover rounded"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <Clients />
    </section>
  );
};

export default Products;
