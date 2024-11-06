import "./App.css";
import About from "./routes/About";
import Service from "./routes/Service";
import { Home } from "./routes/Home";
import Contact from "./routes/Contact";

function App() {
  return (
    <>
      <Home />
      <About />
      <Contact />
      <Service />
    </>
  );
}

export default App;
