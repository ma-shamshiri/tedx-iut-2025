import React from 'react';
import { Box, Flex, Text, Link, Icon, useColorModeValue } from '@chakra-ui/react';
import { FaInstagram, FaTwitter, FaLinkedin, FaYoutube } from 'react-icons/fa';
import { useTranslation } from 'react-i18next';



const SocialFooter: React.FC = () => {
  const { t, i18n } = useTranslation();
  const socialLinks = [
    {
      label: t('quizInstagram'),
      icon: FaInstagram,
      href: 'https://www.instagram.com/tedx.iut',
    },
    {
      label: t('quizTwitter'),
      icon: FaTwitter,
      href: 'https://twitter.com',
    },
    {
      label: t('quizLinkedin'),
      icon: FaLinkedin,
      href: 'https://linkedin.com',
    },
    {
      label: t('quizYoutube'),
      icon: FaYoutube,
      href: 'https://youtube.com',
    },
  ];
  

  return (
    <Box as="footer" w="100%" pt={8} pb={2} px={2}
      color="#fff" textAlign="center">
      <Text
        fontSize={{ base: '1.5rem', md: '2rem' }}
        fontFamily={i18n.language === 'fa' ? "'IRANSans', sans-serif" : ''}
        dir={i18n.language === 'fa' ? 'rtl' : 'ltr'}
        fontWeight="bold" mb={4}>
        {t('quizSocialFooter')}                        
      </Text>
      <Flex justify="center" align="center" gap={8} mb={4} flexWrap="wrap">
        {socialLinks.map((item, idx) => (
          <Link key={item.label} href={item.href} isExternal _hover={{ textDecoration: 'none' }}>
            <Flex direction="row" align="center" minW="80px">
            <Text
                fontSize="1.2rem"
                fontFamily={i18n.language === 'fa' ? "'IRANSans', sans-serif" : ''}
                dir={i18n.language === 'fa' ? 'rtl' : 'ltr'}
                color="#fff">{item.label}
              </Text>
              <Icon
                as={item.icon}
                boxSize={12}
                color="#e53e3e"
                borderRadius="10px"
                p={1}
                transition="all 0.2s"
                _hover={{ bg: '#222', color: '#f87171' }}
              />
              
            </Flex>
          </Link>
        ))}
      </Flex>
      <Text
        color="#888" fontSize="1.1rem"
        fontFamily={i18n.language === 'fa' ? "'IRANSans', sans-serif" : ''}
        dir={i18n.language === 'fa' ? 'rtl' : 'ltr'}
        mt={2}>
        {t('quizCopyright')}
      </Text>
    </Box>
  );
};

export default SocialFooter; 