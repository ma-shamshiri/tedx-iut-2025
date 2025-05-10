// TeamSection.tsx
import React, { useRef, useState } from 'react';
import { Box, Heading, Container, useBreakpointValue, Link, Text } from '@chakra-ui/react';
import TeamMemberCarousel from '../TeamMemberCarousel'; // or your import path
import { Link as RouterLink } from "react-router-dom";
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';

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

const TeamSection: React.FC = () => {
    const { t, i18n } = useTranslation();

    const ref = useRef<HTMLDivElement>(null);

    const headingSize = useBreakpointValue({ base: '2.5rem', md: '3rem', lg: '3.5rem' });

    const [isHoveredButton, setIsHoveredButton] = useState(false);

    const handleHoverButton = () => {
        setIsHoveredButton(true);
    };

    const handleUnHoverButton = () => {
        setIsHoveredButton(false);
    };

    return (
        <Box
            as="section"
            color="white"
            position="relative"
            // bg="linear-gradient(120deg, #f8fafc 0%, #f3f6fb 60%, #f9f6ff 100%)"
            bg={"#fff"}
            paddingY={{ base: '6rem', md: '6rem' }}
            width="100%"
            overflow="hidden"
        >
            <Container maxW="1400px" textAlign="center" position="relative" zIndex={1}>
                <motion.div
                    ref={ref}
                    variants={titleVariants}
                    initial="initial"
                    whileInView="animate"
                >
                    <Heading
                        as="h2"
                        fontSize={headingSize}
                        fontWeight="bold"
                        lineHeight="1.2"
                        fontFamily={i18n.language === "fa" ? "'Rubik', sans-serif" : ""}
                        dir={i18n.language === "fa" ? "rtl" : "ltr"}
                        mb="1rem"
                        color="#000"
                    >
                        {t("teamPageTitle")}
                    </Heading>
                </motion.div>
                <TeamMemberCarousel />

                <motion.div
                    ref={ref}
                    variants={titleVariants}
                    initial="initial"
                    whileInView="animate"
                >
                    <Link
                        position="relative"
                        className="btn btn--secondary btn--block"
                        as={RouterLink}
                        to={"/team/"}
                        border="2px solid #CB0000"
                        borderRadius="7px"
                        cursor="pointer"
                        fontSize={{ base: "1.8rem", lg: "2rem" }}
                        fontFamily={i18n.language === "fa" ? "'Rubik', sans-serif" : ""}
                        dir={i18n.language === "fa" ? "rtl" : "ltr"}
                        marginTop={{ base: "2rem", lg: "3rem" }}
                        padding="1.5rem"
                        paddingX="3rem"
                        textAlign="center"
                        whiteSpace="nowrap"
                        bg="#CB0000"
                        color="#fff"
                        boxShadow="0px 6px 10px rgba(0, 0, 0, 0.2), 0px -6px 10px rgba(0, 0, 0, 0.2)"
                        display="inline-block"
                        width={{ base: "fit-content", lg: "fit-content" }}
                        _hover={{
                            border: "0.2rem solid #CB0000",
                            bg: "transparent",
                            color: "#CB0000",
                            boxShadow:
                                "0px 8px 14px rgba(0, 0, 0, 0.3), 0px -8px 14px rgba(0, 0, 0, 0.3)",
                        }}
                        transition="background-color 0.25s ease-out, border 0.25s ease-out, box-shadow 0.25s ease"
                        onMouseEnter={handleHoverButton}
                        onMouseLeave={handleUnHoverButton}
                    >
                        <Text>{t("scrollingTeamButtonLabel")}</Text>
                    </Link>
                </motion.div>
            </Container>
        </Box>
    );
};

export default TeamSection;
