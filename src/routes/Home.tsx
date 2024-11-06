import Destination from "../components/Destination";
import Footer from "../footerPages/Footer";
import Hero from "../components/Hero";
import { Navbar } from "../components/Navbar";

export const Home = () => {
  return (
    <div>
      <h1>
        Home<i className="fa-regular fa-user"></i>
      </h1>
      <Navbar />
      <Hero
        cName="hero"
        heroImage="https://images.unsplash.com/photo-1469796466635-455ede028aca?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        title="Travel and Learn"
        text="Don't be the same. BE BETTER!"
        buttonText="Travel Plan"
        btnClass="show"
      />
      <Destination />
      <Footer />
    </div>
  );
};