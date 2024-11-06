import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import { Home } from "./routes/Home";
import Service from "./routes/Service";
import Contact from "./routes/Contact";
import About from "./routes/About";
import Bootstrap from "./footerPages/Bootstrap";
import Javascript from "./footerPages/Javascript";
import Cheatsheet from "./footerPages/Cheatsheet";
import Css from "./footerPages/Css";
import FontAwesome from "./footerPages/FontAwesome";
import Html from "./footerPages/Html";
import License from "./footerPages/License";
import PcAssembly from "./footerPages/PcAssembly";
import PcTroubleShoot from "./footerPages/PcTroubleShoot";
import PrivacyPolicy from "./footerPages/PrivacyPolicy";
import Reactjs from "./footerPages/Reactjs";
import Sass from "./footerPages/Sass";
import TermsOfService from "./footerPages/TermsOfService";

export const router = createBrowserRouter([
  { path: "/", element: <App /> },
  { path: "/contact", element: <Contact /> },
  { path: "/home", element: <Home /> },
  { path: "/service", element: <Service /> },
  { path: "/about", element: <About /> },
  { path: "/bootstrap", element: <Bootstrap /> },
  { path: "/javascript", element: <Javascript /> },
  { path: "/cheatSheet", element: <Cheatsheet /> },
  { path: "/css", element: <Css /> },
  { path: "/fontAwesome", element: <FontAwesome /> },
  { path: "/html", element: <Html /> },
  { path: "/license", element: <License /> },
  { path: "/pcAssembly", element: <PcAssembly /> },
  { path: "/pcTroubleShoot", element: <PcTroubleShoot /> },
  { path: "/privacyPolicy", element: <PrivacyPolicy /> },
  { path: "/reactJs", element: <Reactjs /> },
  { path: "/sass", element: <Sass /> },
  { path: "/termsOfService", element: <TermsOfService /> },
]);
