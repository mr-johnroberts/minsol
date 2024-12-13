import React, { useEffect, useState } from "react";
import ReportCard from "../components/ReportCard";

const reports = [
  { year: 2023, title: "Annual Report 2023", link: "#" },
  { year: 2022, title: "Annual Report 2022", link: "#" },
  { year: 2021, title: "Annual Report 2021", link: "#" },
  { year: 2020, title: "Annual Report 2020", link: "#" },
  { year: 2019, title: "Annual Report 2019", link: "#" },
  { year: 2018, title: "Annual Report 2018", link: "#" },
  { year: 2017, title: "Annual Report 2017", link: "#" },
];

const AnnualReports: React.FC = () => {
  const [selectedYear, setSelectedYear] = useState<string>("All");

  const handleYearChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedYear(e.target.value);
  };

  const filteredReports =
    selectedYear === "All"
      ? reports
      : reports.filter((report) => report.year.toString() === selectedYear);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <section className="px-4 py-8 md:px-28 bg-gray-100">
      {/* Title */}
      <header className="mb-8 text-left">
        <h1 className="text-3xl font-bold text-blu">Annual Reports</h1>
      </header>

      {/* Filter Dropdown */}
      <div className="mb-8 flex justify-start">
        <select
          value={selectedYear}
          onChange={handleYearChange}
          className="border border-gray-300 px-4 py-2 rounded-md w-3/12 focus:border-blu"
        >
          <option value="All">All</option>
          {[...new Set(reports.map((report) => report.year))]
            .sort((a, b) => b - a)
            .map((year) => (
              <option key={year} value={year}>
                {year}
              </option>
            ))}
        </select>
      </div>

      <div className="flex flex-wrap justify-start gap-6">
        {filteredReports.map((report, index) => (
          <ReportCard
            key={index}
            title={report.title}
            link={report.link}
            isHighlighted={index === 0}
          />
        ))}
      </div>
    </section>
  );
};

export default AnnualReports;
