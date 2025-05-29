import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navigation from "./components/Navigation";
import ParticlesBackground from "./components/ParticlesBackground";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import ContactPage from "./pages/ContactPage";
import ApplyPage from "./pages/ApplyPage";
import TeamPage from "./pages/TeamPage";
import Footer from "./components/Footer"

import "./App.css";

function App() {
  return (
    <Router>
      {/* Wrapper */}
      <div className="relative min-h-screen overflow-hidden">
        {/* Navigation and Pages */}
        <Navigation />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/apply" element={<ApplyPage />} />
          <Route path="/teams" element={<TeamPage />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
