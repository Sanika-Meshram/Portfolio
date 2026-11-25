
import { useState } from "react";

const categories = ["NPTEL", "NPTEL Stars", "Others"];

const certifications = [
  // NPTEL Certificates
  {
    category: "NPTEL",
    title: "Data Analytics with Python",
    organization: "NPTEL",
    file: "/certificates/data-analytics-python.pdf",
  },
  {
    category: "NPTEL",
    title: "Data Science for Engineers",
    organization: "NPTEL",
    file: "/certificates/data-science-engineers.pdf",
  },
  {
    category: "NPTEL",
    title: "Python for Data Science",
    organization: "NPTEL",
    file: "/certificates/python-data-science.pdf",
  },
  {
    category: "NPTEL",
    title: "Learning Analytics Tools",
    organization: "NPTEL",
    file: "/certificates/learning-analytics-tools.pdf",
  },
  {
    category: "NPTEL",
    title: "Introduction to Machine Learning",
    organization: "NPTEL",
    file: "/certificates/introduction-machine-learning.pdf",
  },
  {
    category: "NPTEL",
    title: "Computer Vision",
    organization: "NPTEL",
    file: "/certificates/computer-vision.pdf",
  },
  {
    category: "NPTEL",
    title: "Design and Analysis of Algorithms",
    organization: "NPTEL",
    file: "/certificates/design-analysis-algorithms.pdf",
  },
  {
    category: "NPTEL",
    title: "Deep Learning for Computer Vision",
    organization: "NPTEL",
    file: "/certificates/deep-learning-computer-vision.pdf",
  },
  {
    category: "NPTEL",
    title: "Reinforcement Learning",
    organization: "NPTEL",
    file: "/certificates/reinforcement-learning.pdf",
  },

  // NPTEL Stars
  {
    category: "NPTEL Stars",
    title: "Believers",
    organization: "NPTEL Stars",
    file: "/certificates/believers.pdf",
  },
  {
    category: "NPTEL Stars",
    title: "Enthusiasts",
    organization: "NPTEL Stars",
    file: "/certificates/enthusiasts.pdf",
  },
  {
    category: "NPTEL Stars",
    title: "Motivated Learner",
    organization: "NPTEL Stars",
    file: "/certificates/motivated-learner.pdf",
  },

  // Other Certifications
  {
    category: "Others",
    title: "Deloitte Job Simulation Virtual Internship",
    organization: "Deloitte",
    file: "/certificates/deloitte-job-simulation.pdf",
  },
];

function Certifications() {
  const [activeCategory, setActiveCategory] = useState("NPTEL");

  const filteredCertifications = certifications.filter(
    (certification) => certification.category === activeCategory
  );

  return (
    <section
      id="certifications"
      className="w-full py-16 md:py-20 bg-gradient-to-b from-[#F3EDFF] to-[#FAF8FF]"
    >
      <div className="section-container">

        {/* Section Heading */}
        <div className="text-center mb-10">
          <p className="text-xs font-semibold tracking-widest uppercase text-[#8B5CF6] mb-2">
            Learning & Achievements
          </p>

          <h2 className="text-3xl md:text-4xl font-bold text-[#30264A]">
            My <span className="text-[#8B5CF6]">Certifications</span>
          </h2>

          <div className="w-16 h-1 rounded-full bg-gradient-to-r from-[#8B5CF6] to-[#D8B4FE] mx-auto mt-4"></div>

          <p className="text-sm text-[#81758F] mt-5 max-w-2xl mx-auto leading-7">
            Courses, certifications, and achievements that reflect my
            commitment to continuous learning.
          </p>
        </div>

        {/* Category Tabs */}
        <div className="flex flex-wrap justify-center gap-3 mb-10">
          {categories.map((category) => (
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

        {/* Certificate Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredCertifications.map((certification, index) => (
            <div
              key={index}
              className="bg-white/90 border border-[#E9DFFA] rounded-2xl p-6 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300 flex flex-col"
            >
              <div className="w-12 h-12 rounded-xl bg-[#F0E9FF] flex items-center justify-center text-2xl mb-5">
                🏆
              </div>

              <h3 className="text-base font-bold text-[#30264A] mb-2">
                {certification.title}
              </h3>

              <p className="text-sm text-[#81758F] mb-5">
                {certification.organization}
              </p>

              <a
                href={certification.file}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-auto inline-flex justify-center items-center gap-2 w-full px-4 py-2.5 rounded-lg bg-[#8B5CF6] text-white text-sm font-medium hover:bg-[#7C3AED] transition-colors"
              >
                View Certificate
                <span>↗</span>
              </a>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

export default Certifications;
