import Navbar from "./components/Navbar";
import Hero from "./sections/Hero";
import About from "./sections/About";
import Projects from "./sections/Projects";
import Focus from "./sections/Focus";
import Contact from "./sections/Contact";

function App() {
  return (
    <div className="min-h-screen bg-[#d9d8d6] text-neutral-900">
      <Navbar />

      <main>
        <Hero />
        <About />
        <Projects />
        <Focus />
        <Contact />
      </main>
    </div>
  );
}

export default App;