import React, { useEffect, useState } from "react";
import { Box, Flex, Text, useBreakpointValue, useColorModeValue } from "@chakra-ui/react";
import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";

const CountdownTimer: React.FC<{ eventStartTime: Date }> = ({ eventStartTime }) => {
    const calculateTimeLeft = () => {
        const currentTime = new Date();
        const difference = eventStartTime.getTime() - currentTime.getTime();

        if (difference <= 0) {
            return { days: 0, hours: 0, minutes: 0, seconds: 0 };
        }

        const days = Math.floor(difference / (1000 * 60 * 60 * 24));
        const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((difference % (1000 * 60)) / 1000);

        return { days, hours, minutes, seconds };
    };

    const { t, i18n } = useTranslation();
    const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

    const numberFontSize = useBreakpointValue({ base: "1.8rem", md: "2rem", lg: "2rem", xl: "2rem" });
    const textFontSize = useBreakpointValue({ base: "1.1rem", md: "1.3rem", lg: "1.3rem", xl: "1.3rem" });
    const boxSize = useBreakpointValue({ base: "60px", md: "70px", lg: "70px", xl: "70px" });

    useEffect(() => {
        const timer = setTimeout(() => {
            setTimeLeft(calculateTimeLeft());
        }, 1000);

        return () => clearTimeout(timer);
    }, [timeLeft]);

    const formatTimeUnit = (unit: number) =>
        unit < 10 ? `0${unit}` : unit.toString();

    const timeUnits: (keyof typeof timeLeft)[] =
        i18n.language === "fa" ? ["seconds", "minutes", "hours", "days"] : ["days", "hours", "minutes", "seconds"];

    return (
        <Box
            position="relative"
            overflow="hidden"
            padding={"1.5rem"}
        >
            <Flex justifyContent="center" gap={5}>
                {timeUnits.map((unit, index) => (
                    <motion.div
                        key={index}
                        whileHover={{ scale: 1.1, rotate: 7 }}
                        whileTap={{ scale: 1, rotate: 0 }}
                        transition={{
                            type: "spring",
                            stiffness: 300,
                            damping: 5,
                        }}
                    >
                        <Box
                            display="flex"
                            flexDirection="column"
                            alignItems="center"
                            justifyContent="center"
                            width={boxSize}
                            height={boxSize}
                            bg="rgba(255,255,255,0.05)"
                            color="#fff"
                            fontWeight={i18n.language === "fa" ? "semibold" : "bold"}
                            border="2px solid #CB0000"
                            borderRadius="12px"
                            boxShadow="0 8px 16px rgba(0, 0, 0, 0.3)"
                            transition="transform 0.3s ease, box-shadow 0.3s ease"
                            _hover={{
                                transform: "scale(1.05)",
                                boxShadow: "0 12px 24px rgba(0, 0, 0, 0.4)",
                            }}
                            textAlign="center"
                            fontFamily={i18n.language === "fa" ? "'YekanBakh', sans-serif" : ""}
                            dir={i18n.language === "fa" ? "rtl" : "ltr"}
                        >
                            <Text
                                fontSize={numberFontSize}
                            >
                                {formatTimeUnit(timeLeft[unit])}
                            </Text>
                            <Text
                                fontSize={textFontSize}
                                textTransform="capitalize"
                                fontWeight={i18n.language === "fa" ? "bold" : ""}
                            >
                                {t(unit)}
                            </Text>
                        </Box>
                    </motion.div>
                ))}
            </Flex>
        </Box>
    );
};

export default CountdownTimer;
