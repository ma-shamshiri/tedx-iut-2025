import React from 'react';
import {
  Box,
  Container,
  Stack,
  Text,
  Link,
  IconButton,
  useBreakpointValue,
  Flex,
  Divider,
  VStack,
  Image,
} from '@chakra-ui/react';
import { FaFacebookF, FaInstagram } from 'react-icons/fa';
import { BsLinkedin } from 'react-icons/bs';
import { useTranslation } from 'react-i18next';
import { Link as RouterLink, useLocation } from "react-router-dom";
import { tedxWhite } from '../../assets';

const FooterSection: React.FC = () => {
  const { t, i18n } = useTranslation();
  const location = useLocation();

  const linkFontSize = useBreakpointValue({ base: '1.3rem', lg: '1.5rem' });
  const brandFontSize = useBreakpointValue({ base: '1.5rem', lg: '1.5rem' });

  const instagramIconSize = useBreakpointValue({ base: "2.4rem", lg: "2.4rem" });
  const instagramIconBoxSize = useBreakpointValue({ base: "3.6rem", lg: "3.6rem" });

  const linkedinIconSize = useBreakpointValue({ base: "2rem", lg: "2rem" });
  const linkedinIconBoxSize = useBreakpointValue({ base: "3.5rem", lg: "3.5rem" });

  const facebookIconSize = useBreakpointValue({ base: "2.1rem", lg: "2.1rem" });
  const facebookIconBoxSize = useBreakpointValue({ base: "3.2rem", lg: "3.2rem" });


  const handleSmoothScroll = (id: string) => (e: React.MouseEvent) => {
    e.preventDefault();
    if (location.pathname === "/") {
      const el = document.getElementById(id);
      if (el) {
        el.scrollIntoView({ behavior: "smooth" });
      }
    } else {
      window.location.href = `/#${id}`;
    }
  };

  return (
    <Box
      as="footer"
      position="relative"
      bg="#000"
      color="white"
      py={{ base: '3rem', lg: "4rem" }}
      px={{ base: '1.5rem', lg: "2rem" }}
      overflow="hidden"
      fontFamily={i18n.language === "fa" ? "'Rubik', sans-serif" : ""}
      dir={i18n.language === "fa" ? "rtl" : "ltr"}
    >
      <Container
        maxW="1300px"
        position="relative"
        zIndex={1}
      >
        <Flex
          direction={{ base: 'column', lg: 'row' }}
          justify="space-between"
          align={{ base: "flex-start", lg: "center" }}
          gap={{ base: 10, lg: 0 }}
        >
          {/* Brand / Logo & Description */}
          <Box
            display={{ base: "none", lg: "block" }}
            mb={{ base: 6, lg: 0 }}
            flex="1"
          >
            <Text
              color="#fff"
              fontSize={brandFontSize}
              fontWeight="extrabold"
              fontFamily={i18n.language === "fa" ? "'Rubik', sans-serif" : ""}
              dir={i18n.language === "fa" ? "rtl" : "ltr"}
              mb={4}
            >
              {t("tedxUniversityOfIsfahan")}
            </Text>
            <Text
              fontSize={{ base: "1.1rem", lg: "1.4rem" }}
              color="gray.100"
              maxW="340px"
              fontFamily={i18n.language === "fa" ? "'YekanBakh', sans-serif" : ""}
              dir={i18n.language === "fa" ? "rtl" : "ltr"}
            >
              {t("footerDescription2")}
            </Text>
          </Box>

          {/* Navigation Links */}
          <VStack
            flex="3"
            justify="center"
            mb={{ base: 6, lg: 0 }}
            width={{ base: "100%", lg: "initial" }}
          >
            <Image
              src={tedxWhite}
              alt="لوگو تداکس دانشگاه صنعتی اصفهان"
              width={{ base: "300px", lg: "350px" }}
              borderRadius="lg"
              mb={8}
            />
            <Stack
              direction="row"
              align="center"
              spacing={{ base: 7, lg: 7 }}
            >
              <Link
                href="#ticket-section"
                onClick={handleSmoothScroll("ticket-section")}
                fontSize={linkFontSize}
                color="gray.200"
                _hover={{
                  textDecoration: 'none',
                  color: "#fff",
                  transform: "translateY(-6px)",
                  transition: "color 0.25s cubic-bezier(.4,2,.6,1), transform 0.35s cubic-bezier(.4,2,.6,1)",
                }}
                transition="color 0.25s cubic-bezier(.4,2,.6,1), transform 0.35s cubic-bezier(.4,2,.6,1)"
                fontFamily={i18n.language === "fa" ? "'Rubik', sans-serif" : ""}
                dir={i18n.language === "fa" ? "rtl" : "ltr"}
              >
                {t("home")}
              </Link>
              <Link
                href="#about-section"
                onClick={handleSmoothScroll("about-section")}
                fontSize={linkFontSize}
                color="gray.200"
                _hover={{
                  textDecoration: 'none',
                  color: "#fff",
                  transform: "translateY(-6px)",
                  transition: "color 0.25s cubic-bezier(.4,2,.6,1), transform 0.35s cubic-bezier(.4,2,.6,1)",
                }}
                transition="color 0.25s cubic-bezier(.4,2,.6,1), transform 0.35s cubic-bezier(.4,2,.6,1)"
                fontFamily={i18n.language === "fa" ? "'Rubik', sans-serif" : ""}
                dir={i18n.language === "fa" ? "rtl" : "ltr"}
              >
                {t("aboutUs")}
              </Link>
              <Link
                as={RouterLink}
                to="/team"
                fontSize={linkFontSize}
                color="gray.200"
                _hover={{
                  textDecoration: 'none',
                  color: "#fff",
                  transform: "translateY(-6px)",
                  transition: "color 0.25s cubic-bezier(.4,2,.6,1), transform 0.35s cubic-bezier(.4,2,.6,1)",
                }}
                transition="color 0.25s cubic-bezier(.4,2,.6,1), transform 0.35s cubic-bezier(.4,2,.6,1)"
                fontFamily={i18n.language === "fa" ? "'Rubik', sans-serif" : ""}
                dir={i18n.language === "fa" ? "rtl" : "ltr"}
              >
                {t("team")}
              </Link>
              <Link
                href="#contact-section"
                onClick={handleSmoothScroll("contact-section")}
                fontSize={linkFontSize}
                color="gray.200"
                _hover={{
                  textDecoration: 'none',
                  color: "#fff",
                  transform: "translateY(-6px)",
                  transition: "color 0.25s cubic-bezier(.4,2,.6,1), transform 0.35s cubic-bezier(.4,2,.6,1)",
                }}
                transition="color 0.25s cubic-bezier(.4,2,.6,1), transform 0.35s cubic-bezier(.4,2,.6,1)"
                fontFamily={i18n.language === "fa" ? "'Rubik', sans-serif" : ""}
                dir={i18n.language === "fa" ? "rtl" : "ltr"}
              >
                {t("contactUs")}
              </Link>
            </Stack>
          </VStack>

          {/* Social Icons & Contact */}
          <Stack
            direction="column"
            alignItems={{ base: "center", lg: "left" }}
            spacing={3}
            justifyContent="center"
            width={{ base: "100%", lg: "initial" }}
          // flex="1"
          >
            <Stack direction="row" spacing="0.7rem" justify="center">
              <Box
                as="a"
                href={"https://www.linkedin.com/company/tedx-iut/"}
                target="_blank"
                rel="noopener noreferrer"
              >
                <IconButton
                  aria-label="linkedin"
                  variant="ghost"
                  size="xl"
                  icon={<BsLinkedin size={linkedinIconSize} />}
                  color="#fff"
                  _hover={{
                    bg: "#fff",
                    color: "#000",
                  }}
                  isRound
                  boxSize={linkedinIconBoxSize}
                />
              </Box>
              <Box as="a" target="_blank" rel="noopener noreferrer">
                <IconButton
                  aria-label="facebook"
                  variant="ghost"
                  size="xl"
                  icon={<FaFacebookF size={facebookIconSize} />}
                  color="#fff"
                  _hover={{
                    bg: "#fff",
                    color: "#000",
                  }}
                  isRound
                  boxSize={facebookIconBoxSize}
                />
              </Box>
              <Box
                as="a"
                href={"https://www.instagram.com/tedx.iut?igsh=MW1yeDJhMDMxZ3V5Zg=="}
                target="_blank"
                rel="noopener noreferrer"
              >
                <IconButton
                  aria-label="instagram"
                  variant="ghost"
                  size="xl"
                  icon={<FaInstagram size={instagramIconSize} />}
                  color="#fff"
                  _hover={{
                    bg: "#fff",
                    color: "#000",
                  }}
                  isRound
                  boxSize={instagramIconBoxSize}
                />
              </Box>
            </Stack>
            <Text
              fontSize={{ base: "1.1rem", lg: "1.3rem" }}
              color="gray.100"
              mt={2}
              fontFamily={i18n.language === "fa" ? "'YekanBakh', sans-serif" : ""}
              dir={i18n.language === "fa" ? "rtl" : "ltr"}
            >
              {t("footerDescription1")}
            </Text>
          </Stack>
        </Flex>

        <Divider my="2.5rem" borderColor="rgba(255,255,255,0.25)" />

        {/* Disclaimer & Copyright */}
        <Box px="3rem">
          {/* <Text
            textAlign="center"
            fontSize={{ base: "1rem", lg: "1.15rem" }}
            color="gray.200"
            mb={2}
            fontFamily={i18n.language === "fa" ? "'YekanBakh', sans-serif" : ""}
            dir={i18n.language === "fa" ? "rtl" : "ltr"}
          >
            {t("copyrightLineOne")}
          </Text> */}
          <Text
            textAlign="center"
            fontSize={{ base: "1rem", lg: "1.1rem" }}
            color="gray.400"
            fontFamily={i18n.language === "fa" ? "'YekanBakh', sans-serif" : ""}
            dir={i18n.language === "fa" ? "rtl" : "ltr"}
          >
            {t("copyrightLineTwo")}
          </Text>
        </Box>
      </Container>
    </Box>
  );
};

export default FooterSection;
