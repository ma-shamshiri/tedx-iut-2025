import React, { useRef } from 'react';
import { Box, SimpleGrid, Heading, useBreakpointValue } from '@chakra-ui/react';
import { GiOldMicrophone, GiWorld } from "react-icons/gi";
import { IoDiamondSharp } from "react-icons/io5";
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import AboutCard from './AboutCard';

const titleVariants: { [key: string]: any } = {
    initial: {
        y: 60,
        opacity: 0,
    },
    animate: {
        y: 0,
        opacity: 1,
        transition: {
            duration: 0.6,
            ease: "easeInOut",
        },
    },
};

const middleVariants: { [key: string]: any } = {
    initial: {
        y: 70,
        opacity: 0,
    },
    animate: {
        y: 0,
        opacity: 1,
        transition: {
            duration: 0.7,
            ease: "easeInOut",
        },
    },
};

const leftVariants: { [key: string]: any } = {
    initial: {
        x: -150,
        opacity: 0,
    },
    animate: {
        x: 0,
        opacity: 1,
        transition: {
            duration: 0.7,
            ease: "easeInOut",
        },
    },
};

const rightVariants: { [key: string]: any } = {
    initial: {
        x: 150,
        opacity: 0,
    },
    animate: {
        x: 0,
        opacity: 1,
        transition: {
            duration: 0.7,
            ease: "easeInOut",
        },
    },
};

