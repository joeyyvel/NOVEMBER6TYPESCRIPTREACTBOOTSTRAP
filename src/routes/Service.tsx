import service from "../images/services.jpg";
import Hero from "../components/Hero";
import { Navbar } from "../components/Navbar";
import Trip from "../components/Trip";

const Service = () => {
  return (
    <div>
      <Navbar />
      <Hero
        cName="hero-aboutPage"
        heroImage={service}
        title="services"
        btnClass="hide"
      />
      <Trip />
    </div>
  );
};

export default Service;
