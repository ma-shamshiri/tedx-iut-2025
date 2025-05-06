import React from 'react';
import { Box, Flex, Heading, Text } from '@chakra-ui/react';
import { useTranslation } from 'react-i18next';

interface AboutCardProps {
    icon: React.ReactElement;
    title: string;
    subtitle: string;
    description: string;
    bg: string;
}

const AboutCard: React.FC<AboutCardProps> = ({ icon, title, subtitle, description, bg }) => {
    const { t, i18n } = useTranslation();

    return (
        <Box
            bg={bg}
            color="#fff"
            borderRadius="2xl"
            boxShadow="0 12px 36px 0 rgba(203,0,0,0.18), 0 2px 16px 0 rgba(0,0,0,0.10)"
            paddingX="2rem"
            paddingY="2.5rem"
            paddingBottom={{ base: "7.5rem", md: "6rem" }}
            position="relative"
            overflow="visible"
            width={{ base: "95%", md: "70%", lg: "initial" }}
            minH={{ md: "350px", lg: "390px" }}
            margin="auto"
            display="flex"
            flexDirection="column"
            alignItems="center"
            justifyContent="flex-start"
            transition="transform 0.4s, box-shadow 0.4s, background 0.4s, color 0.4s"
            _hover={{
                transform: "scale(1.06) translateY(-12px)",
                boxShadow: "0 24px 64px 0 rgba(203,0,0,0.22), 0 4px 24px 0 rgba(0,0,0,0.13)",
            }}
        >
            <Heading
                as="h3"
                fontSize="2rem"
                color="#fff"
                fontWeight="bold"
                textAlign="center"
                fontFamily={i18n.language === "fa" ? "'Rubik', sans-serif" : ""}
                dir={i18n.language === "fa" ? "rtl" : "ltr"}
                zIndex={2}
            >
                {t(title)}
            </Heading>
            <Text
                fontSize={{ base: "1.4rem", md: "1.7rem", lg: "1.6rem" }}
                fontWeight="bold"
                textAlign="justify"
                lineHeight="1.6"
                fontFamily={i18n.language === "fa" ? "'Rubik', sans-serif" : ""}
                dir={i18n.language === "fa" ? "rtl" : "ltr"}
                mb="1.8rem"
                zIndex={2}
            >
                {t(subtitle)}
            </Text>
            <Text
                fontSize={{ base: "1.4rem", md: "1.7rem", lg: "1.5rem" }}
                textAlign={i18n.language === "fa" ? "justify" : "left"}
                lineHeight="1.6"
                fontFamily={i18n.language === "fa" ? "'Rubik', sans-serif" : ""}
                dir={i18n.language === "fa" ? "rtl" : "ltr"}
                zIndex={2}
            >
                {t(description)}
            </Text>
            {/* Icon at the bottom center */}
            <Flex
                position="absolute"
                left="50%"
                bottom={{ base: "-3.5rem", md: "-4rem", lg: "-4rem" }}
                transform="translateX(-50%)"
                bg="#fff"
                borderRadius="full"
                boxShadow="0 0 0 10px rgba(203,0,0,0.10)"
                align="center"
                justify="center"
                w={{ base: "7rem", md: "8rem", lg: "8rem" }}
                h={{ base: "7rem", md: "8rem", lg: "8rem" }}
                zIndex={3}
            >
                {icon}
            </Flex>
            {/* Decorative red accent */}
            <Box
                position="absolute"
                bottom="-3.2rem"
                left="50%"
                transform="translateX(-50%)"
                w="6rem"
                h="2.5rem"
                bg="#CB0000"
                opacity={0.13}
                borderRadius="2xl"
                zIndex={2}
                filter="blur(2.5px)"
            />
        </Box>
    );
};

export default AboutCard;