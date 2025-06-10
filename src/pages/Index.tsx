import React from "react";
import { LanguageProvider } from "../contexts/LanguageContext";
import Header from "../components/Header";
import Hero from "../components/Hero";
import About from "../components/About";
import Services from "../components/Services";
import TechnicalTeam from "../components/TechnicalTeam";
import Projects from "../components/Projects";
import ValuesAndEthics from "../components/ValuesAndEthics";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import BackToTop from "../components/BackToTop";

const Index = () => {
  return (
    <LanguageProvider>
      <div className="min-h-screen">
        <Header />
        <Hero />
        <About />
        <Services />
        <TechnicalTeam />
        <Projects />
        <ValuesAndEthics />
        <Contact />
        <Footer />
        <BackToTop />
      </div>
    </LanguageProvider>
  );
};

export default Index;
