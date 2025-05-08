import React from 'react';
import { Box, Flex, Text, Link, Icon, useColorModeValue } from '@chakra-ui/react';
import { FaInstagram, FaTwitter, FaLinkedin, FaYoutube } from 'react-icons/fa';
import i18n from 'i18next';

const socialLinks = [
  {
    label: 'اینستاگرام',
    icon: FaInstagram,
    href: 'https://instagram.com',
  },
  {
    label: 'توییتر',
    icon: FaTwitter,
    href: 'https://twitter.com',
  },
  {
    label: 'لینکدین',
    icon: FaLinkedin,
    href: 'https://linkedin.com',
  },
  {
    label: 'یوتیوب',
    icon: FaYoutube,
    href: 'https://youtube.com',
  },
];

const SocialFooter: React.FC = () => {
  return (
    <Box as="footer" w="100%" pt={8} pb={2} px={2}
      color="#fff" textAlign="center">
      <Text
        fontSize={{ base: '1.5rem', md: '2rem' }}
        fontFamily={i18n.language === 'fa' ? "'IRANSans', sans-serif" : ''}
        dir={i18n.language === 'fa' ? 'rtl' : 'ltr'}
        fontWeight="bold" mb={4}>
        ما در شبکه‌های اجتماعی
      </Text>
      <Flex justify="center" align="center" gap={8} mb={4} flexWrap="wrap">
        {socialLinks.map((item, idx) => (
          <Flex key={item.label} direction="row" align="center" minW="80px">
            <Link href={item.href} isExternal _hover={{ textDecoration: 'none' }}>
              <Icon
                as={item.icon}
                boxSize={12}
                color="#e53e3e"
                borderRadius="10px"
                p={1}
                transition="all 0.2s"
                _hover={{ bg: '#222', color: '#f87171' }}
                // mr={2}
              />
            </Link>
            <Text
              fontSize="1.2rem"
              fontFamily={i18n.language === 'fa' ? "'IRANSans', sans-serif" : ''}
              dir={i18n.language === 'fa' ? 'rtl' : 'ltr'}
              color="#fff">{item.label}
            </Text>
          </Flex>
        ))}
      </Flex>
      <Text
        color="#888" fontSize="1.1rem"
        fontFamily={i18n.language === 'fa' ? "'IRANSans', sans-serif" : ''}
        dir={i18n.language === 'fa' ? 'rtl' : 'ltr'}
        mt={2}>
        تمامی حقوق این سایت متعلق به رویداد تداِکس دانشگاه صنعتی اصفهان است.
      </Text>
    </Box>
  );
};

export default SocialFooter; 