
import Navbar from "./components/Navbar";
import Home from "./sections/Home";
import About from "./sections/About";
import Skills from "./sections/Skills";
import Projects from "./sections/Projects";
import Experience from "./sections/Experience";
import Certifications from "./sections/Certifications";
import Contact from "./sections/Contact";
import "./App.css";

function App() {
  return (
    <div className="min-h-screen bg-[#FAF8FF]">
      <Navbar />
     
      <main className="w-full">
          <Home />
          <About />
          <Skills />
          <Projects />
          <Experience />
          <Certifications />
          <Contact />
      </main>
     
    </div>
  );
}

export default App;
