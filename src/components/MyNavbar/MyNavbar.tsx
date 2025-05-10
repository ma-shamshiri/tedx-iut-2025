import React, { useState } from "react";
import {
    Box,
    Flex,
    IconButton,
    Image,
    Link,
    useColorMode,
    Drawer,
    DrawerBody,
    DrawerOverlay,
    DrawerContent,
    DrawerCloseButton,
    Button,
    VStack,
    HStack,
    Collapse,
    useBreakpointValue,
} from "@chakra-ui/react";
import { Link as RouterLink, useLocation } from "react-router-dom";
import { tedxBlack, tedxWhite } from "../../assets";
import { FaBars, FaShareAlt, FaTimes } from "react-icons/fa";
import { FaInstagram, FaTelegramPlane } from 'react-icons/fa';
import LanguageSwitcher from "../LanguageSwitcher";
import { useTranslation } from "react-i18next";
import { BsLinkedin } from "react-icons/bs";

interface RouteNavItem {
    key: string;
    label: string;
    type: "route";
    to: string;
}
interface SectionNavItem {
    key: string;
    label: string;
    type: "section";
    section: string;
}
type NavItem = RouteNavItem | SectionNavItem;

const NAV_ITEMS: NavItem[] = [
    { key: "home", label: "home", type: "route", to: "/" },
    // { key: "aboutUs", label: "aboutUs", type: "section", section: "about-section" },
    { key: "team", label: "team", type: "route", to: "/team" },
    { key: "gallery", label: "gallery", type: "route", to: "/gallery" },
    { key: "sponsors", label: "sponsors", type: "route", to: "/sponsors" },
    // { key: "contactUs", label: "contactUs", type: "section", section: "contact-section" },
];

