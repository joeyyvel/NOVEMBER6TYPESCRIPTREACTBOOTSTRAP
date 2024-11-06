import mountain from "../images/mountain.jpg";
import Hero from "../components/Hero";
import { Navbar } from "../components/Navbar";
import AboutUs from "../components/AboutUs";
const About = () => {
  return (
    <div>
      <Navbar />
      <Hero
        cName="Hero-aboutPage"
        heroImage={mountain}
        title="About"
        btnClass="hide"
      />
      <AboutUs />
    </div>
  );
};

export default About;
