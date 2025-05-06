import React from 'react';
import {
  Box,
  Text,
  Button,
  Container,
  useDisclosure,
  Flex,
  Image
} from '@chakra-ui/react';
import { IUT_logo } from '../../assets';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import InstagramGallery from '../InstagramGallery';
import QuizModal from '../QuizModal';

const MotionBox = motion(Box);

const HeroSection: React.FC = () => {
  const { t, i18n } = useTranslation();

  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <Box
      position="relative"
      width="100%"
      minH="100vh"
      overflow="hidden"
    >
      <Box
        bgGradient="radial(circle at center, rgba(229,62,62,1) 0%, rgba(229,62,62,0.2) 40%, rgba(0,0,0,1) 100%)"
        minH="100vh"
        display="flex"
        alignItems="center"
        justifyContent="center"
        position="relative"
        zIndex={1}
      >
        <Container maxW="container.xl" textAlign="center">
          <Flex
            flexDirection="column"
            paddingTop="8rem"
            paddingBottom="8rem"
          >
            <Text
              fontSize={{ base: "2.1rem", md: "2.6rem", lg: "2.8rem", xl: "3.1rem" }}
              color="gold"
              textAlign="center"
              fontFamily={i18n.language === "fa" ? "'Rubik', sans-serif" : ""}
              dir={i18n.language === "fa" ? "rtl" : "ltr"}
              paddingBottom="1.5rem"
            >
              {t("quizModalButtonTitle")}
            </Text>
            <Text
              fontSize={{ base: "1.7rem", md: "2rem", lg: "2.2rem", xl: "2.2rem" }}
              color="#fff"
              textAlign="center"
              fontFamily={i18n.language === "fa" ? "'Rubik', sans-serif" : ""}
              dir={i18n.language === "fa" ? "rtl" : "ltr"}
            >
              {t("quizModalButtonSubTitle")}
            </Text>
            <motion.div
              whileHover={{ scale: 1.1, rotate: 7 }}
              whileTap={{ scale: 1, rotate: 0 }}
              transition={{
                type: "spring",
                stiffness: 300,
                damping: 5,
              }}
            >
              <Button
                bg="#CB0000"
                fontSize={{ base: "2rem", md: "2.2rem", lg: "2.5rem", xl: "2.5rem" }}
                padding={{ base: "2.8rem", md: "2.8rem", lg: "3.7rem", xl: "3.8rem" }}
                marginTop="2rem"
                borderRadius="10px"
                fontFamily={i18n.language === "fa" ? "'Rubik', sans-serif" : ""}
                dir={i18n.language === "fa" ? "rtl" : "ltr"}
                onClick={onOpen}
                _hover={{
                  bg: "gold",
                  color: "#000"
                }}
              >
                {t("startTheTest")}
              </Button>
            </motion.div>
          </Flex>
          <QuizModal isOpen={isOpen} onClose={onClose} />
          {/* <PosterSection /> */}
          <Box
            position="relative"
            width="100%"
            // height="30rem"
            display="flex"
            flexDirection="column"
            justifyContent="center"
            alignItems="center"
            paddingBottom={{ lg: "8rem" }}
            overflow="hidden"
          >
            <Text
              fontSize={{ base: "3.2rem", md: "5rem", lg: "10rem" }}
              fontWeight="bold"
              fontFamily="'Rubik', sans-serif"
              dir="rtl"
              mb={4}
            >
              ورای یک جامعه عادی
            </Text>
            <Text
              fontSize={{ base: "1.5rem", md: "2.5rem", lg: "3rem" }}
              fontWeight="bold"
              fontFamily="'Rubik', sans-serif"
              dir="rtl"
              mb={8}
            >
              تداکس دانشگاه صنعتی اصفهان
            </Text>
            <Image
              src={IUT_logo}
              alt='IUT Logo'
              objectFit="cover"
              width={{ base: "70px", md: "90px", lg: "120px" }}
            />
          </Box>
        </Container>
      </Box>

      <MotionBox
        position="absolute"
        top="20%"
        left="10%"
        width="120px"
        height="120px"
        bg="red.400"
        borderRadius="50%"
        opacity={0.3}
        zIndex={0}
        animate={{
          y: [0, -30, 0],
          x: [0, 30, 0],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />

      <MotionBox
        position="absolute"
        bottom="15%"
        right="8%"
        width="80px"
        height="80px"
        bg="red.600"
        borderRadius="30% 70% 70% 30%"
        opacity={0.25}
        zIndex={0}
        animate={{
          y: [0, 20, 0],
          x: [0, -20, 0],
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />

      <MotionBox
        position="absolute"
        top="35%"
        right="40%"
        width="0"
        height="0"
        borderStyle="solid"
        borderWidth="0 60px 100px 60px"
        borderColor="transparent transparent red.500 transparent"
        opacity={0.2}
        zIndex={0}
        animate={{
          rotate: [0, 15, 0],
        }}
        transition={{
          duration: 7,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />
    </Box>
  );
};

export default HeroSection;