const MyNavbar: React.FC = () => {
    const { t, i18n } = useTranslation();
    const { colorMode } = useColorMode();
    const tedxImg = colorMode === "dark" ? tedxWhite : tedxBlack;
    const [isDrawerOpen, setIsDrawerOpen] = useState(false);
    const [showSocial, setShowSocial] = useState(false);
    const NAV_ITEM_FONT_SIZE = "1.3rem";
    const iconSize = useBreakpointValue({ base: "1.8rem", md: "2.1rem", lg: "2.3rem" });
    const iconBoxSize = useBreakpointValue({ base: "3.2rem", md: "3.8rem", lg: "4.2rem" });

    const location = useLocation();

    // Smooth scroll handler for section links
    const handleSmoothScroll = (sectionId: string) => (e: React.MouseEvent) => {
        e.preventDefault();
        if (location.pathname === "/") {
            const el = document.getElementById(sectionId);
            if (el) {
                el.scrollIntoView({ behavior: "smooth" });
            }
        } else {
            window.location.href = `/#${sectionId}`;
        }
        setIsDrawerOpen(false);
    };

    return (
        <>
            {/* Mobile Top Logo */}
            <Box
                display={{ base: "block", lg: "none" }}
                width="100%"
                py="1.5rem"
                px="1rem"
                bg="#000"
                zIndex="999"
            >
                <Link as={RouterLink} to="/" cursor="pointer">
                    <Flex justifyContent="center" alignItems="center">
                        <Image src={tedxImg} width={{ base: "90%", md: "60%" }} borderRadius={0} />
                    </Flex>
                </Link>
            </Box>

            <Box
                position="sticky"
                top={0}
                transition="top 0.3s"
                zIndex="999"
            >
                {/* Mobile Navbar */}
                <Flex
                    as="nav"
                    display={{ base: "flex", lg: "none" }}
                    bg="#000"
                    width="100%"
                    height="7rem"
                    px="3rem"
                    justify="space-between"
                    alignItems="center"
                    position="relative"
                >
                    {/* Hamburger on left */}
                    <IconButton
                        aria-label={isDrawerOpen ? "Close menu" : "Open menu"}
                        icon={
                            <Box as="span" transition="all 0.3s">
                                {isDrawerOpen ? (
                                    <FaTimes style={{ transition: "transform 0.3s", transform: isDrawerOpen ? "rotate(90deg)" : "rotate(0deg)" }} />
                                ) : (
                                    <FaBars style={{ transition: "transform 0.3s", transform: isDrawerOpen ? "rotate(-90deg)" : "rotate(0deg)" }} />
                                )}
                            </Box>
                        }
                        variant="ghost"
                        fontSize="2xl"
                        onClick={() => setIsDrawerOpen((prev) => !prev)}
                        ml={2}
                    />

                    {/* Centered Language Switcher */}
                    <Flex
                        position="absolute"
                        top="50%"
                        left="50%"
                        transform="translate(-50%, -50%)"
                    >
                        <LanguageSwitcher />
                    </Flex>

                    {/* Social Dropdown on right */}
                    <Box position="relative" ml="auto">
                        <IconButton
                            aria-label="Show social media"
                            icon={<FaShareAlt />}
                            variant="ghost"
                            fontSize="2xl"
                            color="#fff"
                            onClick={() => setShowSocial((prev) => !prev)}
                        />
                        <Collapse
                            in={showSocial}
                            animateOpacity
                            style={{
                                position: "absolute",
                                left: "50%",
                                top: "3.5rem",
                                transform: "translateX(-50%)",
                                minWidth: "48px"
                            }}
                        >
                            <VStack
                                spacing={4}
                                align="center"
                                paddingX={4}
                                paddingY={8}
                                m={0}
                                bg="#000"
                                borderRadius="30px"
                                border="2px solid #fff"
                            >
                                <Link href="https://instagram.com/tedx.iut" isExternal>
                                    <IconButton
                                        icon={<FaInstagram size={iconSize} />}
                                        aria-label="Instagram"
                                        variant="ghost"
                                        size="lg"
                                        color="#E1306C"
                                        bg="#fff"
                                        _hover={{
                                            bg: "#E1306C",
                                            color: "#fff",
                                            boxShadow: "0 2px 12px rgba(0,0,0,0.16)"
                                        }}
                                        isRound
                                        boxSize={iconBoxSize}
                                        transition="all 0.2s"
                                    />
                                </Link>
                                <Link href="https://t.me/tedxiut" isExternal>
                                    <IconButton
                                        icon={<BsLinkedin size={iconSize} />}
                                        aria-label="LinkedIn"
                                        variant="ghost"
                                        size="lg"
                                        color="#0077b5"
                                        bg="#fff"
                                        _hover={{
                                            bg: "#0077b5",
                                            color: "#fff",
                                            boxShadow: "0 2px 12px rgba(0,0,0,0.16)"
                                        }}
                                        isRound
                                        boxSize={iconBoxSize}
                                        transition="all 0.2s"
                                    />
                                </Link>
                                <Link href="https://linkedin.com/company/tedx-iut" isExternal>
                                    <IconButton
                                        icon={<FaTelegramPlane size={iconSize} />}
                                        aria-label="Telegram"
                                        variant="ghost"
                                        size="lg"
                                        color="#229ED9"
                                        bg="#fff"
                                        _hover={{
                                            bg: "#229ED9",
                                            color: "#fff",
                                            boxShadow: "0 2px 12px rgba(0,0,0,0.16)"
                                        }}
                                        isRound
                                        boxSize={iconBoxSize}
                                        transition="all 0.2s"
                                    />
                                </Link>
                            </VStack>
                        </Collapse>
                    </Box>
                </Flex>

                {/* Mobile Drawer */}
                <Drawer
                    isOpen={isDrawerOpen}
                    placement={i18n.language === "fa" ? "right" : "left"}
                    onClose={() => setIsDrawerOpen(false)}
                >
                    <DrawerOverlay />
                    <DrawerContent>
                        <DrawerCloseButton />
                        <DrawerBody bg="#f1f1f1">
                            <VStack spacing={6} mt={12}>
                                {NAV_ITEMS.map((item) =>
                                    item.type === "section" ? (
                                        <Button
                                            as="a"
                                            href={`#${item.section}`}
                                            key={item.key}
                                            w="100%"
                                            variant="ghost"
                                            fontSize={NAV_ITEM_FONT_SIZE}
                                            fontFamily={i18n.language === "fa" ? "'Rubik', sans-serif" : ""}
                                            dir={i18n.language === "fa" ? "rtl" : "ltr"}
                                            color="#000"
                                            fontWeight="normal"
                                            _hover={{
                                                color: "#CB0000",
                                                bg: "transparent",
                                            }}
                                            onClick={handleSmoothScroll(item.section)}
                                        >
                                            {t(item.label)}
                                        </Button>
                                    ) : (
                                        <Button
                                            as={RouterLink}
                                            to={item.to}
                                            key={item.key}
                                            w="100%"
                                            variant="ghost"
                                            fontSize={NAV_ITEM_FONT_SIZE}
                                            fontFamily={i18n.language === "fa" ? "'Rubik', sans-serif" : ""}
                                            dir={i18n.language === "fa" ? "rtl" : "ltr"}
                                            color={location.pathname === item.to ? "#CB0000" : "#000"}
                                            fontWeight={location.pathname === item.to ? "bold" : "normal"}
                                            _hover={{
                                                color: "#CB0000",
                                                bg: "transparent",
                                            }}
                                            onClick={() => setIsDrawerOpen(false)}
                                        >
                                            {t(item.label)}
                                        </Button>
                                    )
                                )}
                            </VStack>
                        </DrawerBody>
                    </DrawerContent>
                </Drawer>

                {/* Desktop Navbar */}
                <Flex
                    as="nav"
                    display={{ base: "none", lg: "flex" }}
                    bg="#000"
                    width="100%"
                    height="8rem"
                    px="1rem"
                    position="relative"
                    alignItems="center"
                    justifyContent="space-between"
                >
                    {/* Logo Left */}
                    <Flex
                        position="relative"
                        paddingX="1rem"
                    >
                        <Link as={RouterLink} to="/" cursor="pointer">
                            <Image src={tedxImg} width={{ lg: 300, xl: 410 }} borderRadius={0} />
                        </Link>
                    </Flex>

                    <HStack
                        position="relative"
                        paddingX="1rem"
                    >
                        {/* Nav Items on the right */}
                        <HStack spacing={4} flexDirection="row-reverse">
                            {NAV_ITEMS.map((item) => {
                                const isActive =
                                    (item.type === "route" && location.pathname === item.to) ||
                                    (item.type === "section" && location.pathname === "/" && window.location.hash === `#${item.section}`);
                                return item.type === "section" ? (
                                    <Button
                                        as="a"
                                        href={`#${item.section}`}
                                        key={item.key}
                                        variant="ghost"
                                        fontSize={NAV_ITEM_FONT_SIZE}
                                        fontFamily={i18n.language === "fa" ? "'Rubik', sans-serif" : ""}
                                        dir={i18n.language === "fa" ? "rtl" : "ltr"}
                                        color="#fff"
                                        fontWeight={isActive ? "bold" : "normal"}
                                        bg="transparent"
                                        _hover={{
                                            color: "#fff",
                                            bg: "linear-gradient(90deg, #CB0000 60%, #a80000 100%)",
                                            transform: "translateY(-6px)",
                                            transition: "color 0.25s cubic-bezier(.4,2,.6,1), transform 0.35s cubic-bezier(.4,2,.6,1), background 0.18s",
                                        }}
                                        transition="color 0.25s cubic-bezier(.4,2,.6,1), transform 0.35s cubic-bezier(.4,2,.6,1), background 0.18s"
                                        onClick={handleSmoothScroll(item.section)}
                                        padding="1.5rem"
                                    >
                                        {t(item.label)}
                                    </Button>
                                ) : (
                                    <Button
                                        as={RouterLink}
                                        to={item.to}
                                        key={item.key}
                                        variant="ghost"
                                        fontSize={NAV_ITEM_FONT_SIZE}
                                        fontFamily={i18n.language === "fa" ? "'Rubik', sans-serif" : ""}
                                        dir={i18n.language === "fa" ? "rtl" : "ltr"}
                                        color="gray.200"
                                        fontWeight={isActive ? "bold" : "normal"}
                                        bg={isActive ? "linear-gradient(90deg, #CB0000 60%, #a80000 100%)" : "transparent"}
                                        boxShadow={isActive ? "0 2px 12px 0 rgba(203,0,0,0.13)" : "none"}
                                        _hover={{
                                            color: isActive ? "#fff" : "#000",
                                            bg: isActive ? "linear-gradient(90deg, #CB0000 60%, #a80000 100%)" : "#fff",
                                            transform: "translateY(-6px)",
                                            transition: "color 0.25s cubic-bezier(.4,2,.6,1), transform 0.35s cubic-bezier(.4,2,.6,1), background 0.18s",
                                        }}
                                        transition="color 0.25s cubic-bezier(.4,2,.6,1), transform 0.35s cubic-bezier(.4,2,.6,1), background 0.18s"
                                        padding={"2rem"}
                                    >
                                        {t(item.label)}
                                    </Button>
                                );
                            })}
                        </HStack>

                        {/* LanguageSwitcher on the far left */}
                        <Flex alignItems="center" ml="2rem">
                            <LanguageSwitcher />
                        </Flex>
                    </HStack>
                </Flex>
            </Box>
        </>
    );
};

export default MyNavbar;
