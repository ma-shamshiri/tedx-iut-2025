import React, { FunctionComponent } from "react";
import {
  Box,
  Icon,
  IconProps,
  useBreakpointValue,
  useColorMode,
} from "@chakra-ui/react";
import { motion, AnimatePresence } from "framer-motion";

const BlurColor: FunctionComponent<IconProps> = (props) => {
  const { colorMode } = useColorMode();
  const displayValue = useBreakpointValue({ base: "none", xl: "block" });

  return (
    <AnimatePresence>
      {colorMode === "dark" && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
        >
          <Icon
            width={"30vw"}
            zIndex={0}
            height="560px"
            viewBox="0 0 528 560"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            {...props}
            display={displayValue}
          >
            <circle cx="71" cy="61" r="111" fill="#ED64A6" />
            <circle cx="61" cy="21" r="101.5" fill="#F56565" />
            <circle cx="61" cy="21" r="101.5" fill="#ED64A6" />
            <circle cx="244" cy="106" r="139" fill="#ED64A6" />
            <circle cy="291" r="139" fill="#ED64A6" />
            <circle cx="80.5" cy="189.5" r="101.5" fill="#ED8936" />
            <circle cx="196.5" cy="317.5" r="101.5" fill="#ECC94B" />
            <circle cx="70.5" cy="458.5" r="101.5" fill="#48BB78" />
            <circle cx="426.5" cy="10.5" r="101.5" fill="#2f89d4" />
            <circle cx="450.5" cy="10.5" r="101.5" fill="#2f89d4" />
          </Icon>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default BlurColor;
