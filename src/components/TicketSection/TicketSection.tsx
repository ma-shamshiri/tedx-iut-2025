import React, { useEffect, useState } from 'react';
import { Box, Flex, Heading, Text, Button } from '@chakra-ui/react';
import { useTranslation } from 'react-i18next';
import { poster } from '../../assets';
import CountdownTimer from '../CountdownTimer';

const EVENT_DATE = new Date("2025-05-15T08:00:00+03:30");
const TICKET_URL = "https://evand.com/events/%D8%AA%D8%AF%D8%A7%DA%A9%D8%B3-2025-%D8%AF%D8%A7%D9%86%D8%B4%DA%AF%D8%A7%D9%87-%D8%B5%D9%86%D8%B9%D8%AA%DB%8C-%D8%A7%D8%B5%D9%81%D9%87%D8%A7%D9%86-71116?fbclid=PAQ0xDSwKGWH1leHRuA2FlbQIxMAABpwEOnH2aagoPS395lm2Hm2Y7k1hYCfjfcm9vq8SHl5KUen-RFcdjxvLZDSQY_aem_bK4V8TjhexwoE2XqIgXAJA";

const getTimeLeft = () => {
    const now = new Date();
    const diff = EVENT_DATE.getTime() - now.getTime();
    if (diff <= 0) return { days: 0, hours: 0, minutes: 0, seconds: 0 };
    return {
        days: Math.floor(diff / (1000 * 60 * 60 * 24)),
        hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((diff / (1000 * 60)) % 60),
        seconds: Math.floor((diff / 1000) % 60),
    };
};

const TicketSection: React.FC = () => {
    const [timeLeft, setTimeLeft] = useState(getTimeLeft());
    const { i18n } = useTranslation();

    const eventStartTime = new Date("2025-05-15T08:00:00+03:30");

    useEffect(() => {
        const timer = setInterval(() => setTimeLeft(getTimeLeft()), 1000);
        return () => clearInterval(timer);
    }, []);

    return (
        <Box
            id="ticket-section"
            as="section"
            width="100%"
            py={{ base: "4rem", md: "7rem" }}
            position="relative"
            bgImage={`url(${poster})`}
            bgSize="contain"
            bgPosition="center"
            bgRepeat="no-repeat"
            overflow="hidden"
            px={"1rem"}
            minH="50vh"
        >
            <Box
                position="absolute"
                inset={0}
                bg="linear-gradient(90deg, 
                            rgba(0,0,0,0.99) 10%,
                            rgba(0,0,0,0.50) 50%, 
                            rgba(0,0,0,0.99) 100%)"
                zIndex={0}
            />

            <Flex
                direction="column"
                align="center"
                justify="center"
                position="relative"
                zIndex={1}
                maxW="540px"
                mx="auto"
                borderRadius="2.5rem"
                px={{ base: "1.5rem", md: "2.5rem" }}
                py={{ base: "2.5rem", md: "3.5rem" }}
                style={{
                    background: "rgba(255,255,255,0.02)",
                    border: "2.5px solid rgba(255,255,255,0.18)",
                    boxShadow: "0 12px 48px 0 rgba(235,36,35,0.18), 0 2px 16px 0 rgba(255,255,255,0.10)",
                    backdropFilter: "blur(8px) saturate(180%)",
                    WebkitBackdropFilter: "blur(24px) saturate(180%)",
                }}
            >
                <CountdownTimer eventStartTime={eventStartTime} />

                <Heading
                    as="h3"
                    fontSize={{ base: "1.8rem", md: "2.7rem" }}
                    color="#fff"
                    marginY="4rem"
                    fontWeight="extrabold"
                    letterSpacing="0.01em"
                    textAlign="center"
                    lineHeight="1.15"
                    textShadow="0 4px 24px #EB242344"
                    fontFamily={i18n.language === "fa" ? "'IRANSans', sans-serif" : "'IRANSans', sans-serif"}
                    dir={i18n.language === "fa" ? "rtl" : "ltr"}
                >
                    تداِکس دانشگاه صنعتی اصفهان
                </Heading>
                <Flex
                    direction="row"
                    align="center"
                    justify="center"
                    gap={6}
                    mb="0.7rem"
                >
                    <Flex align="center" gap={2}>
                        <Text
                            fontSize={{ base: "1.5rem", md: "1.5rem" }}
                            color="#fff"
                            fontWeight="bold"
                            fontFamily={i18n.language === "fa" ? "'IRANSans', sans-serif" : "'Rubik', sans-serif"}
                            dir={i18n.language === "fa" ? "rtl" : "ltr"}
                            textAlign="center"
                        >
                            بیست و پنج اردیبهشت، از ساعت ۸:۰۰ تا ۱۴:۰۰
                        </Text>
                    </Flex>
                </Flex>
                <Flex align="center" justify="center" mb="2.2rem" gap={2}>
                    <Text
                        fontSize={{ base: "1.5rem", md: "1.5rem" }}
                        color="#fff"
                        fontWeight="bold"
                        fontFamily={i18n.language === "fa" ? "'IRANSans', sans-serif" : "'Rubik', sans-serif"}
                        dir={i18n.language === "fa" ? "rtl" : "ltr"}
                        textAlign="center"
                    >
                        شهرک علمی و تحقیقاتی اصفهان
                    </Text>
                </Flex>
                <Button
                    as="a"
                    href={TICKET_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    size="lg"
                    fontSize={{ base: "1.7rem", md: "2rem" }}
                    fontWeight="bold"
                    color="#fff"
                    bg="#CB0000"
                    borderRadius="2xl"
                    px={{ base: "2.5rem", md: "3.5rem" }}
                    py={{ base: "1.7rem", md: "2.2rem" }}
                    _hover={{
                        bg: "#fff",
                        color: "#CB0000",
                        boxShadow: "0 12px 40px 0 rgba(235,36,35,0.18)",
                    }}
                    transition="all 0.2s"
                    width="100%"
                    maxW="340px"
                    mx="auto"
                    fontFamily={i18n.language === "fa" ? "'IRANSans', sans-serif" : ""}
                    dir={i18n.language === "fa" ? "rtl" : "ltr"}
                >
                    خرید بلیت
                </Button>
            </Flex>
        </Box>
    );
};

export default TicketSection;