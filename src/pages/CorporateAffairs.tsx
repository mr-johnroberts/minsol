import React, { useEffect } from "react";
import ReportCard from "../components/ReportCard";
import Consultant from "../components/Consultant";

const corporateAffairsData = [
  {
    sectionTitle: "Corporate Affairs (Spanish documents)",
    sectionSubtitle:
      "Consolidated financial statements with notes and reasoned analysis",
    reports: [
      { title: "Análisis Razonado December 2023", link: "#" },
      { title: "Consolidated Financial Statements December 2023", link: "#" },
      { title: "Consolidated Financial Statements December 2022", link: "#" },
    ],
  },
  {
    sectionTitle: "Subsidiary financial statements",
    reports: [
      { title: "EEFF ME Elecmetal S.A. Diciembre 2023", link: "#" },
      { title: "EEFF Servicios Compartidos TICEL Diciembre 2023", link: "#" },
      {
        title: "EEFF Inversiones Elecmetal Ltda. y Subsidiarias Diciembre 2023",
        link: "#",
      },
      {
        title:
          "EEFF Servicios y Consultoría Hendaya y Afiliadas Diciembre 2023",
        link: "#",
      },
      {
        title: "EEFF Industria de Aceros Especiales S.A. Diciembre 2023",
        link: "#",
      },
      {
        title: "EEFF Fundición Talleres Limitada y Filiales Diciembre 2023",
        link: "#",
      },
      {
        title: "EEFF Fundición Talleres Limitada y Filiales Diciembre 2022",
        link: "#",
      },
      {
        title: "EEFF Industria de Aceros Especiales S.A. Diciembre 2022",
        link: "#",
      },
    ],
  },
  {
    sectionTitle: "Shareholders' Meeting",
    reports: [
      { title: "Acta de Junta Ordinaria 2024", link: "#" },
      { title: "3er Aviso Citación Junta Ordinaria 2024", link: "#" },
      { title: "2do Aviso Citación Junta Ordinaria 2024", link: "#" },
      { title: "1er Aviso Citación Junta Ordinaria 2024", link: "#" },
      { title: "Aviso Citación Junta Ordinaria 2024", link: "#" },
      { title: "Carta Poder Junta Ordinaria 2024", link: "#" },
      { title: "Comunica Convocatoria a Junta Ordinaria 2024", link: "#" },
      { title: "Fundamentos de Propuesta Auditores 2024", link: "#" },
    ],
  },
];

const CorporateAffairs: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <section>
      <div className="px-4 py-8 md:px-28 bg-gray-100">
        {corporateAffairsData.map((section, index) => (
          <div key={index} className="mb-12">
            {/* Section Title and Subtitle */}
            <header className="mb-6">
              <h2 className="text-2xl font-bold text-blu">
                {section.sectionTitle}
              </h2>
              {section.sectionSubtitle && (
                <p className="text-gray-500">{section.sectionSubtitle}</p>
              )}
            </header>

            {/* Report Cards */}
            <div className="flex flex-wrap gap-6">
              {section.reports.map((report, reportIndex) => (
                <ReportCard
                  key={reportIndex}
                  title={report.title}
                  link={report.link}
                />
              ))}
            </div>
          </div>
        ))}
      </div>
      <Consultant />
    </section>
  );
};

export default CorporateAffairs;
