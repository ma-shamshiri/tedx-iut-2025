import React from 'react';
import {
    Box,
    Text,
    Button,
    Flex,
} from '@chakra-ui/react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { Link as RouterLink } from 'react-router-dom';



const QuizSection: React.FC = () => {
    const { t, i18n } = useTranslation();

    return (
        <Box
            position="relative"
            display="flex"
            flexDir="column"
            justifyContent="top"
            alignItems="center"
            bg="#000"
            width="100%"
            minH={{ base: "20vh", lg: "20vh" }}
            overflow="hidden"
        >
            <Flex
                width="100%"
                flexDirection="column"
                justifyContent="center"
                alignItems="center"
                paddingX="3rem"
            >
                <Text
                    fontSize={{ base: "1.7rem", md: "2rem", lg: "2.2rem", xl: "2.2rem" }}
                    color="#fff"
                    textAlign="center"
                    fontFamily={i18n.language === "fa" ? "'IRANSans', sans-serif" : ""}
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
                        as={RouterLink}
                        to="/quiz/"
                        bg="gold"
                        color="#000"
                        fontSize={{ base: "2rem", md: "2.2rem", lg: "2.5rem", xl: "2.5rem" }}
                        padding={{ base: "2.8rem", md: "2.8rem", lg: "3.7rem", xl: "3.8rem" }}
                        marginTop="2rem"
                        borderRadius="10px"
                        fontFamily={i18n.language === "fa" ? "'IRANSans', sans-serif" : ""}
                        dir={i18n.language === "fa" ? "rtl" : "ltr"}
                        _hover={{
                            bg: "gold",
                            color: "#000"
                        }}
                    >
                        {/* {t("startTheTest")} */}
                        {t("quizModalButtonTitle")}
                    </Button>
                </motion.div>
            </Flex>
        </Box>
    );
};

export default QuizSection;
