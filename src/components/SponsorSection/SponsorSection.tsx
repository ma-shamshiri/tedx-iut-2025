import React, { useRef } from "react";
import {
    Box,
    Container,
    Heading,
    SimpleGrid,
    Center,
    Text,
} from "@chakra-ui/react";
import { useTranslation } from "react-i18next";
import { sponsors } from "./data";
import SponsorCard from "./SponsorCard";

const SponsorSection: React.FC = () => {
    const { t, i18n } = useTranslation();

    return (
        <Box
            as="section"
            position="relative"
            bg="#fff"
            width="100%"
            minH="80vh"
            py={{ base: "5rem", md: "7rem" }}
            overflow="hidden"
        >
            <Container maxW="container.xl" position="relative" zIndex={1}>
                <Center mb="2.5rem" flexDir="column">
                    <Heading
                        as="h2"
                        size="2xl"
                        textAlign="center"
                        color="#000"
                        fontFamily={i18n.language === "fa" ? "'Rubik', sans-serif" : "'Oswald', sans-serif"}
                        dir={i18n.language === "fa" ? "rtl" : "ltr"}
                        letterSpacing="0.01em"
                        fontWeight="extrabold"
                        textShadow="0 4px 24px #EB242344"
                        mb={{ base: 8, lg: 8 }}
                    >
                        {t("sponsorSectionTitle")}
                    </Heading>
                    <Text
                        textAlign="center"
                        color="gray.800"
                        fontSize={{ base: "1.5rem", lg: "2rem" }}
                        fontFamily={i18n.language === "fa" ? "'Rubik', sans-serif" : ""}
                        dir={i18n.language === "fa" ? "rtl" : "ltr"}
                        textShadow="0 4px 24px #EB242344"
                        mb={{ base: 8, lg: 16 }}
                        maxWidth="80%"
                    >
                        {t("sponsorSectionSubTitle")}
                    </Text>
                </Center>

                <SimpleGrid
                    columns={{ base: 1, sm: 2, md: 2, lg: 3 }}
                    spacing={{ base: "4rem", lg: "4rem" }}
                    paddingX="0.5rem"
                >
                    {sponsors.map((sponsor) => (
                        <SponsorCard
                            key={sponsor.id}
                            sponsor={sponsor}
                        />
                    ))}
                </SimpleGrid>

                {/* <Box mt="4rem" textAlign="center">
                    <Text color="gray.300" fontSize="lg" mb="1.5rem" fontFamily={fontFamily} dir={dir}>
                        {t("sponsors.wantToSponsor", "مایل به حمایت از رویداد هستید؟")}
                    </Text>
                    <Link
                        href="mailto:info@tedxiut.com"
                        color="#EB2423"
                        fontWeight="bold"
                        fontSize="xl"
                        _hover={{
                            color: "#fff",
                            bg: "#EB2423",
                            px: 4,
                            borderRadius: "xl",
                            transition: "all 0.2s",
                        }}
                        transition="all 0.2s"
                        fontFamily={fontFamily}
                        dir={dir}
                    >
                        info@tedxiut.com
                    </Link>
                </Box> */}
            </Container>
        </Box>
    );
};

export default SponsorSection;
