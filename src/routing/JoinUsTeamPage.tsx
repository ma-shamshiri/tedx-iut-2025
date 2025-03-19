import React, { useEffect, useState } from "react";
import { BlockFooter } from "../components/BlockFooter";
import { BlockJoinusTeam } from "../components/BlockJoinusTeam";
import { motion } from "framer-motion";
import { Navigationbar } from "../components/Navigationbar";

const JoinUsTeamPage: React.FC = () => {
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
        <Navigationbar />
        <BlockJoinusTeam />
        <BlockFooter />
      </motion.div>
    </>
  );
};

export default JoinUsTeamPage;
