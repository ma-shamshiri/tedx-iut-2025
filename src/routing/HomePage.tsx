import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { useBreakpointValue } from "@chakra-ui/react";
import AboutSection from "../components/AboutSection";
import BlockHomeEvent from "../components/BlockHomeEvent";
import FooterSection from "../components/FooterSection";
import HeroSection from "../components/HeroSection";
import MyNavbar from "../components/MyNavbar";
import TeamSection from "../components/TeamSection";

const HomePage: React.FC = () => {
  const [boxLoaded, setBoxLoaded] = useState(false);

  const headingSize = useBreakpointValue({ base: '2.5rem', md: '3.5rem' });


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
        {/* <BlockHomeEvent /> */}
        <HeroSection />
        <AboutSection />
        <TeamSection />
        <FooterSection />
      </motion.div>
    </>
  );
};

export default HomePage;