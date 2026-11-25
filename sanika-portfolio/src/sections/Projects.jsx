
import { useState } from "react";

const projectCategories = [
  "Frontend",
  "Full Stack",
  "Data Analysis",
];

const projects = [
  {
    title: "Frontend Project",
    category: "Frontend",
    description:
      "A responsive web application designed with a clean interface and user-friendly experience.",
    technologies: ["HTML", "CSS", "JavaScript", "React"],
    github: "#",
    demo: "#",
  },
  {
    title: "ShopEase – E-commerce Application",
    category: "Full Stack",
    description:
      "A full-stack e-commerce application with product management, user authentication, and REST API integration.",
    technologies: ["React", "Java", "Spring Boot", "MySQL", "JWT"],
    github: "#",
    demo: "#",
  },
  {
    title: "FinTrack Pro – Expense Manager",
    category: "Full Stack",
    description:
      "An expense and recurring payment management application with expense anomaly detection and spending insights.",
    technologies: ["React", "Spring Boot", "MySQL", "Python", "Machine Learning"],
    github: "#",
    demo: "#",
  },
  {
    title: "COVID-19 Impact Analysis",
    category: "Data Analysis",
    description:
      "Analyzed global COVID-19 data to explore confirmed cases, recoveries, deaths, and vaccination trends using interactive visualizations.",
    technologies: ["Python", "Pandas", "Google Colab", "Plotly"],
    github: "#",
    demo: "#",
  },
  {
    title: "Lok Sabha Election 2024 Dashboard",
    category: "Data Analysis",
    description:
      "An interactive Power BI dashboard analyzing Maharashtra election results, party performance, constituency winners, and vote shares.",
    technologies: ["Power BI", "Data Visualization", "Data Analysis"],
    github: "#",
    demo: "#",
  },
  {
    title: "E-commerce Sales Dashboard",
    category: "Data Analysis",
    description:
      "An interactive dashboard presenting e-commerce sales performance, revenue trends, and business insights.",
    technologies: ["Power BI", "Excel", "Data Analysis"],
    github: "#",
    demo: "#",
  },
];

function Projects() {
  const [activeCategory, setActiveCategory] = useState("Frontend");

  const filteredProjects = projects.filter(
    (project) => project.category === activeCategory
  );

  return (
    <section
      id="projects"
      className="w-full py-16 md:py-20 bg-gradient-to-b from-[#F3EDFF] to-[#FAF8FF]"
    >
      <div className="section-container">

        {/* Section Heading */}
        <div className="text-center mb-10">
          <p className="text-xs font-semibold tracking-widest uppercase text-[#8B5CF6] mb-2">
            My Recent Work
          </p>

          <h2 className="text-3xl md:text-4xl font-bold text-[#30264A]">
            My <span className="text-[#8B5CF6]">Projects</span>
          </h2>

          <div className="w-16 h-1 rounded-full bg-gradient-to-r from-[#8B5CF6] to-[#D8B4FE] mx-auto mt-4"></div>

          <p className="text-sm text-[#81758F] mt-5 max-w-2xl mx-auto leading-7">
            A collection of projects showcasing my skills in frontend
            development, full-stack development, and data analysis.
          </p>
        </div>

        {/* Category Tabs */}
        <div className="flex flex-wrap justify-center gap-3 mb-10">
          {projectCategories.map((category) => (
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

        {/* Project Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project, index) => (
            <div
              key={index}
              className="bg-white/90 border border-[#E9DFFA] rounded-2xl p-6 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300 flex flex-col"
            >
              <div className="mb-4">
                <span className="text-xs font-semibold text-[#8B5CF6] bg-[#F0E9FF] px-3 py-1.5 rounded-full">
                  {project.category}
                </span>
              </div>

              <h3 className="text-lg font-bold text-[#30264A] mb-3">
                {project.title}
              </h3>

              <p className="text-sm leading-7 text-[#625875] mb-5 flex-grow">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-2 mb-6">
                {project.technologies.map((technology, techIndex) => (
                  <span
                    key={techIndex}
                    className="text-xs px-2.5 py-1.5 rounded-lg bg-[#F7F3FF] text-[#625875] border border-[#E9DFFA]"
                  >
                    {technology}
                  </span>
                ))}
              </div>

              <div className="flex gap-3 mt-auto">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 text-center text-sm font-medium px-4 py-2.5 rounded-lg bg-[#30264A] text-white hover:bg-[#49366D] transition-colors"
                >
                  GitHub
                </a>

                <a
                  href={project.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 text-center text-sm font-medium px-4 py-2.5 rounded-lg border border-[#D8C7F5] text-[#7C3AED] hover:bg-[#F0E9FF] transition-colors"
                >
                  Live Demo
                </a>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

export default Projects;
