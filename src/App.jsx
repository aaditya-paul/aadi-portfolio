import About from "./components/about";
import Contact from "./components/contact";
import Dots from "./components/dots";
import HeroSection from "./components/HeroSection";
import Projects from "./components/projects";

function App() {
  return (
    <div className="relative w-full h-full bg-black overflow-hidden">
      <HeroSection />
      <About />
      <Projects />
      <Contact />
      <Dots />
    </div>
  );
}

export default App;
