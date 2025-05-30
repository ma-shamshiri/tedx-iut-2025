import React, { useState, useEffect } from 'react';
import {
  Box,
  Text,
  Button,
  useToast,
  SimpleGrid,
  Flex,
  Image,
  IconButton,
  Input,
} from '@chakra-ui/react';
import MyNavbar from "../MyNavbar";
import SocialFooter from './SocialFooter';
import { questions, personalityElements, PersonalityElement, Option } from './data';
import { useTranslation } from 'react-i18next';
import SubmitAnimation from '../Animations/SubmitAnimation';
import { FaShareAlt, FaDownload } from 'react-icons/fa';
import ShareDownloadModal from './ShareDownloadModal/ShareDownloadModal';
import { FiCopy, FiRefreshCw } from 'react-icons/fi';
import {
  campaignStart,
} from "../../assets";

function shuffleArray<T>(array: T[]): T[] {
  const shuffled = [...array];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
}

const QuizPage: React.FC = () => {
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
  const [started, setStarted] = useState(false);
  const [phoneNumber, setPhoneNumber] = useState('');
  const [showPhoneInput, setShowPhoneInput] = useState(true);

  const discountCodes = [
    { code: 'ost4s', percent: 40 },
    { code: 'os5r', percent: 55 },
    { code: '6osts', percent: 60 },
  ];
  const [selectedDiscount, setSelectedDiscount] = useState<{ code: string, percent: number } | null>(null);

  const WEB_APP_URL = 'https://script.google.com/macros/s/AKfycbwJJTsbUNbHEm8Nb6yoRe1vN6qS1NY8BY4ONPgMAXxLnu4RoSHyUpt4G51IIYGqyUrAjw/exec';

  const submitPhoneNumber = async (phone: string) => {
    try {
      const submissionAttempt = {
        phone,
        timestamp: new Date().toISOString(),
        userAgent: navigator.userAgent
      };

      // Send to Google Sheets
      fetch(WEB_APP_URL, {
        method: 'POST',
        mode: 'no-cors',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ phoneNumber: phone }),
      }).catch(error => {
        // If the request fails, store in localStorage
        const fallbackStorage = JSON.parse(localStorage.getItem('failedSubmissions') || '[]');
        localStorage.setItem('failedSubmissions', JSON.stringify([...fallbackStorage, submissionAttempt]));
        console.error('Submission error:', error);
      });
    } catch (error) {
      console.error('Submission error:', error);
    }
  };

  const handleReset = () => {
    setStarted(false);
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

    // Get last 4 digits and use them to select discount code
    const lastFourDigits = parseInt(phoneNumber.replace(/\s/g, '').slice(-4));
    const discountIndex = lastFourDigits % discountCodes.length;
    setSelectedDiscount(discountCodes[discountIndex]);
  };

  useEffect(() => {
    handleReset();
  }, []);

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
          fontFamily: i18n.language === 'fa' ? "'IRANSans', sans-serif" : '',
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

  const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value.replace(/\s/g, ''); // Remove all spaces
    
    // Only allow numbers
    if (!/^\d*$/.test(value)) return;
    
    // If user tries to enter more than 11 digits, don't allow
    if (value.length > 11) return;
    
    // If first digit is not 0, don't allow
    if (value.length === 1 && value !== '0') return;
    
    // If second digit is not 9 after 0, don't allow
    if (value.length === 2 && value !== '09') return;
    
    // Format the number with spaces
    let formattedNumber = value;
    if (value.length > 4) {
      formattedNumber = value.slice(0, 4) + ' ' + value.slice(4);
    }
    if (value.length > 7) {
      formattedNumber = formattedNumber.slice(0, 8) + ' ' + formattedNumber.slice(8);
    }
    
    setPhoneNumber(formattedNumber);
  };

  const handlePhoneSubmit = () => {
    const cleanNumber = phoneNumber.replace(/\s/g, ''); // Remove spaces for validation
    
    if (!cleanNumber.trim()) {
      toast({
        title: t('quizHandlePhoneNumber'),
        status: 'error',
        duration: 2500,
        containerStyle: {
          padding: '1rem',
          fontSize: '1.5rem',
          fontFamily: i18n.language === 'fa' ? "'IRANSans', sans-serif" : '',
          direction: i18n.language === 'fa' ? 'rtl' : 'ltr',
        } as any,
      });
      return;
    }

    // Validate phone number format
    if (!cleanNumber.startsWith('09') || cleanNumber.length !== 11) {
      toast({
        title: t('quizHandlePhoneNumberError'),
        status: 'error',
        duration: 2500,
        containerStyle: {
          padding: '1rem',
          fontSize: '1.5rem',
          fontFamily: i18n.language === 'fa' ? "'IRANSans', sans-serif" : '',
          direction: i18n.language === 'fa' ? 'rtl' : 'ltr',
        } as any,
      });
      return;
    }

    // Get last 4 digits and use them to select discount code
    const lastFourDigits = parseInt(cleanNumber.slice(-4));
    const discountIndex = lastFourDigits % discountCodes.length;
    setSelectedDiscount(discountCodes[discountIndex]);

    // Submit phone number in the background
    submitPhoneNumber(cleanNumber);

    // Continue to the quiz immediately
    setShowPhoneInput(false);
  };

  const isPhoneNumberValid = (number: string) => {
    const cleanNumber = number.replace(/\s/g, '');
    return cleanNumber.startsWith('09') && cleanNumber.length === 11;
  };

  return (
    <Flex
      direction="column"
      minH="100vh"
      // bg="black.100"
      bgGradient="linear(to bottom right, rgba(0, 0, 0, 0.5) 0%, rgba(0, 0, 0, 0.2) 30%, rgba(0, 0, 0, 0.4) 100%)"
      >
      <MyNavbar />
      <Box
        flex="1"
        display="flex" flexDirection="column" justifyContent="center" alignItems="center" p={{ base: '1rem', lg: '2rem' }}>
        <Box maxW="600px" mx="auto" w="100%">
          {/* Phone Number Input Screen */}
          {showPhoneInput ? (
            <Flex direction="column" justify="center" align="center" minH="300px" p={4}>
              <Text
                fontSize="2.6rem"
                color="#fff"
                fontWeight="bold"
                fontFamily={i18n.language === 'fa' ? "'IRANSans', sans-serif" : ''}
                dir={i18n.language === 'fa' ? 'rtl' : 'ltr'}
                textAlign="center"
              >
                {t('quizHandlePhoneNumber')}
              </Text>
              <Input
                value={phoneNumber}
                onChange={handlePhoneChange}
                placeholder="09xx xxx xxxx"
                
                size="lg"
                fontSize="1.8rem"
                fontFamily={i18n.language === 'fa' ? "'IRANSans', sans-serif" : ''}
                fontWeight="bold" 
                bg="#1A202C"
                color="white"
                my={8}
                textAlign="center"
                dir="ltr"
                type="tel"
                pattern="[0-9]*"
                inputMode="numeric"
                maxLength={13}
                _placeholder={{ color: 'gray.400' }}
                width="60%"
                height="5rem"
                borderRadius="md"
                borderColor={isPhoneNumberValid(phoneNumber) ? "green.400" : "gray.600"}
                _hover={{ borderColor: isPhoneNumberValid(phoneNumber) ? "green.300" : "gray.500" }}
                _focus={{ 
                  borderColor: isPhoneNumberValid(phoneNumber) ? "green.400" : "#c53e3e", 
                  boxShadow: isPhoneNumberValid(phoneNumber) ? "0 0 0 1px #48BB78" : "0 0 0 1px #c53e3e" 
                }}
                transition="all 0.2s"
              />
              <Button
                bg="#c53e3e"
                color="#fff"
                borderRadius="2xl"
                fontSize="2rem"
                px="4rem"
                py="2.2rem"
                fontWeight="bold"
                _hover={{ bg: "#a53030" }}
                boxShadow="lg"
                onClick={handlePhoneSubmit}
                fontFamily={i18n.language === 'fa' ? "'IRANSans', sans-serif" : ''}
              >
                {t('quizContinue')}
              </Button>
            </Flex>
          ) : (
            <>
              {/* Start Button with image and text */}
              {!started ? (
                <Flex direction="column" justify="center" align="center" minH="300px" p={4}>
                  <Image
                    src={campaignStart}
                    alt="Sample"
                    width="30vh"
                    height="auto"
                    // boxSize="120px"
                    mb={4}
                    borderRadius="xl"
                    objectFit="cover"
                  />
                  <Text
                    fontSize="2.6rem"
                    color="#fff"
                    mb={2}
                    fontWeight="bold"
                    fontFamily={i18n.language === 'fa' ? "'IRANSans', sans-serif" : ''}
                    dir={i18n.language === 'fa' ? 'rtl' : 'ltr'}
                    textAlign="center"
                  >
                    {t('quizStartTitle')}
                  </Text>
                  <Text
                    fontSize="1.6rem"
                    color="#fff"
                    mb={6}
                    fontFamily={i18n.language === 'fa' ? "'IRANSans', sans-serif" : ''}
                    dir={i18n.language === 'fa' ? 'rtl' : 'ltr'}
                    textAlign="center"
                  >
                    {t('quizStartDescription')}
                  </Text>
                  <Button
                    bg="#c53e3e"
                    color="#fff"
                    borderRadius="2xl"
                    fontSize="2rem"
                    px="4rem"
                    py="2.2rem"
                    fontWeight="bold"
                    _hover={{ bg: "#a53030" }}
                    boxShadow="lg"
                    onClick={() => setStarted(true)}
                    fontFamily={i18n.language === 'fa' ? "'IRANSans', sans-serif" : ''}
                  >
                    {t('quizStart')}
                  </Button>
                </Flex>
              ) : (
                <>
                  {/* Quiz Question Slide */}
                  {!showResult && !showResetSlide && (
                    <Box>
                      <Box
                        p={6}
                      >
                        <Text
                          mb={6}
                          color="gold"
                          fontSize={{ base: '1.5rem', lg: '1.7rem' }}
                          fontWeight="bold"
                          fontFamily={i18n.language === 'fa' ? "'IRANSans', sans-serif" : ''}
                          dir={i18n.language === 'fa' ? 'rtl' : 'ltr'}
                        >
                          {t(shuffledQuestions[currentQuestion]?.text)}
                        </Text>

                        <SimpleGrid columns={{ base: 1, lg: 1 }} spacing={3}>
                          {shuffledQuestions[currentQuestion]?.options.map((option, index) => (
                            <Button
                              key={index}
                              onClick={() => handleOptionSelect(option)}
                              bg={answers[currentQuestion]?.text === option.text ? "#fff" : "#18181b"}
                              color={answers[currentQuestion]?.text === option.text ? "#18181b" : "#fff"}
                              border={answers[currentQuestion]?.text === option.text ? "none" : "1.5px solid #333"}
                              borderRadius="2xl"
                              fontWeight={answers[currentQuestion]?.text === option.text ? "bold" : "normal"}
                              boxShadow="none"
                              paddingY="2.5rem"
                              fontSize="1.5rem"
                              marginY="0.2rem"
                              width="100%"
                              _hover={{
                                bg: answers[currentQuestion]?.text === option.text ? "#fff" : "#232326",
                                color: answers[currentQuestion]?.text === option.text ? "#18181b" : "#fff",
                              }}
                              transition="all 0.15s"
                              fontFamily={i18n.language === 'fa' ? "'IRANSans', sans-serif" : ''}
                              dir={i18n.language === 'fa' ? 'rtl' : 'ltr'}
                              whiteSpace="normal"
                              wordBreak="break-word"
                              textAlign="center"
                            >
                              {t(option.text)}
                            </Button>
                          ))}
                        </SimpleGrid>
                      </Box>

                      {/* Navigation buttons */}
                      <Flex w="100%" justifyContent="space-between" mt={4}>
                        <Button
                          onClick={handlePrevious}
                          isDisabled={currentQuestion === 0}
                          fontSize={{
                            base: i18n.language === "fa" ? "1.5rem" : "1.7rem",
                            md: i18n.language === "fa" ? "1.5rem" : "1.8rem",
                            lg: i18n.language === "fa" ? "1.5rem" : "1.5rem",
                            xl: i18n.language === "fa" ? "1.8rem" : "1.8rem"
                          }}
                          fontFamily={i18n.language === 'fa' ? "'IRANSans', sans-serif" : ''}
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
                          fontFamily={i18n.language === 'fa' ? "'IRANSans', sans-serif" : ''}
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

                      {/* Slide number centered */}
                      <Text
                        as="span"
                        fontSize={{
                          base: i18n.language === "fa" ? "1.2rem" : "1.4rem",
                          md: i18n.language === "fa" ? "1.2rem" : "1.7rem",
                          lg: i18n.language === "fa" ? "1.5rem" : "1.6rem",
                          xl: i18n.language === "fa" ? "1.5rem" : "1.9rem"
                        }}
                        fontFamily={i18n.language === 'fa' ? "'IRANSans', sans-serif" : ''}
                        dir={i18n.language === 'fa' ? 'rtl' : 'ltr'}
                        textAlign="center"
                        display="block"
                        mt={4}
                      >
                        {`${t('quizQuestionName')} ${currentQuestion + 1} ${t('quizQuestionOutOf')} ${questions.length}`}
                      </Text>
                    </Box>
                  )}

                  {/* Result Slide */}
                  {showResult && !showResetSlide && (
                    <Box textAlign="center" p={6} borderRadius="md">
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
                                title: t('quizDiscountCopied'),
                                status: 'success',
                                duration: 1500,
                                isClosable: true,
                              });
                            }}
                          >
                            <Text 
                              fontSize={{
                                base: i18n.language === "fa" ? "1.4rem" : "1.6rem",
                                md: i18n.language === "fa" ? "1.4rem" : "1.0rem",
                                lg: i18n.language === "fa" ? "1.7rem" : "1.8rem",
                                xl: i18n.language === "fa" ? "1.7rem" : "2.1rem"
                              }}
                              fontFamily={i18n.language === 'fa' ? "'YekanBakh', sans-serif" : ''}
                              dir={i18n.language === 'fa' ? 'rtl' : 'ltr'}
                              userSelect="none"
                              pl={2}
                            >
                              {selectedDiscount.code}
                            </Text>
                            
                            <IconButton
                              aria-label={t('quizDiscountCopy')}
                              icon={<FiCopy size="1em" />}
                              fontSize={{
                                base: i18n.language === "fa" ? "1.4rem" : "1.6rem",
                                md: i18n.language === "fa" ? "1.4rem" : "1.0rem",
                                lg: i18n.language === "fa" ? "1.7rem" : "1.8rem",
                                xl: i18n.language === "fa" ? "1.7rem" : "2.1rem"
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
                                  title: t('quizDiscountCopied'),
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
                              md: i18n.language === "fa" ? "1.8rem" : "2.3rem",
                              lg: i18n.language === "fa" ? "2.1rem" : "2.2rem",
                              xl: i18n.language === "fa" ? "2.1rem" : "2.5rem"
                            }}
                            fontFamily={i18n.language === 'fa' ? "'IRANSans', sans-serif" : ''}
                            dir={i18n.language === 'fa' ? 'rtl' : 'ltr'}
                            mx={2}
                          >
                            {t('quizDiscountPercent')} %{selectedDiscount.percent}: 
                          </Text>
                        </Flex>
                      )}

                      <Box position="relative" mt={8}>
                        <Flex gap={6} justifyContent="center" flexWrap="wrap">
                          {/* Download Button */}
                          <Button
                            colorScheme="gray"
                            size="lg"
                            borderRadius="12"
                            p={4}
                            mx={2}
                            width="4.5rem"
                            height="4.5rem"
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
                            mx={2}
                            width="4.5rem"
                            height="4.5rem"
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

                          {/* Reset Button */}
                          <Button
                            colorScheme="gray"
                            size="lg"
                            borderRadius="12"
                            p={4}
                            mx={2}
                            width="4.5rem"
                            height="4.5rem"
                            display="flex"
                            alignItems="center"
                            justifyContent="center"
                            onClick={handleReset}
                          >
                            <FiRefreshCw size={38} />
                          </Button>
                        </Flex>

                        <ShareDownloadModal
                          isOpen={isDownloadModalOpen}
                          onClose={() => {
                            setIsDownloadModalOpen(false);
                            setModalAction(null);
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
                    <Box textAlign="center" p={6} borderRadius="md">
                      <Text
                        fontSize="2xl"
                        mb={6}
                        fontFamily={i18n.language === 'fa' ? "'IRANSans', sans-serif" : ''}
                        dir={i18n.language === 'fa' ? 'rtl' : 'ltr'}
                      >
                        {t('theTestIsCompleted')}
                      </Text>
                      <Button
                        onClick={handleReset}
                        fontSize="xl"
                        px={10}
                        py={6}
                        fontFamily={i18n.language === 'fa' ? "'IRANSans', sans-serif" : ''}
                        dir={i18n.language === 'fa' ? 'rtl' : 'ltr'}
                      >
                        {t('tryAgain')}
                      </Button>
                    </Box>
                  )}
                </>
              )}
            </>
          )}
        </Box>
      </Box>
      <SocialFooter />
    </Flex>
  );
};

export default QuizPage; 