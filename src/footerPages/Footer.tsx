import { Link } from "react-router-dom";
import "./FooterStyles.css";

const Footer = () => {
  return (
    <div className="footer">
      <div className="top">
        <div>
          <h1>Excel in your chosen field</h1>
          <p>Every day is a chance to Learn</p>
        </div>

        <div>
          <a href="/">
            <i className="fa-brands fa-facebook-square" id="faceBook"></i>
          </a>
          <a href="/">
            <i className="fa-brands fa-instagram-square" id="instagram"></i>
          </a>
          <a href="/">
            <i className="fa-brands fa-behance-square" id="behance"></i>
          </a>
          <a href="/">
            <i className="fa-brands fa-twitter-square" id="twitter"></i>
          </a>
        </div>
      </div>

      <div className="bottom">
        <div>
          <h4 className="footTitle">Front End basic tools</h4>
          <Link to="/javascript" className="topic">
            JavaScript
          </Link>
          <Link to="/html" className="topic">
            HTML
          </Link>
          <Link to="/css" className="topic">
            CSS
          </Link>
          <Link to="/cheatsheet" className="topic">
            Cheat Sheet
          </Link>
        </div>

        <div>
          <h4 className="footTitle">Other`s</h4>
          <Link to="/bootstrap" className="topic">
            Bootstrap
          </Link>
          <Link to="/reactjs" className="topic">
            ReactJS
          </Link>
          <Link to="/fontAwesome" className="topic">
            Font Awesome
          </Link>
          <Link to="/sass" className="topic">
            Sass
          </Link>
        </div>

        <div>
          <h4 className="footTitle">PC hardware</h4>
          <Link to="/pcAssembly" className="topic">
            PC Assembly
          </Link>
          <Link to="/pcTroubleShoot" className="topic">
            PC Trouble shooting
          </Link>
          <Link to="/contact" className="topic">
            Contact us
          </Link>
        </div>

        <div>
          <h4 className="footTitle">Legalities</h4>
          <Link to="/termsofservice" className="topic">
            Terms of Service
          </Link>
          <Link to="/privacyPolicy" className="topic">
            Privacy Policy
          </Link>
          <Link to="/license" className="topic">
            License
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Footer;
