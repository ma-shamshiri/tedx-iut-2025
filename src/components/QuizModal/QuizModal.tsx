import React, { useState, useEffect } from 'react';
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
  Box,
  Text,
  useToast,
  SimpleGrid,
  Flex,
  ModalCloseButton,
  Image,
  Skeleton,
} from '@chakra-ui/react';
import { questions, personalityElements, PersonalityElement, Option } from './data';
import { useTranslation } from 'react-i18next';
import { BsStars } from 'react-icons/bs';
import SubmitAnimation from '../Animations/SubmitAnimation';

interface QuizModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const QuizModal: React.FC<QuizModalProps> = ({ isOpen, onClose }) => {
  const { t, i18n } = useTranslation();
  const toast = useToast();

  const [showAnimation, setShowAnimation] = useState(false);

  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<(Option | null)[]>(Array(questions.length).fill(null));
  const [hasError, setHasError] = useState(false);
  const [showResult, setShowResult] = useState(false);
  const [showResetSlide, setShowResetSlide] = useState(false);
  const [email, setEmail] = useState('');
  const [resultElement, setResultElement] = useState<PersonalityElement | null>(null);

  const handleReset = () => {
    setCurrentQuestion(0);
    setAnswers(Array(questions.length).fill(null));
    setShowResult(false);
    setShowResetSlide(false);
    setEmail('');
    setResultElement(null);
  };

  useEffect(() => {
    if (isOpen) {
      handleReset();
    }
  }, [isOpen]);

  const handleOptionSelect = (option: Option) => {
    const updatedAnswers = [...answers];
    updatedAnswers[currentQuestion] = option;
    setAnswers(updatedAnswers);
    setHasError(false);
  };

