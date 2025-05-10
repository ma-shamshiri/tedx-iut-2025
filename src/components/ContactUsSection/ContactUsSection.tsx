// ContactUsSection.tsx
import React, { useRef, useState } from 'react';
import {
  Box,
  Heading,
  Text,
  FormControl,
  FormLabel,
  Input,
  Textarea,
  Button,
  InputGroup,
  InputLeftElement,
  useBreakpointValue,
  Flex,
  Icon,
} from '@chakra-ui/react';
import { AiOutlineUser, AiOutlineMail, AiOutlinePhone, AiOutlineTag } from 'react-icons/ai';
import { FaTelegramPlane } from 'react-icons/fa';
import emailjs from 'emailjs-com';
import { group_photo } from '../../assets';
import SentAnimation from '../Animations/SentAnimation';
import { useTranslation } from 'react-i18next';
import { BiMailSend } from "react-icons/bi";

const fields = [
  { name: "from_name", label: "name", type: "text", required: true, placeholder: "name", icon: AiOutlineUser },
  { name: "reply_to", label: "email", type: "email", required: true, placeholder: "email", icon: AiOutlineMail },
  { name: "phone", label: "phoneNumber", type: "text", required: false, placeholder: "phoneNumber", icon: AiOutlinePhone },
  { name: "social", label: "telegramId", type: "text", required: false, placeholder: "telegramId", icon: FaTelegramPlane },
  { name: "subject", label: "subject", type: "text", required: false, placeholder: "subject", icon: AiOutlineTag },
];

