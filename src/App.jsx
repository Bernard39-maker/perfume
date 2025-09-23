import React from "react";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import Aboutpage from "./Components/Aboutpage";
import ContactPage from "./Components/Contactpage";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <Router>
      <Header />

      <Routes>
        
        <Route path="/about" element={<Aboutpage />} />

        <Route path="/contact" element={<ContactPage />} />
      </Routes>

      <Footer />
    </Router>
  );
};

export default App;
