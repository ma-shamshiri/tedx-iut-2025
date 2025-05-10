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
import { FaInstagram, FaTelegramPlane } from 'react-icons/fa';
import { BsLinkedin } from 'react-icons/bs';
import { useTranslation } from 'react-i18next';
import { Link as RouterLink, useLocation } from "react-router-dom";
import { tedxWhite } from '../../assets';

// --- Nav Item Types ---
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
type FooterNavItem = RouteNavItem | SectionNavItem;

// --- Nav Items List ---
const FOOTER_NAV_ITEMS: FooterNavItem[] = [
  { key: "home", label: "home", type: "section", section: "ticket-section" },
  // { key: "aboutUs", label: "aboutUs", type: "section", section: "about-section" },
  { key: "team", label: "team", type: "route", to: "/team" },
  { key: "gallery", label: "gallery", type: "route", to: "/gallery" },
  { key: "sponsors", label: "sponsors", type: "route", to: "/sponsors" },
  // { key: "contactUs", label: "contactUs", type: "section", section: "contact-section" },
];

const FooterSection: React.FC = () => {
  const { t, i18n } = useTranslation();
  const location = useLocation();

  const linkFontSize = useBreakpointValue({ base: '1.3rem', lg: '1.5rem' });
  const brandFontSize = useBreakpointValue({ base: '1.5rem', lg: '1.5rem' });

  const instagramIconSize = useBreakpointValue({ base: "2.4rem", lg: "2.4rem" });
  const instagramIconBoxSize = useBreakpointValue({ base: "3.6rem", lg: "3.6rem" });

  const linkedinIconSize = useBreakpointValue({ base: "2rem", lg: "2rem" });
  const linkedinIconBoxSize = useBreakpointValue({ base: "3.5rem", lg: "3.5rem" });

  const telegramIconSize = useBreakpointValue({ base: "2.2rem", lg: "2.2rem" });
  const telegramIconBoxSize = useBreakpointValue({ base: "3.3rem", lg: "3.3rem" });

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
              fontFamily={i18n.language === "fa" ? "'IRANSans', sans-serif" : ""}
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
            width={{ base: "80%", md: "100%", lg: "initial" }}
            margin="auto"
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
              justifyContent="center"
              spacing={{ base: 7, lg: 7 }}
              flexWrap="wrap"
              width={{ base: "80%", md: "initial", lg: "initial" }}
            >
              {FOOTER_NAV_ITEMS.map((item) =>
                item.type === "section" ? (
                  <Link
                    key={item.key}
                    href={`#${item.section}`}
                    onClick={handleSmoothScroll(item.section)}
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
                    {t(item.label)}
                  </Link>
                ) : (
                  <Link
                    as={RouterLink}
                    to={item.to}
                    key={item.key}
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
                    {t(item.label)}
                  </Link>
                )
              )}
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
              <Box
                as="a"
                href={"https://t.me/TEDxIUTch?fbclid=PAQ0xDSwKKRqxleHRuA2FlbQIxMQABp-MCbNpdYb3uTUKlCJxBBtU10ROf4gYKw8ak2Z5om1RP_FyD6QNdJlsw13AW_aem_mXhDWOfSKmvkd7IYMzeNMg"}
                target="_blank"
                rel="noopener noreferrer"
              >
                <IconButton
                  aria-label="telegram"
                  variant="ghost"
                  size="xl"
                  icon={<FaTelegramPlane size={telegramIconSize} />}
                  color="#fff"
                  _hover={{
                    bg: "#fff",
                    color: "#000",
                  }}
                  isRound
                  boxSize={telegramIconBoxSize}
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
              fontFamily={i18n.language === "fa" ? "'IRANSans', sans-serif" : ""}
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
            fontFamily={i18n.language === "fa" ? "'IRANSans', sans-serif" : ""}
            dir={i18n.language === "fa" ? "rtl" : "ltr"}
          >
            {t("copyrightLineOne")}
          </Text> */}
          <Text
            textAlign="center"
            fontSize={{ base: "1rem", lg: "1.1rem" }}
            color="gray.400"
            fontFamily={i18n.language === "fa" ? "'IRANSans', sans-serif" : ""}
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
