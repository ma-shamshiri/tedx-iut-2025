import React, { useEffect, useState } from "react";
import {
    Box,
    Flex,
    IconButton,
    Image,
    Link,
    useBreakpointValue,
    useColorMode,
    useColorModeValue,
} from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom";
import { tedxBlack, tedxWhite } from "../../assets";
import { FaInstagram, FaLinkedin } from "react-icons/fa";
import LanguageSwitcher from "../LanguageSwitcher";

const MyNavbar: React.FC = () => {
    const { colorMode } = useColorMode();

    const tedxImg = colorMode === "dark" ? tedxWhite : tedxBlack;

    const instagramIconSize = useBreakpointValue({ base: "30px", md: "30px", lg: "28px" });
    const instagramIconBoxSize = useBreakpointValue({ base: "40px", md: "40px", lg: "35px" });

    const linkedinIconSize = useBreakpointValue({ base: "29px", md: "30px", lg: "24px" });
    const linkedinIconBoxSize = useBreakpointValue({ base: "40px", md: "40px", lg: "35px" });

    const [isNavVisible, setIsNavVisible] = useState(true);

    const [scrollPosition, setScrollPosition] = useState(0);

    const handleScroll = () => {
        const currentPosition = window.pageYOffset;
        setIsNavVisible(currentPosition < scrollPosition);
        setScrollPosition(currentPosition);
    };

    useEffect(() => {
        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, [scrollPosition]);

    return (
        <>
            <Box
                display={{ base: "block", lg: "none" }}
                width="100%"
                py="1.5rem"
                px="1rem"
                bg={useColorModeValue("#f1f1f1", "black")}
                zIndex="999"
            >
                <Link as={RouterLink} to="/" cursor="pointer">
                    <Flex justifyContent="center" alignItems="center">
                        <Image src={tedxImg} width={{ base: "90%", md: "60%" }} />
                    </Flex>
                </Link>
            </Box>

            <Box
                position="sticky"
                // top={isNavVisible ? "0" : "-100px"}
                top={0}
                transition="top 0.3s"
                zIndex="999"
            >
                {/* Mobile Navbar */}
                <Flex
                    as="nav"
                    display={{ base: "block", lg: "none" }}
                    bg={useColorModeValue("#f1f1f1", "gray.900")}
                    width="100%"
                    height="7rem"
                    paddingX="0.6rem"
                    justify="space-between"
                    position="relative"
                >
                    <Flex
                        width="100%"
                        height="100%"
                        justifyContent="space-between"
                        alignItems="center"
                        paddingX="1rem"
                    >
                        <Box
                            as={IconButton}
                            onClick={() => window.open("https://www.instagram.com/tedx.iut?igsh=MW1yeDJhMDMxZ3V5Zg==", "_blank")}
                            rel="noopener noreferrer"
                            icon={<FaInstagram size={instagramIconSize} />}
                            bg={"linear-gradient(45deg, #f09433 0%,#e6683c 25%,#dc2743 50%,#cc2366 75%,#bc1888 100%)"}
                            color="white"
                            _hover={{ bg: "linear-gradient(45deg, #f09433 0%,#e6683c 25%,#dc2743 50%,#cc2366 75%,#bc1888 100%)" }}
                            borderRadius="10px"
                            boxSize={instagramIconBoxSize}
                        />
                        <Flex position="absolute" top="50%" left="50%" transform="translate(-50%, -50%)" >
                            <LanguageSwitcher />
                        </Flex>
                        <Box
                            as={IconButton}
                            onClick={() => window.open("https://www.linkedin.com/company/tedx-iut/", "_blank")}
                            rel="noopener noreferrer"
                            icon={<FaLinkedin size={linkedinIconSize} />}
                            bg="#0077B5"
                            color="white"
                            _hover={{ bg: "#0077B5" }}
                            borderRadius="10px"
                            boxSize={linkedinIconBoxSize}
                        />
                    </Flex>
                </Flex>

                {/* Desktop Navbar */}
                <Flex
                    as="nav"
                    display={{ base: "none", lg: "block" }}
                    bg={useColorModeValue("#f1f1f1", "#000")}
                    width="100%"
                    height="8rem"
                    paddingX="1rem"
                    position="relative"
                >
                    <Flex
                        width="100%"
                        height="100%"
                        justifyContent="flex-end"
                        alignItems="center"
                        paddingX="2rem"
                    >
                        <Flex position="absolute" top="50%" left="50%" transform="translate(-50%, -50%)" >
                            <Link as={RouterLink} to="/" cursor="pointer">
                                <Image src={tedxImg} width={450} />
                            </Link>
                        </Flex>
                        <LanguageSwitcher />
                    </Flex>
                </Flex>
            </Box>
        </>
    );
};

export default MyNavbar;
