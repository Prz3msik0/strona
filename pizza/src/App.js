import { BrowserRouter } from "react-router-dom";
import { About } from "./components/About";
import { Works } from "./components/Works";
import { Experience } from "./components/Experience";
import { Hero } from "./components/Hero";
import { Navbar } from "./components/Navbar";

const App = () => {
  return (
    <BrowserRouter>
      <div className="relative z-0 bg-primary">
        <div
          className="bg-hero-pattern bg-cover
  bg-no-repeat bg-center"
        >
          <Navbar />
          <Hero />
        </div>
        <About />
        <Experience />
        <Works />
      </div>
    </BrowserRouter>
  );
};

export default App;
