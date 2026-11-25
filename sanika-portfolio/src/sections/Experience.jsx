
import { useState } from "react";

const experienceCategories = ["Internships", "Virtual Internships"];

const experiences = [
  {
    category: "Internships",
    title: "Data Analytics Intern",
    organization: "Tinkerstream Innovations",
    duration: "May 2025 – June 2025",
    description:
      "Worked on a COVID-19 Impact Analysis project using global data. Analyzed confirmed cases, recoveries, deaths, and vaccination trends and created interactive visualizations using Python and Plotly.",
    technologies: ["Python", "Pandas", "Google Colab", "Plotly"],
  },
  {
    category: "Virtual Internships",
    title: "Deloitte Job Simulation",
    organization: "Deloitte",
    duration: "Virtual Internship",
    description:
      "Completed a virtual job simulation to gain exposure to professional work scenarios and develop practical problem-solving and analytical skills.",
    technologies: ["Data Analysis", "Problem Solving", "Business Insights"],
  },
];

function Experience() {
  const [activeCategory, setActiveCategory] = useState("Internships");

  const filteredExperiences = experiences.filter(
    (experience) => experience.category === activeCategory
  );

  return (
    <section
      id="experience"
      className="w-full py-16 md:py-20 bg-[#FAF8FF]"
    >
      <div className="section-container">

        {/* Section Heading */}
        <div className="text-center mb-10">
          <p className="text-xs font-semibold tracking-widest uppercase text-[#8B5CF6] mb-2">
            My Professional Journey
          </p>

          <h2 className="text-3xl md:text-4xl font-bold text-[#30264A]">
            Work <span className="text-[#8B5CF6]">Experience</span>
          </h2>

          <div className="w-16 h-1 rounded-full bg-gradient-to-r from-[#8B5CF6] to-[#D8B4FE] mx-auto mt-4"></div>

          <p className="text-sm text-[#81758F] mt-5 max-w-2xl mx-auto leading-7">
            My internship experiences and virtual programs that have
            contributed to my professional development.
          </p>
        </div>

        {/* Category Tabs */}
        <div className="flex flex-wrap justify-center gap-3 mb-10">
          {experienceCategories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-300 ${
                activeCategory === category
                  ? "bg-[#8B5CF6] text-white shadow-md"
                  : "bg-white text-[#625875] border border-[#E9DFFA] hover:bg-[#F0E9FF]"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Experience Cards */}
        <div className="max-w-3xl mx-auto flex flex-col gap-6">
          {filteredExperiences.map((experience, index) => (
            <div
              key={index}
              className="bg-white/90 border border-[#E9DFFA] rounded-2xl p-6 md:p-8 shadow-sm hover:shadow-lg transition-all duration-300"
            >
              <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3 mb-5">
                <div>
                  <h3 className="text-lg font-bold text-[#30264A]">
                    {experience.title}
                  </h3>

                  <p className="text-sm font-medium text-[#8B5CF6] mt-1">
                    {experience.organization}
                  </p>
                </div>

                <span className="text-xs font-medium text-[#7C3AED] bg-[#F0E9FF] px-3 py-2 rounded-full w-fit">
                  {experience.duration}
                </span>
              </div>

              <p className="text-sm leading-7 text-[#625875] mb-5">
                {experience.description}
              </p>

              <div className="flex flex-wrap gap-2">
                {experience.technologies.map((technology, techIndex) => (
                  <span
                    key={techIndex}
                    className="text-xs px-3 py-1.5 rounded-lg bg-[#F7F3FF] text-[#625875] border border-[#E9DFFA]"
                  >
                    {technology}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

export default Experience;
