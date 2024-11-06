import { MenuItems } from "./MenuItems";
import { Link } from "react-router-dom";
import "./NavbarStyles.css";
import { useEffect, useState } from "react";
import travelPic from "../images/travel.jpg";

export const Navbar = () => {
  const [clicked, setClicked] = useState(false);

  const handleClick = () => {
    setClicked(!clicked);
  };

  const [show, setShow] = useState(true);

  const controlNavbar = () => {
    if (window.scrollY > 100) {
      setShow(false);
    } else {
      setShow(true);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", controlNavbar);
    return () => {
      window.removeEventListener("scroll", controlNavbar);
    };
  }, []);

  return (
    <div className={`nav ${show && "NavbarItems"}`}>
      <h1 className="navbar-logo">
        <img
          src={travelPic}
          alt=""
          style={{ height: "70px", borderRadius: "8px", marginTop: "5px" }}
        />
      </h1>

      <div className="menu-icons" onClick={handleClick}>
        <i className={clicked ? "fas fa-times" : "fas fa-bars"}></i>
      </div>

      {MenuItems.map((item, index) => {
        return (
          <li key={index}>
            <Link className={item.cName} to={item.url}>
              <i className="{item.icon}"></i>
              {item.title}
            </Link>
          </li>
        );
      })}
    </div>
  );
};