const AboutSection: React.FC = () => {
    const { t, i18n } = useTranslation();

    const ref = useRef<HTMLDivElement>(null);

    const iconSize = useBreakpointValue({ base: "3.5rem", md: "3.5rem", lg: "4rem" });

    return (
        <Box
            as="section"
            width="100%"
            position="relative"
            bg="linear-gradient(120deg, #f8fafc 0%, #f3f6fb 60%, #f9f6ff 100%)"
            py={{ base: "6rem", md: "6rem", lg: "8rem" }}
            overflow="hidden"
        >
            {/* Tangible blurred “spotlights” */}
            <Box
                position="absolute"
                top="-120px"
                left="-120px"
                w="400px"
                h="400px"
                bg="#CB0000"
                opacity={0.10}
                borderRadius="50%"
                filter="blur(64px)"
                zIndex={0}
            />
            <Box
                position="absolute"
                bottom="-100px"
                right="-100px"
                w="320px"
                h="320px"
                bg="#8f00ff"
                opacity={0.10}
                borderRadius="50%"
                filter="blur(64px)"
                zIndex={0}
            />
            <Box
                position="absolute"
                top="40%"
                left="60%"
                w="200px"
                h="200px"
                bg="#CB0000"
                opacity={0.07}
                borderRadius="50%"
                filter="blur(48px)"
                zIndex={0}
            />

            {/* Subtle diagonal grid overlay */}
            <Box
                position="absolute"
                inset={0}
                zIndex={0}
                pointerEvents="none"
                style={{
                    backgroundImage:
                        "repeating-linear-gradient(135deg, rgba(200,0,0,0.04) 0 2px, transparent 2px 40px)",
                }}
            />

            <Box maxW="1200px" mx="auto" px={{ base: 4, md: 8 }} position="relative" zIndex={1}>
                <motion.div
                    ref={ref}
                    variants={titleVariants}
                    initial="initial"
                    whileInView="animate"
                >
                    <Heading
                        as="h2"
                        fontSize={{ base: "2.5rem", md: "4rem", lg: "5.4rem" }}
                        textAlign={i18n.language === "fa" ? "right" : "center"}
                        color="#CB0000"
                        fontFamily={i18n.language === "fa" ? "'Rubik', sans-serif" : ""}
                        fontWeight="1000"
                        dir={i18n.language === "fa" ? "rtl" : "ltr"}
                        mb={{ base: "2rem", md: "2rem" }}
                    >
                        {t("aboutSectionTitle1")}
                    </Heading>
                </motion.div>

                <motion.div
                    ref={ref}
                    variants={titleVariants}
                    initial="initial"
                    whileInView="animate"
                >
                    <Heading
                        display={{ base: "none", md: "block" }}
                        as="h3"
                        fontSize={{ base: "2rem", md: "2.7rem", lg: "3.4rem" }}
                        textAlign="center"
                        color="#000"
                        fontFamily={i18n.language === "fa" ? "'Rubik', sans-serif" : ""}
                        dir={i18n.language === "fa" ? "rtl" : "ltr"}
                        mb={{ base: "2rem", md: "6rem" }}
                    >
                        {t("aboutSectionTitle2")}
                    </Heading>
                </motion.div>

                <motion.div
                    ref={ref}
                    variants={titleVariants}
                    initial="initial"
                    whileInView="animate"
                >
                    <Heading
                        display={{ base: "block", md: "none" }}
                        as="h3"
                        fontSize={{ base: "2rem", md: "2.7rem", lg: "3.4rem" }}
                        textAlign="center"
                        color="#000"
                        fontFamily={i18n.language === "fa" ? "'Rubik', sans-serif" : ""}
                        dir={i18n.language === "fa" ? "rtl" : "ltr"}
                    >
                        {t("aboutSectionTitle3")}
                    </Heading>
                </motion.div>

                <motion.div
                    ref={ref}
                    variants={titleVariants}
                    initial="initial"
                    whileInView="animate"
                >
                    <Heading
                        display={{ base: "block", md: "none" }}
                        as="h3"
                        fontSize={{ base: "2rem", md: "2.7rem", lg: "3.4rem" }}
                        textAlign="center"
                        color="#000"
                        fontFamily={i18n.language === "fa" ? "'Rubik', sans-serif" : ""}
                        dir={i18n.language === "fa" ? "rtl" : "ltr"}
                        mb={{ base: "2rem", md: "6rem" }}
                    >
                        {t("aboutSectionTitle4")}
                    </Heading>
                </motion.div>

                <SimpleGrid
                    columns={{ base: 1, md: 1, lg: 3 }}
                    spacing={{ base: "8rem", lg: 12 }}
                    fontFamily={i18n.language === "fa" ? "'Rubik', sans-serif" : ""}
                    dir={i18n.language === "fa" ? "rtl" : "ltr"}
                >
                    <motion.div
                        ref={ref}
                        variants={i18n.language === "fa" ? rightVariants : leftVariants}
                        initial="initial"
                        whileInView="animate"
                    >
                        <AboutCard
                            icon={<GiWorld size={iconSize} color="#000" />}
                            title="tedTitle"
                            subtitle="tedSubTitle"
                            description="tedDescription"
                            bg="linear-gradient(135deg, #CB0000 0%, #a80000 60%, #fff 145%)"
                        />
                    </motion.div>
                    <motion.div
                        ref={ref}
                        variants={middleVariants}
                        initial="initial"
                        whileInView="animate"
                    >
                        <AboutCard
                            icon={<GiOldMicrophone size={iconSize} color="#CB0000" />}
                            title="tedxTitle"
                            subtitle="tedxSubTitle"
                            description="tedxDescription"
                            bg="linear-gradient(135deg, #232526 0%, #414345 100%)"
                        />
                    </motion.div>
                    <motion.div
                        ref={ref}
                        variants={i18n.language === "fa" ? leftVariants : rightVariants}
                        initial="initial"
                        whileInView="animate"
                    >
                        <AboutCard
                            icon={<IoDiamondSharp size={iconSize} color="#000" />}
                            title="tedxiutTitle"
                            subtitle="tedxiutSubTitle"
                            description="tedxiutDescription"
                            bg="linear-gradient(135deg, #CB0000 0%, #a80000 60%, #fff 145%)"
                        />
                    </motion.div>
                </SimpleGrid>
            </Box>
        </Box>
    );
};

export default AboutSection;