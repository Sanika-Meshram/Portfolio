
const skillCategories = [
  {
    title: "Programming Languages",
    icon: "💻",
    skills: ["C", "C++", "Java", "JavaScript", "SQL", "Python"],
  },
  {
    title: "Frontend Development",
    icon: "🎨",
    skills: ["HTML", "CSS", "React.js", "Bootstrap", "Tailwind CSS"],
  },
  {
    title: "Backend Development",
    icon: "⚙️",
    skills: ["Java", "Spring Boot", "Spring MVC", "JDBC", "Hibernate", "REST APIs"],
  },
  {
    title: "Databases",
    icon: "🗄️",
    skills: ["MySQL", "MongoDB"],
  },
  {
    title: "Tools & Technologies",
    icon: "🛠️",
    skills: ["Git", "GitHub", "Postman", "Swagger", "VS Code", "IntelliJ IDEA"],
  },
  {
    title: "Data Analytics",
    icon: "📊",
    skills: ["Python", "Pandas", "NumPy", "Power BI", "Excel", "Plotly"],
  },
];

function Skills() {
  return (
    <section
      id="skills"
      className="w-full py-16 md:py-20 bg-[#FAF8FF]"
    >
      <div className="section-container">

        {/* Section Heading */}
        <div className="text-center mb-12">
          <p className="text-xs font-semibold tracking-widest uppercase text-[#8B5CF6] mb-2">
            What I Work With
          </p>

          <h2 className="text-3xl md:text-4xl font-bold text-[#30264A]">
            Technical <span className="text-[#8B5CF6]">Skills</span>
          </h2>

          <div className="w-16 h-1 rounded-full bg-gradient-to-r from-[#8B5CF6] to-[#D8B4FE] mx-auto mt-4"></div>

          <p className="text-sm text-[#81758F] mt-5 max-w-2xl mx-auto leading-7">
            Technologies and tools I use for application development,
            programming, and data analysis.
          </p>
        </div>

        {/* Skill Categories */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, index) => (
            <div
              key={index}
              className="bg-white/80 border border-[#E9DFFA] rounded-2xl p-6 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
            >
              <div className="flex items-center gap-3 mb-5">
                <div className="w-11 h-11 rounded-xl bg-[#F0E9FF] flex items-center justify-center text-xl">
                  {category.icon}
                </div>

                <h3 className="text-base font-bold text-[#30264A]">
                  {category.title}
                </h3>
              </div>

              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, skillIndex) => (
                  <span
                    key={skillIndex}
                    className="px-3 py-2 rounded-lg bg-[#F7F3FF] border border-[#E9DFFA] text-xs font-medium text-[#625875] hover:bg-[#EDE4FF] hover:text-[#7C3AED] transition-colors duration-200"
                  >
                    {skill}
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

export default Skills;
