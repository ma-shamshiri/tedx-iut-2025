import React, { useRef, useState } from "react";
import { Box, Text, useColorModeValue } from "@chakra-ui/react";
import { useTranslation } from "react-i18next";
import { BlockTeamCarousel } from "../BlockTeamCarousel";
import { motion } from 'framer-motion';

const variants: { [key: string]: any } = {
    initial: {
        y: 50,
        opacity: 0,
    },
    animate: {
        y: 0,
        opacity: 1,
        transition: {
            duration: 0.4,
            ease: "easeInOut",
            staggerChildren: 0.1,
        },
    },
};

export const BlockTeamGrid: React.FC = () => {
    const { t } = useTranslation();

    const ref = useRef<HTMLDivElement>(null);

    const numElements = 8;

    const [isHoveredArray, setIsHoveredArray] = useState(
        Array(numElements).fill(false)
    );

    return (
        <Box
            className="block block--dark block--skewed-right block-showcase"
            padding="6rem 2rem"
            paddingBottom="10rem"
            // bg={useColorModeValue(
            //     "#F0E2B6",
            //     "#1E2142"
            // )}
            bg={useColorModeValue(
                "#f5e09d",
                "#0D1224"
            )}
            color="#16F8B6"
            overflow={"hidden"}
        >
            <motion.div
                ref={ref}
                variants={variants}
                initial="initial"
                whileInView="animate"
            >
                <Box
                    className="block__header"
                    textAlign="center"
                    // maxWidth="100rem"
                    margin="0 auto"
                >
                    <Text
                        className="h2"
                        color={useColorModeValue("gray.800", "#16F8B6")}
                        marginBottom="2rem"
                        marginTop="0"
                        fontSize={{ base: "2.8rem", lg: "4rem" }}
                        fontWeight="bold"
                        lineHeight="1.5"
                    >
                        {t("teamPageTitle")}
                    </Text>

                    <Text
                        className="p"
                        color={useColorModeValue("gray.700", "white")}
                        marginBottom="4rem"
                        marginTop="0"
                        fontSize={{ base: "1.5rem", lg: "2.1rem" }}
                        lineHeight="1.5"
                    >
                        {t("teamPageSubTitle")}
                    </Text>
                </Box>
            </motion.div>

            <Box
                // className="block__header"
                textAlign="center"
                // maxWidth="100rem"
                margin="0 auto"
            >
                <BlockTeamCarousel />
            </Box>
        </Box>
    );
};

// export default BlockTeamGrid;
