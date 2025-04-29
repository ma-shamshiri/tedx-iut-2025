import React, { useState, useEffect, useRef } from 'react';
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
} from '@chakra-ui/react';
import { questions, personalityElements, PersonalityElement, Option } from './data';
import { useTranslation } from 'react-i18next';
import { BsStars } from 'react-icons/bs';
import SubmitAnimation from '../Animations/SubmitAnimation';
import { FaShareAlt, FaWhatsapp, FaLinkedin, FaTelegram, FaDownload } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';
import QuizDownloadModal from "./QuizDownloadModal";


function shuffleArray<T>(array: T[]): T[] {
  const shuffled = [...array]; 
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }

  return shuffled;
}


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
  const [shuffledQuestions, setShuffledQuestions] = useState<typeof questions>([]);
  const [isDownloadModalOpen, setIsDownloadModalOpen] = useState(false);


  const handleReset = () => {
    setCurrentQuestion(0);
    setAnswers(Array(questions.length).fill(null));
    setShowResult(false);
    setShowResetSlide(false);
    setEmail('');
    setResultElement(null);

    const shuffledQuestionsCopy = questions.map((question) => ({
      ...question,
      options: shuffleArray(question.options),
    }));
    setShuffledQuestions(shuffledQuestionsCopy);
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
        title: t('quizErrorOptionSelect'),
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

  
  const handleShare = async () => {
    if (navigator.share) {
      try {
        const imageUrl = `${window.location.origin}${resultElement?.image}`;
        await navigator.share({
          title: resultElement?.name || 'Quiz Result',
          text: `Check out my quiz result! \n${imageUrl}`,
        });
      } catch (error) {
        console.error(t('handleShareError'), error);
      }
    } else {
      alert(t('handleShareAlert'))
    }
  };

  const getShareUrl = (platform: string): string => {
    const baseText = encodeURIComponent('Check out my quiz result!');
    const imageUrl = `${window.location.origin}${resultElement?.image}`;
  
    switch (platform) {
      case 'telegram':
        return `https://t.me/share/url?text=${baseText}&url=${imageUrl}`;
      case 'twitter':
        return `https://twitter.com/intent/tweet?text=${baseText}&url=${imageUrl}`;
      case 'whatsapp': 
        return `https://wa.me/?text=${baseText} \n${imageUrl}`;
      case 'linkedin':
        return `https://www.linkedin.com/shareArticle?text=${baseText}&url=${imageUrl}&mini=true`;
      default:
        return '';
    }
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
                  {t(shuffledQuestions[currentQuestion]?.text)}
                </Text>
                
                <SimpleGrid columns={{ base: 1, lg: 2 }} spacing={4}>
                  {shuffledQuestions[currentQuestion]?.options.map((option, index) => (
                    <Button
                      key={index}
                      onClick={() => handleOptionSelect(option)}
                      bg={answers[currentQuestion]?.text === option.text ? 'dodgerblue' : 'gray.100'}
                      color={answers[currentQuestion]?.text === option.text ? 'white' : 'black'}
                      variant={answers[currentQuestion]?.text === option.text ? 'solid' : 'outline'}
                      padding="2.5rem"
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
              
              <Flex justifyContent="center" alignItems="center" mb={6}>
                <Image
                  src={resultElement?.image}
                  alt={resultElement?.name}
                  width="50vh"
                  height="auto"
                  objectFit="cover"
                  borderRadius="10px"
                />
              </Flex>

              {/* Download Button Container */}
              <Box position="relative" mt={6} padding={4}>
                {/* Download Button */}
                <Button
                  colorScheme="gray"
                  size="lg"
                  borderRadius="12"
                  px={8}
                  py={8}
                  fontSize={{ base: '1.2rem', md: '1.5rem' }}
                  fontWeight="bold"
                  onClick={() => setIsDownloadModalOpen(true)} // Open the popup modal
                >
                  <Text
                    as="span"
                    m={4}
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
                    {t('downloadResult')}
                  </Text>
                  <FaDownload size={20} />
                </Button>

                <QuizDownloadModal isOpen={isDownloadModalOpen} onClose={() => setIsDownloadModalOpen(false)} />

              </Box>
              
              {/* Share Buttons */}
              <Box mt={6}>
                <Text
                  color="white"
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
                  {t('shareResultTitle')}
                </Text>

                <Flex justifyContent="center" alignItems="center" gap={7} flexWrap="wrap">
                  {/* Platform-Specific Buttons */}
                  <Button
                    colorScheme="linkedin"
                    as="a"
                    href={getShareUrl('linkedin')}
                    target="_blank"
                    rel="noopener noreferrer"
                    size="xl"
                    borderRadius="full"
                    p={3} 
                    fontSize="2xl"
                  >
                    <FaLinkedin size={36} />
                  </Button>
                  <Button
                    colorScheme="gray"
                    as="a"
                    href={getShareUrl('twitter')}
                    target="_blank"
                    rel="noopener noreferrer"
                    size="xl"
                    borderRadius="full"
                    p={3} 
                    fontSize="2xl"
                  >
                    <FaXTwitter size={36} />
                  </Button>
                  <Button
                    colorScheme="whatsapp"
                    as="a"
                    href={getShareUrl('whatsapp')}
                    target="_blank"
                    rel="noopener noreferrer"
                    size="xl"
                    borderRadius="full"
                    p={3} 
                    fontSize="2xl"
                  >
                    <FaWhatsapp size={36} />
                  </Button>
                  <Button
                    colorScheme="telegram"
                    as="a"
                    href={getShareUrl('telegram')}
                    target="_blank"
                    rel="noopener noreferrer"
                    size="xl"
                    borderRadius="full"
                    p={3} 
                    fontSize="2xl"
                  >
                    <FaTelegram size={36} />
                  </Button>

                  {/* Web Share API Button */}
                  <Button
                    colorScheme="yellow"
                    onClick={handleShare}
                    isDisabled={!navigator.share}
                    size="xl"
                    borderRadius="full"
                    p={3} 
                    fontSize="2xl"
                  >
                    <FaShareAlt size={36} />
                  </Button>
                </Flex>
              </Box>

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
            <Text
              as="span"
              fontSize={{
                base: i18n.language === "fa" ? "1.2rem" : "1.4rem",
                md: i18n.language === "fa" ?   "1.2rem" : "1.7rem",
                lg: i18n.language === "fa" ?   "1.5rem" : "1.6rem",
                xl: i18n.language === "fa" ?   "1.5rem" : "1.9rem"
              }}
              fontFamily={i18n.language === 'fa' ? "'YekanBakh', sans-serif" : ''}
              dir={i18n.language === 'fa' ? 'rtl' : 'ltr'}
            >
              {`${t('quizQuestionName')} ${currentQuestion + 1} ${t('quizQuestionOutOf')} ${questions.length}`}
            </Text>
          )}
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};

export default QuizModal;
