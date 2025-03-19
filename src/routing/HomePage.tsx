import React, { useEffect, useState } from "react";
import { BlockFooter } from "../components/BlockFooter"
import { motion } from "framer-motion";
import MyNavbar from "../components/MyNavbar";
import BlockEvent from "../components/BlockEvent";
import OrkenWorld from "../components/OrkenWorld/OrkenWorld";
import BlockHomeEvent from "../components/BlockHomeEvent";

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
        <BlockHomeEvent />
        {/* <OrkenWorld /> */}
        {/* <BlockEventMetrics /> */}
        <BlockFooter />
      </motion.div>
    </>
  );
};

export default HomePage;