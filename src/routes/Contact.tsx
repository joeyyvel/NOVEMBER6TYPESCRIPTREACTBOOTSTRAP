import ContactForm from "../components/ContactForm";
import Hero from "../components/Hero";
import { Navbar } from "../components/Navbar";
import contact from "../images/contact.jpg";

const Contact = () => {
  return (
    <div>
      <h1>Contact</h1>
      <Navbar />
      <Hero
        cName="hero-aboutPage"
        heroImage={contact}
        title="Contacts"
        btnClass="hide"
      />
      <ContactForm />
    </div>
  );
};

export default Contact;
