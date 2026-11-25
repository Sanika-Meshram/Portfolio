
import { useState } from "react";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const mailtoLink = `mailto:sanikameshram1884@gmail.com?subject=${encodeURIComponent(
      formData.subject
    )}&body=${encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\n\n${formData.message}`
    )}`;

    window.location.href = mailtoLink;
  };

  return (
    <section
      id="contact"
      className="w-full py-16 md:py-20 bg-gradient-to-b from-[#FAF8FF] to-[#F3EDFF]"
    >
      <div className="section-container">

        {/* Section Heading */}
        <div className="text-center mb-12">
          <p className="text-xs font-semibold tracking-widest uppercase text-[#8B5CF6] mb-2">
            Get In Touch
          </p>

          <h2 className="text-3xl md:text-4xl font-bold text-[#30264A]">
            Contact <span className="text-[#8B5CF6]">Me</span>
          </h2>

          <div className="w-16 h-1 rounded-full bg-gradient-to-r from-[#8B5CF6] to-[#D8B4FE] mx-auto mt-4"></div>

          <p className="text-sm text-[#81758F] mt-5 max-w-2xl mx-auto leading-7">
            Have a question, opportunity, or collaboration in mind?
            Feel free to get in touch.
          </p>
        </div>

        {/* Contact Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">

          {/* Contact Information */}
          <div className="bg-white/80 border border-[#E9DFFA] rounded-2xl p-6 md:p-8 shadow-sm">
            <h3 className="text-xl font-bold text-[#30264A] mb-6">
              Let's Connect
            </h3>

            <p className="text-sm leading-7 text-[#625875] mb-8">
              I am open to discussing opportunities, sharing ideas,
              and connecting with professionals. You can reach me
              through the following platforms.
            </p>

            <div className="flex flex-col gap-6">

              <div className="flex items-center gap-4">
                <div className="w-11 h-11 rounded-xl bg-[#F0E9FF] flex items-center justify-center text-xl">
                  ✉️
                </div>

                <div>
                  <p className="text-xs text-[#81758F]">Email</p>
                  <a
                    href="mailto:sanikameshram1884@gmail.com"
                    className="text-sm font-medium text-[#30264A] hover:text-[#8B5CF6]"
                  >
                    sanikameshram1884@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="w-11 h-11 rounded-xl bg-[#F0E9FF] flex items-center justify-center text-xl">
                  💼
                </div>

                <div>
                  <p className="text-xs text-[#81758F]">LinkedIn</p>
                  <a
                    href="www.linkedin.com/in/sanika-meshram-7515b2267"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm font-medium text-[#30264A] hover:text-[#8B5CF6]"
                  >
                    www.linkedin.com/in/sanika-meshram-7515b2267
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="w-11 h-11 rounded-xl bg-[#F0E9FF] flex items-center justify-center text-xl">
                  💻
                </div>

                <div>
                  <p className="text-xs text-[#81758F]">GitHub</p>
                  <a
                    href="https://github.com/Sanika-Meshram"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm font-medium text-[#30264A] hover:text-[#8B5CF6]"
                  >
                    https://github.com/Sanika-Meshram
                  </a>
                </div>
              </div>

            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white/80 border border-[#E9DFFA] rounded-2xl p-6 md:p-8 shadow-sm">
            <h3 className="text-xl font-bold text-[#30264A] mb-6">
              Send Me a Message
            </h3>

            <form onSubmit={handleSubmit} className="flex flex-col gap-4">

              <div>
                <label className="block text-sm font-medium text-[#625875] mb-2">
                  Your Name
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Enter your name"
                  required
                  className="w-full px-4 py-3 rounded-lg border border-[#E9DFFA] bg-[#FCFAFF] text-sm outline-none focus:border-[#8B5CF6]"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-[#625875] mb-2">
                  Your Email
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Enter your email"
                  required
                  className="w-full px-4 py-3 rounded-lg border border-[#E9DFFA] bg-[#FCFAFF] text-sm outline-none focus:border-[#8B5CF6]"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-[#625875] mb-2">
                  Subject
                </label>
                <input
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  placeholder="Enter subject"
                  required
                  className="w-full px-4 py-3 rounded-lg border border-[#E9DFFA] bg-[#FCFAFF] text-sm outline-none focus:border-[#8B5CF6]"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-[#625875] mb-2">
                  Message
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Write your message..."
                  rows="4"
                  required
                  className="w-full px-4 py-3 rounded-lg border border-[#E9DFFA] bg-[#FCFAFF] text-sm outline-none resize-none focus:border-[#8B5CF6]"
                />
              </div>

              <button
                type="submit"
                className="w-full py-3 rounded-lg bg-[#8B5CF6] text-white text-sm font-semibold hover:bg-[#7C3AED] transition-colors duration-300"
              >
                Send Message
              </button>

            </form>
          </div>

        </div>
      </div>
    </section>
  );
}

export default Contact;
