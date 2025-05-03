import React from "react"
  import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
  import Home from "./pages/Home";
  import About from "./pages/About"
  import Projects from "./pages/Projects";
  import Navbar from "./components/Navbar";
  import Skills from "./pages/Skills";
  import Contact from "./pages/Contact";
  function App() {
    return (
      <Router>
        <Navbar/>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/project" element={<Projects />} />
          <Route path="/skill" element={<Skills />} />
          <Route path="/contact" element={<Contact/>} />
        </Routes>
      </Router>
    );
  }
  

export default App
