import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import { Home } from "./routes/Home";
import Service from "./routes/Service";
import Contact from "./routes/Contact";
import About from "./routes/About";
import Bootstrap from "./footerPages/Bootstrap";
import Javascript from "./footerPages/Javascript";

export const router = createBrowserRouter([
  { path: "/", element: <App /> },
  { path: "/contact", element: <Contact /> },
  { path: "/home", element: <Home /> },
  { path: "/service", element: <Service /> },
  { path: "/about", element: <About /> },
  { path: "/bootstrap", element: <Bootstrap /> },
  { path: "/javascript", element: <Javascript /> },
]);
