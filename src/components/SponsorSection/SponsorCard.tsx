import React, { useRef } from "react";
import {
    Box,
    Image,
    Text,
    Flex,
    Link,
    Tooltip,
    Divider,
} from "@chakra-ui/react";
import { FaExternalLinkAlt, FaMedal } from "react-icons/fa";
import { MdBusiness } from "react-icons/md";
import { useTranslation } from "react-i18next";

export interface Sponsor {
    name: string;
    logo: string;
    description: string;
    url?: string;
    tier?: string;
}

const SponsorCard: React.FC<{ sponsor: Sponsor }> = ({ sponsor }) => {
    const { i18n, t } = useTranslation();

    const tierIcon = sponsor.tier ? <FaMedal color="#fff" size="1.5rem" /> : <MdBusiness color="#E51F1B" size="1.5rem" />;

    return (
        <Box
            bg="#fff"
            boxShadow="0 0 20px 1px gray"
            borderRadius="10px"
            p={{ base: "2.2rem 1.2rem", md: "2.7rem 2rem" }}
            display="flex"
            flexDirection="column"
            alignItems="center"
            justifyContent="flex-start"
            position="relative"
            overflow="hidden"
            minH={{ base: "370px", lg: "390px" }}
            maxW={{ base: "95vw", md: "440px", lg: "460px" }}
            w="100%"
            transition="transform 0.3s, box-shadow 0.3s, border 0.3s"
            _hover={{
                transform: "translateY(-10px) scale(1.04)",
            }}
        >
            {/* Tier Badge */}
            {sponsor.tier && (
                <Flex
                    position="absolute"
                    top="1.2rem"
                    left="1.2rem"
                    px="1.5rem"
                    py="0.8rem"
                    borderRadius="7px"
                    bg="#CB0000"
                    color="#fff"
                    fontWeight="bold"
                    zIndex={2}
                    fontFamily={i18n.language === "fa" ? "'Rubik', sans-serif" : ""}
                    justifyContent="center"
                    alignItems="center"
                    gap={4}
                >
                    {tierIcon}
                    <Text
                        fontFamily={i18n.language === "fa" ? "'Rubik', sans-serif" : ""}
                        dir={i18n.language === "fa" ? "rtl" : "ltr"}
                        fontSize="1.3rem"
                        fontWeight="bold"
                        textAlign="center"
                    >
                        {sponsor.tier}
                    </Text>
                </Flex>
            )}

            {/* Logo */}
            <Flex
                align="center"
                justify="center"
                mt="1.7rem"
                mb="1.7rem"
                minH="100px"
                w="100%"
            >
                <Image
                    src={sponsor.logo}
                    alt={sponsor.name}
                    maxH="160px"
                    objectFit="contain"
                    filter="drop-shadow(0 2px 12px #E51F1B22)"
                    transition="filter 0.2s"
                    loading="lazy"
                    mx="auto"
                />
            </Flex>

            {/* Divider for separation */}
            <Divider borderColor="#E51F1B33" mb="1.2rem" />

            {/* Name */}
            <Text
                fontSize="1.6rem"
                fontWeight="bold"
                mb="0.7rem"
                color="#CB0000"
                textAlign="center"
                letterSpacing="0.01em"
                fontFamily={i18n.language === "fa" ? "'Rubik', sans-serif" : ""}
                dir={i18n.language === "fa" ? "rtl" : "ltr"}
                lineHeight="1.2"
            >
                {t(sponsor.name)}
            </Text>

            {/* Description */}
            <Text
                fontSize="1.3rem"
                color="#222"
                textAlign="justify"
                mb={sponsor.url ? 3 : 0}
                lineHeight="1.7"
                fontFamily={i18n.language === "fa" ? "'Rubik', sans-serif" : ""}
                dir={i18n.language === "fa" ? "rtl" : "ltr"}
                px={2}
            >
                {t(sponsor.description)}
            </Text>

            {/* Website link */}
            {sponsor.url && (
                <Tooltip label={sponsor.url} fontSize="md" hasArrow>
                    <Link
                        href={sponsor.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        color="#E51F1B"
                        fontWeight="bold"
                        fontSize="1.2rem"
                        display="inline-flex"
                        alignItems="center"
                        mt={2}
                        _hover={{
                            color: "#000",
                            textDecoration: "underline",
                        }}
                        transition="color 0.2s"
                        fontFamily={i18n.language === "fa" ? "'Rubik', sans-serif" : ""}
                        dir={i18n.language === "fa" ? "rtl" : "ltr"}
                    >
                        {t("sponsors.visit", "مشاهده وب‌سایت")}
                        <Box as={FaExternalLinkAlt} ml={2} fontSize="1rem" />
                    </Link>
                </Tooltip>
            )}
        </Box>
    );
};

export default SponsorCard;