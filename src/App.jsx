import "./app.scss";
import Contact from "./components/contact/Contact";
import Hero from "./components/hero/Hero";
import Navbar from "./components/navbar/Navbar";
import Portfolio from "./components/portfolio/Portfolio";
import Services from "./components/services/Services";

const App = () => {
  return (
    <div className="app">
      <Navbar />
      <section id="About">
        <Hero />
      </section>
      <section id="Experience">
        <Services />
      </section>
      <section id="Projects">
        <Portfolio />
      </section>
      <section id="Contact">
        <Contact />
      </section>
    </div>
  );
};

export default App;
