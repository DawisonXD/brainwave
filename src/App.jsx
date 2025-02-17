import ButtonGradient from "./assets/svg/ButtonGradient";
import Header from "./componenets/Header";
import Hero from "./componenets/Hero";
import Benefits from "./componenets/Benefits";
import Collaboration from "./componenets/Collaboration";
import Services from "./componenets/Services";
import Pricing from "./componenets/Pricing";
import Roadmap from "./componenets/Roadmap";
import Footer from "./componenets/Footer";

const App = () => {
  return (
    <>
      <div className="pt-[4.75rem] lg:pt-[5.25rem] overflow-hidden">
        <Header />
        <Hero />
        <Benefits />
        <Collaboration />
        <Services />
        <Pricing />
        <Roadmap />
        <Footer />
      </div>
      <ButtonGradient />
    </>
  );
};
export default App;
