
function Home() {
  return (
    <section
      id="home"
      className="w-full min-h-[calc(100vh-76px)] flex items-center
      bg-gradient-to-br from-[#FAF8FF] via-[#F8F4FF] to-[#F2EAFE]
      px-6 md:px-12 lg:px-16 py-16"
    >
      <div className="max-w-7xl w-full mx-auto grid
      grid-cols-1 md:grid-cols-2 gap-12 lg:gap-20 items-center">

        {/* LEFT SIDE - INTRODUCTION */}
        <div className="text-center md:text-left">

          <p className="text-[#8B5CF6] font-semibold
          text-base md:text-lg mb-5">
            Hello, 
          </p>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl
          font-bold text-[#30264A] leading-tight mb-5">
            I'm <span className="text-[#8B5CF6]">Sanika</span>
            <br />
            Meshram
          </h1>

          <h2 className="text-lg sm:text-xl lg:text-2xl
          font-semibold text-[#7651C9] leading-snug mb-5">
            Aspiring Data Analyst & Java Full Stack Developer
          </h2>

          <p className="text-gray-600 text-base lg:text-lg
          leading-8 max-w-xl mx-auto md:mx-0 mb-8">
            I enjoy transforming data into meaningful insights
            and building interactive web applications. I am
            passionate about learning new technologies and
            creating solutions that make a difference.
          </p>

          {/* BUTTONS */}
          <div className="flex flex-wrap justify-center
          md:justify-start gap-4 mb-9">

            <a
              href="/resume/your-resume.pdf"
              download
              className="px-7 py-3 rounded-full
              bg-gradient-to-r from-[#8B5CF6] to-[#B69AE8]
              text-white font-semibold shadow-md
              hover:shadow-lg hover:-translate-y-1
              transition-all duration-300"
            >
              Download Resume
            </a>

            <a
              href="#about"
              className="px-7 py-3 rounded-full
              border-2 border-[#A78BFA]
              text-[#7651C9] font-semibold
              hover:bg-[#EEE7FC]
              hover:-translate-y-1
              transition-all duration-300"
            >
              Know More
            </a>

          </div>

          {/* SOCIAL LINKS */}
          <div className="flex items-center justify-center
          md:justify-start gap-4">

            <span className="text-gray-500 text-sm font-medium">
              Connect with me:
            </span>

            <a
              href="https://www.linkedin.com/"
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn"
              className="w-10 h-10 rounded-full bg-[#EEE7FC]
              flex items-center justify-center
              text-[#7651C9] font-bold
              hover:bg-[#8B5CF6] hover:text-white
              transition-all duration-300"
            >
              in
            </a>

            <a
              href="https://github.com/"
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub"
              className="w-10 h-10 rounded-full bg-[#EEE7FC]
              flex items-center justify-center
              text-[#7651C9] font-bold
              hover:bg-[#8B5CF6] hover:text-white
              transition-all duration-300"
            >
              GH
            </a>

          </div>
        </div>

        {/* RIGHT SIDE - PROFILE IMAGE */}
        <div className="flex justify-center items-center">

          <div className="relative w-64 h-64 sm:w-80 sm:h-80
          lg:w-[370px] lg:h-[370px]">

            {/* SOFT GLOW */}
            <div className="absolute inset-0 rounded-full
            bg-gradient-to-br from-[#C4A7FF] to-[#F0C9F8]
            blur-2xl opacity-60 scale-110">
            </div>

            {/* IMAGE BORDER */}
            <div className="relative w-full h-full rounded-full p-2
            bg-gradient-to-br from-[#8B5CF6] to-[#E9B8F5]
            shadow-xl">

              <img
                src="/images/profile.png"
                alt="Sanika Meshram"
                className="w-full h-full object-cover
                object-center rounded-full border-4 border-white"
              />

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}

export default Home;
