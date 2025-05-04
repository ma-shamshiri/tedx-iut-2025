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
    Drawer,
    DrawerBody,
    DrawerOverlay,
    DrawerContent,
    DrawerCloseButton,
    Button,
    VStack,
    HStack,
} from "@chakra-ui/react";
import { Link as RouterLink, useLocation } from "react-router-dom";
import { tedxBlack, tedxWhite } from "../../assets";
import { FaBars } from "react-icons/fa";
import LanguageSwitcher from "../LanguageSwitcher";
import { useTranslation } from "react-i18next";

const NAV_ITEMS = [
    { key: "home", label: "home", to: "/" },
    { key: "team", label: "team", to: "/team" },
    { key: "gallery", label: "gallery", to: "/gallery" },
];

const NAV_ITEM_FONT_SIZE = "1.5rem";

const MyNavbar: React.FC = () => {
    const { t, i18n } = useTranslation();
    const { colorMode } = useColorMode();
    const tedxImg = colorMode === "dark" ? tedxWhite : tedxBlack;
    const [isDrawerOpen, setIsDrawerOpen] = useState(false);

    // For highlighting the active nav item
    const location = useLocation();

    return (
        <>
            {/* Mobile Top Logo */}
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
                    px="0.6rem"
                    justify="space-between"
                    alignItems="center"
                    position="relative"
                >
                    {/* Hamburger on right */}
                    <IconButton
                        aria-label="Open menu"
                        icon={<FaBars />}
                        variant="ghost"
                        fontSize="2xl"
                        onClick={() => setIsDrawerOpen(true)}
                        ml={2}
                    />
                    {/* Centered Language Switcher */}
                    <Flex position="absolute" top="50%" left="50%" transform="translate(-50%, -50%)">
                        <LanguageSwitcher />
                    </Flex>
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
                                {NAV_ITEMS.map((item) => (
                                    <Button
                                        as={RouterLink}
                                        to={item.to}
                                        key={item.key}
                                        w="100%"
                                        variant="ghost"
                                        fontSize={NAV_ITEM_FONT_SIZE}
                                        fontFamily={i18n.language === "fa" ? "'YekanBakh', sans-serif" : ""}
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
                                ))}
                            </VStack>
                        </DrawerBody>
                    </DrawerContent>
                </Drawer>

                {/* Desktop Navbar */}
                <Flex
                    as="nav"
                    display={{ base: "none", lg: "flex" }}
                    bg={useColorModeValue("#f1f1f1", "#000")}
                    width="100%"
                    height="8rem"
                    px="1rem"
                    position="relative"
                    alignItems="center"
                    justifyContent="flex-start"
                >
                    {/* Nav Items on the right */}
                    <HStack spacing={4} pl={6}>
                        {NAV_ITEMS.map((item) => {
                            const isActive = location.pathname === item.to;
                            return (
                                <Button
                                    as={RouterLink}
                                    to={item.to}
                                    key={item.key}
                                    variant="ghost"
                                    fontSize={NAV_ITEM_FONT_SIZE}
                                    fontFamily={i18n.language === "fa" ? "'YekanBakh', sans-serif" : ""}
                                    dir={i18n.language === "fa" ? "rtl" : "ltr"}
                                    color={isActive ? "#fff" : "#fff"}
                                    fontWeight={isActive ? "bold" : "normal"}
                                    bg={isActive ? "linear-gradient(90deg, #CB0000 60%, #a80000 100%)" : "transparent"}
                                    boxShadow={isActive ? "0 2px 12px 0 rgba(203,0,0,0.13)" : "none"}
                                    _hover={{
                                        color: "#fff",
                                        bg: "linear-gradient(90deg, #CB0000 60%, #a80000 100%)",
                                    }}
                                    padding={"2rem"}
                                    transition="all 0.18s"
                                >
                                    {t(item.label)}
                                </Button>
                            );
                        })}
                    </HStack>
                    {/* Logo Centered */}
                    <Flex position="absolute" top="50%" left="50%" transform="translate(-50%, -50%)">
                        <Link as={RouterLink} to="/" cursor="pointer">
                            <Image src={tedxImg} width={{lg:350, xl:450}} borderRadius={0} />
                        </Link>
                    </Flex>
                    {/* LanguageSwitcher on the far left */}
                    <Flex alignItems="center" ml="auto">
                        <LanguageSwitcher />
                    </Flex>
                </Flex>
            </Box>
        </>
    );
};

export default MyNavbar;
