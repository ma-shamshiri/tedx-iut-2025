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
  useColorModeValue,
} from '@chakra-ui/react';
import { FaFacebookF, FaTwitter, FaInstagram } from 'react-icons/fa';
import { BsLinkedin } from 'react-icons/bs';
import { useTranslation } from 'react-i18next';
import { Link as RouterLink } from "react-router-dom";

const FooterSection: React.FC = () => {
  const { t, i18n } = useTranslation();

  const linkFontSize = useBreakpointValue({ base: '1.3rem', lg: '1.6rem' });
  const brandFontSize = useBreakpointValue({ base: '1.3rem', lg: '1.5rem' });

  const iconSize = useBreakpointValue({ base: "2.5rem", lg: "1.8rem" });
  const iconBoxSize = useBreakpointValue({ base: "5rem", lg: "3.5rem" });


  return (
    <Box
      as="footer"
      position="relative"
      bg="#e62b1e"
      color="white"
      paddingY={{ base: '4rem', lg: "8rem" }}
      overflow="hidden"
    >
      <Container maxW="1300px" position="relative">
        <Stack
          direction={{ base: 'column', md: 'row' }}
          justify="space-between"
          align="center"
          spacing={{ base: '1.5rem', md: '2rem' }}
        >
          {/* Left: Brand / Logo */}
          <Text fontSize={brandFontSize}>
            TEDx 2025
          </Text>

          {/* Center: Navigation Links */}
          <Flex gap={{ base: '1rem', md: '2rem' }}>
            <Link
              as={RouterLink}
              to={"/"}
              fontSize={linkFontSize}
              _hover={{ textDecoration: 'none', color: 'gray.100' }}
            >
              {t("home")}
            </Link>
            <Link
              as={RouterLink}
              to={"/team"}
              fontSize={linkFontSize}
              _hover={{ textDecoration: 'none', color: 'gray.100' }}
            >
              {t("team")}
            </Link>
          </Flex>

          {/* Right: Social Icons */}
          <Stack direction="row" spacing="1rem">
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
                icon={<BsLinkedin size={iconSize} />}
                color={useColorModeValue("gray.200", "gray.200")}
                _hover={{
                  bg: useColorModeValue("gray.200", "gray.200"),
                  color: useColorModeValue("gray.700", "gray.700"),
                }}
                isRound
                boxSize={iconBoxSize}
              />
            </Box>
            <Box as="a" target="_blank" rel="noopener noreferrer">
              <IconButton
                aria-label="facebook"
                variant="ghost"
                size="xl"
                icon={<FaFacebookF size={iconSize} />}
                color={useColorModeValue("gray.800", "gray.200")}
                _hover={{
                  bg: useColorModeValue("gray.800", "gray.200"),
                  color: useColorModeValue("gray.100", "gray.700"),
                }}
                isRound
                boxSize={iconBoxSize}
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
                icon={<FaInstagram size={iconSize} />}
                color={useColorModeValue("#gray.800", "gray.200")}
                _hover={{
                  bg: useColorModeValue("gray.800", "gray.200"),
                  color: useColorModeValue("gray.100", "gray.700"),
                }}
                isRound
                boxSize={iconBoxSize}
              />
            </Box>
          </Stack>
        </Stack>

        {/* Divider & Disclaimer */}
        <Box
          borderTop="1px solid"
          borderColor="rgba(255,255,255,0.3)"
          marginTop="2rem"
          paddingTop="2rem"
          paddingX="3rem"
        >
          <Text
            textAlign="center"
            fontSize={linkFontSize} mb="0.5rem"
            fontWeight="bold"
            fontFamily={i18n.language === "fa" ? "'Rubik', sans-serif" : ""}
            dir={i18n.language === "fa" ? "rtl" : "ltr"}
          >
            {t("copyrightLineOne")}
          </Text>
          <Text
            textAlign="center"
            fontSize="1.3rem"
            color="gray.100"
            fontFamily={i18n.language === "fa" ? "'Rubik', sans-serif" : "Big Shoulders Display"}
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
