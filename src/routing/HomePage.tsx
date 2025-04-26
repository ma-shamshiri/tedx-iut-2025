import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import AboutSection from "../components/AboutSection";
import FooterSection from "../components/FooterSection";
import HeroSection from "../components/HeroSection";
import MyNavbar from "../components/MyNavbar";
import TeamSection from "../components/TeamSection";
import ContactUsSection from "../components/ContactUsSection";

const HomePage: React.FC = () => {
  const [boxLoaded, setBoxLoaded] = useState(false);

  const handleBoxLoad = () => {
    setBoxLoaded(true);
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, ease: "easeInOut" }}
        onAnimationComplete={handleBoxLoad}
      >
        <MyNavbar />
        <HeroSection />
        <AboutSection />
        <TeamSection />
        <ContactUsSection />
        <FooterSection />
      </motion.div>
    </>
  );
};

export default HomePage;