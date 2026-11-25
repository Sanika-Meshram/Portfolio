
function About() {
  return (
    <section
      id="about"
      className="w-full py-16 md:py-20 bg-gradient-to-b from-[#FAF8FF] to-[#F3EDFF]"
    >
      <div className="section-container">

        {/* Section Heading */}
        <div className="w-full text-center mb-12">
          <p className="text-xs font-semibold tracking-widest uppercase text-[#8B5CF6] mb-2">
            Get to know me
          </p>

          <h2 className="text-3xl md:text-4xl font-bold text-[#30264A]">
            About <span className="text-[#8B5CF6]">Me</span>
          </h2>

          <div className="w-16 h-1 rounded-full bg-gradient-to-r from-[#8B5CF6] to-[#D8B4FE] mx-auto mt-4"></div>
        </div>

        {/* About Cards */}
        <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-6 items-stretch">

          {/* Who I Am */}
          <div className="card-container bg-white/80 backdrop-blur-lg border border-[#E9DFFA] p-6 md:p-8 shadow-sm hover:shadow-lg transition-all duration-300">
            <h3 className="text-lg md:text-xl font-bold text-[#30264A] mb-4">
              Who I Am
            </h3>

            <p className="text-sm leading-7 text-[#625875] mb-4">
              I am an enthusiastic and motivated individual with an interest
              in technology, data, and problem-solving. I enjoy learning new
              technologies and applying my knowledge to practical tasks.
            </p>

            <p className="text-sm leading-7 text-[#625875] mb-4">
              My interests lie in Data Analytics and Java Full Stack
              Development. I like exploring data, creating meaningful
              visualizations, and developing web applications.
            </p>

            <p className="text-sm leading-7 text-[#625875]">
              I believe in continuous learning and improving my technical
              skills through projects, training, and practical experience.
            </p>
          </div>

          {/* Areas of Interest */}
          <div className="w-full flex flex-col gap-6">

            {/* Data Analytics */}
            <div className="card-container flex-1 bg-white/80 backdrop-blur-lg border border-[#E9DFFA] p-6 shadow-sm hover:shadow-lg transition-all duration-300">
              <div className="flex items-center gap-4 mb-3">
                <div className="w-11 h-11 shrink-0 rounded-xl bg-[#F0E9FF] flex items-center justify-center text-xl">
                  📊
                </div>

                <h3 className="text-lg font-bold text-[#30264A]">
                  Data Analytics
                </h3>
              </div>

              <p className="text-sm leading-7 text-[#625875]">
                Interested in data analysis, data visualization, SQL, Python,
                and Power BI. I enjoy working with datasets and discovering
                useful insights from data.
              </p>
            </div>

            {/* Java Full Stack */}
            <div className="card-container flex-1 bg-white/80 backdrop-blur-lg border border-[#E9DFFA] p-6 shadow-sm hover:shadow-lg transition-all duration-300">
              <div className="flex items-center gap-4 mb-3">
                <div className="w-11 h-11 shrink-0 rounded-xl bg-[#F0E9FF] flex items-center justify-center text-xl">
                  💻
                </div>

                <h3 className="text-lg font-bold text-[#30264A]">
                  Java Full Stack Development
                </h3>
              </div>

              <p className="text-sm leading-7 text-[#625875]">
                Interested in developing web applications using Java,
                Spring Boot, React, HTML, CSS, JavaScript, and MySQL.
                I enjoy building functional and user-friendly applications.
              </p>
            </div>

          </div>
        </div>

        {/* Education */}
        <div className="w-full mt-16 md:mt-20">

          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-[#30264A]">
              Education
            </h3>

            <p className="text-sm text-[#81758F] mt-2">
              My academic background
            </p>
          </div>

          <div className="w-full max-w-[850px] mx-auto">
            <div className="card-container bg-white/80 backdrop-blur-lg border border-[#E9DFFA] p-6 md:p-8 shadow-sm hover:shadow-lg transition-all duration-300">

              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-4">
                <div>
                  <h4 className="text-base md:text-lg font-semibold text-[#30264A]">
                    Your Degree / Qualification
                  </h4>

                  <p className="text-sm text-[#81758F] mt-1">
                    Your College / University Name
                  </p>
                </div>

                <span className="text-xs font-medium text-[#8B5CF6] bg-[#F0E9FF] px-3 py-2 rounded-full w-fit">
                  Year – Year
                </span>
              </div>

              <p className="text-sm leading-7 text-[#625875]">
                Add your specialization, academic details, or any relevant
                information about your education here.
              </p>

            </div>
          </div>
        </div>

      </div>
    </section>
  );
}

export default About;