  const handleNext = () => {
    if (!answers[currentQuestion]) {
      setHasError(true);
      toast({
        title: t('لطفاً یک گزینه را انتخاب کنید'),
        status: 'error',
        duration: 2500,
        containerStyle: {
          padding: '1rem',
          fontSize: '1.5rem',
          fontFamily: i18n.language === 'fa' ? "'YekanBakh', sans-serif" : '',
          direction: i18n.language === 'fa' ? 'rtl' : 'ltr',
        } as any,
      });
      return;
    }
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      const summedArray = answers.reduce((accumulator, currentItem) => {
        currentItem?.type.forEach((value, index) => {
          accumulator[index] += value;
        });
        return accumulator;
      }, Array(personalityElements.length).fill(0)); 
      
      const maxIndex = summedArray.reduce((maxIdx, currentValue, currentIndex, arr) => {
        return currentValue > arr[maxIdx] ? currentIndex : maxIdx;
      }, 0);

      setResultElement(personalityElements[maxIndex]);
      setShowResult(true);
      setShowAnimation(true);
      setTimeout(() => {
        setShowAnimation(false);
      }, 1000);
    }
  };

  const handlePrevious = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(currentQuestion - 1);
    }
  };

  const handleSendEmail = () => {
    toast({
      title: t('ایمیل ارسال شد!'),
      status: 'success',
      duration: 3000,
      isClosable: true,
      containerStyle: { fontSize: '1.5rem' },
    });
    setShowResetSlide(true);
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose} isCentered size="6xl">
      <ModalOverlay />
      <ModalContent
        bg="gray.800"
        borderRadius="10px"
        padding={{ base: '0.5rem', lg: '2rem' }}
        width={{ base: '90%', lg: '' }}
      >
        <ModalCloseButton size="lg" p="1rem" fontSize="1.5rem" />
        <ModalHeader
          fontSize={{ lg: '2.3rem' }}
          color="#fff"
          fontFamily={i18n.language === 'fa' ? "'YekanBakh', sans-serif" : ''}
          dir={i18n.language === 'fa' ? 'rtl' : 'ltr'}
          marginTop="3rem"
        >
          <Flex align="center" gap="1rem">
            <BsStars color="#fff" />
            {t('quizModalButtonTitle')}
          </Flex>
        </ModalHeader>
        <ModalBody>
          {/* Quiz Question Slide */}
          {!showResult && !showResetSlide && (
            <Box>
              <Box
                p={6}
                borderWidth={hasError ? '2px' : '1px'}
                borderColor={hasError ? 'red.500' : 'gray.200'}
                borderRadius="md"
              >
                <Text
                  mb={6}
                  color="gold"
                  fontSize={{ base: '1.5rem', lg: '1.7rem' }}
                  fontFamily={i18n.language === 'fa' ? "'YekanBakh', sans-serif" : ''}
                  dir={i18n.language === 'fa' ? 'rtl' : 'ltr'}
                >
                  {t(questions[currentQuestion].text)}
                </Text>
                <SimpleGrid columns={{ base: 1, lg: 2 }} spacing={4}>
                  {questions[currentQuestion].options.map((option, index) => (
                    <Button
                      key={index}
                      onClick={() => handleOptionSelect(option)}
                      bg={answers[currentQuestion]?.text === option.text ? 'dodgerblue' : 'gray.100'}
                      color={answers[currentQuestion]?.text === option.text ? 'white' : 'black'}
                      variant={answers[currentQuestion]?.text === option.text ? 'solid' : 'outline'}
                      padding="2rem"
                      fontSize={{ base: '1.2rem', lg: '1.35rem' }}
                      fontFamily={i18n.language === 'fa' ? "'YekanBakh', sans-serif" : ''}
                      dir={i18n.language === 'fa' ? 'rtl' : 'ltr'}
                      whiteSpace="normal"
                      wordBreak="break-word"
                      textAlign="center"
                      _hover={{ transform: 'scale(1.03)' }}
                      transition="color 0.2s ease, background-color 0.2s ease, transform 0.1s ease"
                    >
                      {t(option.text)}
                    </Button>
                  ))}
                </SimpleGrid>
              </Box>
            </Box>
          )}

          {/* Result Slide */}
          {showResult && !showResetSlide && (
            <Box textAlign="center" p={6}>
              <Text
                color="gold"
                mb={4}
                fontSize={{
                  base: i18n.language === "fa" ? "1.5rem" : "1.7rem",
                  md: i18n.language === "fa" ? "1.5rem" : "2rem",
                  lg: i18n.language === "fa" ? "1.8rem" : "1.9rem",
                  xl: i18n.language === "fa" ? "1.8rem" : "2.2rem"
                }}
                fontWeight="bold"
                fontFamily={i18n.language === 'fa' ? "'YekanBakh', sans-serif" : ''}
                dir={i18n.language === 'fa' ? 'rtl' : 'ltr'}
              >
                {t('yourResult')} : {t(resultElement?.name || '')}
              </Text>
              <Text
                fontSize={{
                  base: i18n.language === "fa" ? "1.2rem" : "1.4rem",
                  md: i18n.language === "fa" ? "1.2rem" : "1.7rem",
                  lg: i18n.language === "fa" ? "1.5rem" : "1.6rem",
                  xl: i18n.language === "fa" ? "1.5rem" : "1.5rem"
                }}
                mb={6}
                fontFamily={i18n.language === 'fa' ? "'YekanBakh', sans-serif" : ''}
                dir={i18n.language === 'fa' ? 'rtl' : 'ltr'}
              >
                {t(resultElement?.description || '')}
              </Text>

              <Flex justifyContent="center" alignItems="center" mb={6}>
                <Image
                  src={resultElement?.image}
                  alt={resultElement?.name}
                  width={{
                    base: "80%", 
                    md: "60%",   
                    lg: "50%",   
                    xl: "40%"    
                  }}
                  height="auto" // Maintain aspect ratio
                  objectFit="cover"
                  borderRadius="10px"
                />
              </Flex>

              {/* Animation */}
              {showAnimation && <SubmitAnimation />}
            </Box>
          )}

          {/* Reset Slide */}
          {showResetSlide && (
            <Box textAlign="center" p={6}>
              <Text
                fontSize="2xl"
                mb={6}
                fontFamily={i18n.language === 'fa' ? "'YekanBakh', sans-serif" : ''}
                dir={i18n.language === 'fa' ? 'rtl' : 'ltr'}
              >
                {t('theTestIsCompleted')}
              </Text>
              <Button
                onClick={handleReset}
                fontSize="xl"
                px={10}
                py={6}
                fontFamily={i18n.language === 'fa' ? "'YekanBakh', sans-serif" : ''}
                dir={i18n.language === 'fa' ? 'rtl' : 'ltr'}
              >
                {t('tryAgain')}
              </Button>
            </Box>
          )}
        </ModalBody>
        <ModalFooter flexDirection="column" alignItems="center" pt="1rem">
          {/* Navigation buttons (only during quiz) */}
          {!showResult && !showResetSlide && (
            <Flex w="100%" justifyContent="space-between" mb={4}>
              <Button
                onClick={handlePrevious}
                isDisabled={currentQuestion === 0}
                fontSize={{
                  base: i18n.language === "fa" ? "1.5rem" : "1.7rem",
                  md: i18n.language === "fa" ? "1.5rem" : "1.8rem",
                  lg: i18n.language === "fa" ? "1.5rem" : "1.5rem",
                  xl: i18n.language === "fa" ? "1.8rem" : "1.8rem"
                }}
                fontFamily={i18n.language === 'fa' ? "'YekanBakh', sans-serif" : ''}
                dir={i18n.language === 'fa' ? 'rtl' : 'ltr'}
                paddingX={{ base: "2rem", md: "2rem", lg: "3rem" }}
                paddingY={{ base: "2rem", md: "2rem", lg: "2rem" }}
                _hover={{
                  bg: "#cb0000",
                }}
              >
                {t('previous')}
              </Button>
              <Button
                onClick={handleNext}
                fontSize={{
                  base: i18n.language === "fa" ? "1.5rem" : "1.7rem",
                  md: i18n.language === "fa" ? "1.5rem" : "1.8rem",
                  lg: i18n.language === "fa" ? "1.5rem" : "1.5rem",
                  xl: i18n.language === "fa" ? "1.8rem" : "1.8rem"
                }}
                minWidth="10rem"
                fontFamily={i18n.language === 'fa' ? "'YekanBakh', sans-serif" : ''}
                dir={i18n.language === 'fa' ? 'rtl' : 'ltr'}
                paddingX={{ base: "2rem", md: "2rem", lg: "3rem" }}
                paddingY={{ base: "2rem", md: "2rem", lg: "2rem" }}
                _hover={{
                  bg: "#07ad60",
                }}
              >
                {currentQuestion === questions.length - 1 ? t('showResult') : t('next')}
              </Button>
            </Flex>
          )}
          {/* Slide number centered */}
          {!showResult && !showResetSlide && (
            <Text fontSize="1.5rem">
              {t(`سؤال ${currentQuestion + 1} از ${questions.length}`)}
            </Text>
          )}
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};

export default QuizModal;
