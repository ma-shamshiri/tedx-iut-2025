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
  IconButton,
} from '@chakra-ui/react';
import { questions, personalityElements, PersonalityElement, Option } from './data';
import { useTranslation } from 'react-i18next';
import { BsStars } from 'react-icons/bs';
import SubmitAnimation from '../Animations/SubmitAnimation';
import { FaShareAlt, FaDownload } from 'react-icons/fa';
import ShareDownloadModal from "./ShareDownloadModal";
import { FiCopy } from 'react-icons/fi';


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
  const [modalAction, setModalAction] = useState<'download' | 'share' | null>(null);

  const discountCodes = [
    { code: 'TEDX2025A', percent: 20 },
    { code: 'TEDX2025B', percent: 30 },
  ];
  const [selectedDiscount, setSelectedDiscount] = useState<{ code: string, percent: number } | null>(null);


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

    setShowResult(true)
    setShowResetSlide(false)
    setResultElement(personalityElements[0])

    const randomCode = discountCodes[Math.floor(Math.random() * discountCodes.length)];
    setSelectedDiscount(randomCode);
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

      const randomCode = discountCodes[Math.floor(Math.random() * discountCodes.length)];
      setSelectedDiscount(randomCode);
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
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      isCentered
      size={showResult && !showResetSlide ? "3xl" : "5xl"}
    >
      <ModalOverlay />
      <ModalContent
        bg="gray.800"
        bgGradient="linear(to bottom right, rgba(139, 67, 67, 0.7) 0%, rgba(177, 60, 60, 0.2) 30%, rgba(0,0,0,0.1) 100%)"
        borderRadius="10px"
        padding={{ base: '0.5rem', lg: '2rem' }}
        width={{ base: '90%', lg: '' }}
      >
        <ModalCloseButton size="lg" p="1rem" fontSize="1.5rem" />
        <ModalHeader
        >
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
                  fontWeight="bold"
                  fontFamily={i18n.language === 'fa' ? "'XBZar', sans-serif" : ''}
                  dir={i18n.language === 'fa' ? 'rtl' : 'ltr'}
                >
                  {t(shuffledQuestions[currentQuestion]?.text)}
                </Text>
                
                <SimpleGrid columns={{ base: 1, lg: 1 }} spacing={4}>
                  {shuffledQuestions[currentQuestion]?.options.map((option, index) => (
                    <Button
                      key={index}
                      onClick={() => handleOptionSelect(option)}
                      bg={answers[currentQuestion]?.text === option.text ? 'dodgerblue' : 'gray.100'}
                      color={answers[currentQuestion]?.text === option.text ? 'white' : 'black'}
                      variant={answers[currentQuestion]?.text === option.text ? 'solid' : 'outline'}
                      padding="2.5rem"
                      fontSize={{ base: '1.4rem', lg: '1.35rem' }}
                      fontFamily={i18n.language === 'fa' ? "'XBZar', sans-serif" : ''}
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
            <Box textAlign="center" pt={6}>
              
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

              {selectedDiscount && (
                <Flex
                  align="center"
                  justify="center"
                  mb={4}
                  p={3}
                  borderRadius="md"
                  color="#fff"
                  fontWeight="bold"
                  fontSize="1.2rem"
                  gap={2}
                  width="fit-content"
                  mx="auto"
                >
                  <Flex
                    align="center"
                    bg="gray.700"
                    borderRadius="md"
                    px={3}
                    py={1}
                    cursor="pointer"
                    _hover={{ bg: 'gray.600' }}
                    onClick={() => {
                      navigator.clipboard.writeText(selectedDiscount.code);
                      toast({
                        title: t('کد تخفیف کپی شد!'),
                        status: 'success',
                        duration: 1500,
                        isClosable: true,
                      });
                    }}
                  >
                    <Text 
                      fontSize={{
                        base: i18n.language === "fa" ? "1.4rem" : "1.6rem",
                        md: i18n.language === "fa" ?   "1.4rem" : "1.0rem",
                        lg: i18n.language === "fa" ?   "1.7rem" : "1.8rem",
                        xl: i18n.language === "fa" ?   "1.7rem" : "2.1rem"
                      }}
                      fontFamily={i18n.language === 'fa' ? "'YekanBakh', sans-serif" : ''}
                      dir={i18n.language === 'fa' ? 'rtl' : 'ltr'}
                      userSelect="none"
                    >
                      {selectedDiscount.code}
                    </Text>
                    
                    <IconButton
                      aria-label="کپی کد تخفیف"
                      icon={<FiCopy size="1em" />}
                      fontSize={{
                        base: i18n.language === "fa" ? "1.4rem" : "1.6rem",
                        md: i18n.language === "fa" ?   "1.4rem" : "1.0rem",
                        lg: i18n.language === "fa" ?   "1.7rem" : "1.8rem",
                        xl: i18n.language === "fa" ?   "1.7rem" : "2.1rem"
                      }}
                      size="lg"
                      variant="ghost"
                      colorScheme="gray"
                      ml={1}
                      userSelect="none"
                      _hover={{ bg: 'transparent' }}
                      onClick={(e) => {
                        e.stopPropagation();
                        navigator.clipboard.writeText(selectedDiscount.code);
                        toast({
                          title: t('کد تخفیف کپی شد!'),
                          status: 'success',
                          duration: 1500,
                          isClosable: true,
                        });
                      }}
                    />
                  </Flex>

                  <Text
                    as="span"
                    fontSize={{
                      base: i18n.language === "fa" ? "1.8rem" : "2.0rem",
                      md: i18n.language === "fa" ?   "1.8rem" : "2.3rem",
                      lg: i18n.language === "fa" ?   "2.1rem" : "2.2rem",
                      xl: i18n.language === "fa" ?   "2.1rem" : "2.5rem"
                    }}
                    fontFamily={i18n.language === 'fa' ? "'YekanBakh', sans-serif" : ''}
                    dir={i18n.language === 'fa' ? 'rtl' : 'ltr'}
                    mx={2}
                  >
                    {/* {`${t('quizQuestionName')} ${currentQuestion + 1} ${t('quizQuestionOutOf')} ${questions.length}`} */}
                    کد تخفیف %{selectedDiscount.percent}:
                  </Text>
                </Flex>
              )}

              {/* Buttons Container */}
              <Box position="relative" mt={8} >
                <Flex gap={6} justifyContent="center" flexWrap="wrap">
                  {/* Download Button */}
                  <Button
                    colorScheme="gray"
                    size="lg"
                    borderRadius="12"
                    p={4}
                    mx={3}
                    width="5rem"
                    height="5rem"
                    display="flex"
                    alignItems="center"
                    justifyContent="center"
                    onClick={() => {
                      setModalAction('download');
                      setIsDownloadModalOpen(true);
                    }}
                  >
                    <FaDownload size={38} />
                  </Button>

                  {/* Share Button */}
                  <Button
                    colorScheme="gray"
                    size="lg"
                    borderRadius="12"
                    p={4}
                    mx={3}
                    width="5rem"
                    height="5rem"
                    display="flex"
                    alignItems="center"
                    justifyContent="center"
                    onClick={() => {
                      setModalAction('share');
                      setIsDownloadModalOpen(true);
                    }}
                  >
                    <FaShareAlt size={38} />
                  </Button>
                </Flex>

                <ShareDownloadModal 
                  isOpen={isDownloadModalOpen} 
                  onClose={() => {
                    setIsDownloadModalOpen(false);
                    setModalAction(null); // reset after closing
                  }} 
                  action={modalAction}
                  resultElement={resultElement}
                />

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
