import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Aboutme from "./components/Aboutme";
import Contactme from "./components/Contactme";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Home from "./components/Home";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/skills" element={<Skills />} exact />
          <Route path="/projects" element={<Projects />} exact />
          <Route path="/aboutme" element={<Aboutme />} exact />
          <Route path="/contactme" element={<Contactme />} exact />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