const ContactUsSection: React.FC = () => {
  const { t, i18n } = useTranslation();

  const formRef = useRef<HTMLFormElement>(null);
  const [showAnimation, setShowAnimation] = useState(false);
  const [focus, setFocus] = useState<{ [key: string]: boolean }>({});
  const [values, setValues] = useState<{ [key: string]: string }>({});

  const formIconSize = useBreakpointValue({ base: "30px", lg: "30px" });

  const handleFocus = (name: string) => setFocus(f => ({ ...f, [name]: true }));
  const handleBlur = (name: string) => setFocus(f => ({ ...f, [name]: false }));
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setValues(v => ({ ...v, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formRef.current) return;
    emailjs
      .sendForm(
        'service_ci6qzc9',
        'template_9gkefon',
        formRef.current,
        '9PAIG4WjUWnxmroaj'
      )
      .then(() => {
        setShowAnimation(true);
        formRef.current!.reset();
        setValues({});
        setTimeout(() => setShowAnimation(false), 1200);
      })
      .catch((err) => {
        console.error(err);
        alert('خطایی رخ داد، لطفاً دوباره تلاش کنید.');
      });
  };

  return (
    <Box
      id="contact-section"
      as="section"
      position="relative"
      width="100%"
      minH={{ base: "100vh", md: "100vh" }}
      paddingX={{ base: "1.5rem" }}
      overflow="hidden"
      display="flex"
      alignItems="center"
      justifyContent="center"
      dir="rtl"
      bg="black"
    >
      {/* Blurred background image */}
      <Box
        position="absolute"
        inset={0}
        width="100%"
        height="100%"
        zIndex={0}
      >
        <Box
          as="img"
          src={group_photo}
          alt="تصویر تیم TEDx"
          objectFit="cover"
          width="100%"
          height="100%"
          position="absolute"
          inset={0}
          filter="blur(5px)"
          zIndex={0}
        />
      </Box>

      {/* --- FIX: SentAnimation should be here --- */}
      {showAnimation && <SentAnimation />}

      {/* Mirror/Glassmorphism Form Card */}
      <Box
        position="relative"
        zIndex={2}
        width={{ base: "98%", md: "700px", lg: "700px" }}
        mx="auto"
        borderRadius="2xl"
        p={{ base: 6, md: 12 }}
        bg="rgba(255,255,255,0.18)"
        boxShadow="0 8px 40px 0 rgba(0,0,0,0.25), 0 1.5px 8px 0 rgba(0,0,0,0.10)"
        border="2px solid rgba(255,255,255,0.18)"
        backdropFilter="blur(24px) saturate(180%)"
        style={{
          WebkitBackdropFilter: "blur(24px) saturate(180%)",
        }}
        display="flex"
        flexDirection="column"
        alignItems="center"
        overflow="hidden"
      >
        <Heading
          fontSize={{ base: '2rem', md: '2.5rem' }}
          fontFamily="'IRANSans', sans-serif"
          textAlign="center"
          color="#000"
          mb={2}
          letterSpacing="0.01em"
          lineHeight="1.2"
        >
          {t("formTitle")}
        </Heading>

        <Text
          fontSize={{ base: "1.3rem", md: '1.8rem' }}
          fontFamily="'IRANSans', sans-serif"
          textAlign="center"
          mb={8}
          color="#222"
        >
          {t("formSubTitle")}
        </Text>

        <form ref={formRef} onSubmit={handleSubmit} style={{ width: "100%" }}>
          <Flex
            direction={{ base: "column", md: "row" }}
            gap={8}
            mb={6}
            w="100%"
          >
            <Flex direction="column" flex={1} gap={6}>
              {fields.slice(0, 2).map((field) => (
                <FormControl
                  key={field.name}
                  isRequired={field.required}
                  position="relative"
                >
                  <InputGroup height="56px">
                    <InputLeftElement
                      pointerEvents="none"
                      height="100%"
                      display="flex"
                      alignItems="center"
                      justifyContent="center"
                    >
                      <Icon as={field.icon} color="#000" boxSize={10} paddingLeft="0.5rem" />
                    </InputLeftElement>
                    <Input
                      id={field.name}
                      name={field.name}
                      type={field.type}
                      placeholder={t(field.placeholder)}
                      fontFamily={i18n.language === "fa" ? "'IRANSans', sans-serif" : ""}
                      dir={i18n.language === "fa" ? "rtl" : "ltr"}
                      value={values[field.name] || ""}
                      onFocus={() => handleFocus(field.name)}
                      onBlur={() => handleBlur(field.name)}
                      onChange={handleChange}
                      bg="rgba(255,255,255,0.32)"
                      border="none"
                      borderBottom="2.5px solid"
                      borderColor={focus[field.name] ? "#CB0000" : "#000"}
                      borderRadius="xl"
                      color="#000"
                      fontSize="1.4rem"
                      fontWeight="medium"
                      px={12}
                      py={6}
                      _placeholder={{ color: "#222", fontSize: "1.4rem" }}
                      _focus={{
                        outline: "none",
                        bg: "rgba(255,255,255,0.45)",
                      }}
                      transition="all 0.18s"
                      height="56px"
                      paddingLeft="3.5rem"
                    />
                  </InputGroup>
                </FormControl>
              ))}
            </Flex>
            <Flex direction="column" flex={1} gap={6}>
              {fields.slice(2, 4).map((field) => (
                <FormControl
                  key={field.name}
                  isRequired={field.required}
                  position="relative"
                >
                  <InputGroup height="56px">
                    <InputLeftElement
                      pointerEvents="none"
                      height="100%"
                      display="flex"
                      alignItems="center"
                      justifyContent="center"
                    >
                      <Icon as={field.icon} color="#000" boxSize={10} paddingLeft={"0.5rem"} />
                    </InputLeftElement>
                    <Input
                      id={field.name}
                      name={field.name}
                      type={field.type}
                      placeholder={t(field.placeholder)}
                      fontFamily={i18n.language === "fa" ? "'IRANSans', sans-serif" : ""}
                      dir={i18n.language === "fa" ? "rtl" : "ltr"}
                      value={values[field.name] || ""}
                      onFocus={() => handleFocus(field.name)}
                      onBlur={() => handleBlur(field.name)}
                      onChange={handleChange}
                      bg="rgba(255,255,255,0.32)"
                      border="none"
                      borderBottom="2.5px solid"
                      borderColor={focus[field.name] ? "#CB0000" : "#000"}
                      borderRadius="xl"
                      color="#000"
                      fontSize="1.4rem"
                      fontWeight="medium"
                      px={12}
                      py={6}
                      _placeholder={{ color: "#222", fontSize: "1.4rem" }}
                      _focus={{
                        outline: "none",
                        // borderColor: "#CB0000",
                        bg: "rgba(255,255,255,0.45)",
                      }}
                      transition="all 0.18s"
                      height="56px"
                      paddingLeft="3.5rem"
                    />
                  </InputGroup>
                </FormControl>
              ))}
            </Flex>
          </Flex>

          {/* Subject field full width */}
          <FormControl mb={6} position="relative">
            <InputGroup height="56px">
              <InputLeftElement
                pointerEvents="none"
                height="100%"
                display="flex"
                alignItems="center"
                justifyContent="center"
              >
                <Icon as={AiOutlineTag} color="#000" boxSize={10} paddingLeft={"0.5rem"} />

              </InputLeftElement>
              <Input
                id="subject"
                name="subject"
                type="text"
                placeholder={t("subject")}
                fontFamily={i18n.language === "fa" ? "'IRANSans', sans-serif" : ""}
                dir={i18n.language === "fa" ? "rtl" : "ltr"}
                value={values["subject"] || ""}
                onFocus={() => handleFocus("subject")}
                onBlur={() => handleBlur("subject")}
                onChange={handleChange}
                bg="rgba(255,255,255,0.32)"
                border="none"
                borderBottom="2.5px solid"
                borderColor={focus["subject"] ? "#CB0000" : "#000"}
                borderRadius="xl"
                color="#000"
                fontSize="1.4rem"
                fontWeight="medium"
                px={12}
                py={6}
                _placeholder={{ color: "#222", fontSize: "1.4rem" }}
                _focus={{
                  outline: "none",
                  // borderColor: "#CB0000",
                  bg: "rgba(255,255,255,0.45)",
                }}
                transition="all 0.18s"
                height="56px"
                paddingLeft={"3.5rem"}
              />
            </InputGroup>
          </FormControl>

          {/* Message textarea */}
          <FormControl mb={2} isRequired position="relative">
            <FormLabel
              htmlFor="message"
              fontSize="1.4rem"
              fontFamily={i18n.language === "fa" ? "'IRANSans', sans-serif" : ""}
              dir={i18n.language === "fa" ? "rtl" : "ltr"}
              fontWeight="medium"
              color="#000"
              mb={2}
              ml={2}
            >
              {t("message")}
            </FormLabel>
            <Textarea
              id="message"
              name="message"
              rows={5}
              value={values["message"] || ""}
              onFocus={() => handleFocus("message")}
              onBlur={() => handleBlur("message")}
              onChange={handleChange}
              placeholder={t("yourMessage")}
              bg="rgba(255,255,255,0.32)"
              border="none"
              borderBottom="2.5px solid"
              borderColor={focus["message"] ? "#CB0000" : "#000"}
              borderRadius="xl"
              color="#000"
              fontSize="1.4rem"
              fontWeight="medium"
              fontFamily={i18n.language === "fa" ? "'IRANSans', sans-serif" : ""}
              dir={i18n.language === "fa" ? "rtl" : "ltr"}
              px={6}
              py={5}
              minH="120px"
              resize="vertical"
              _placeholder={{ color: "#222", fontSize: "1.4rem" }}
              _focus={{
                outline: "none",
                // borderColor: "#CB0000",
                bg: "rgba(255,255,255,0.45)",
              }}
              transition="all 0.18s"
            />
          </FormControl>

          <Button
            type="submit"
            mt={8}
            w="100%"
            h="56px"
            leftIcon={<BiMailSend size={22} />}
            bg="#CB0000"
            color="#fff"
            borderRadius="full"
            fontFamily="'IRANSans', sans-serif"
            fontWeight="extrabold"
            fontSize="1.4rem"
            letterSpacing="0.01em"
            boxShadow="0 4px 32px 0 rgba(203,0,0,0.13)"
            border="2px solid #CB0000"
            _hover={{
              bg: "transparent",
              color: "#000",
              borderColor: "#000",
            }}
            transition="all 0.18s"
            dir="rtl"
          >
            {t("sendMessage")}
          </Button>
        </form>
      </Box>
    </Box>
  );
};

export default ContactUsSection;
