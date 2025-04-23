// import React, { useState, useEffect, useRef } from 'react';
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
  Text,
  Flex,
  HStack,
  Icon,
} from '@chakra-ui/react';
import { useTranslation } from 'react-i18next';
import { BsArrowDown } from 'react-icons/bs';
import { FaInstagram } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';
import {
  downInstagram,
  downTwitter,
} from "../../../assets";

interface DownloadPopupProps {
    isOpen: boolean;
    onClose: () => void;
  }
  
const QuizDownloadModal: React.FC<DownloadPopupProps> = ({ isOpen, onClose }) => {
    const { t, i18n } = useTranslation();

    const handleDownload = (file: string) => {
      const filePath = `${window.location.origin}${file}`;
      const link = document.createElement('a');
      link.href = filePath;
      link.download = `${file.split('/').pop()}`; // Name of the file to be downloaded
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      onClose(); // Close the popup after download
    };

    return (
        <Modal isOpen={isOpen} onClose={onClose} isCentered>
            <ModalOverlay backdropFilter="blur(5px)" />
            <ModalContent bg="black" color="white" borderRadius="md" p={4} w="350px">
                <ModalHeader fontSize="1.5rem" textAlign="center">
                <Text
                    mb={10}
                    fontSize={{
                    base: i18n.language === "fa" ? "1.9rem" : "2.1rem",
                    md: i18n.language === "fa" ? "1.8rem" : "2.3rem",
                    lg: i18n.language === "fa" ? "2.1rem" : "2.2rem",
                    xl: i18n.language === "fa" ? "2.1rem" : "2.5rem"
                    }}
                    fontFamily={i18n.language === 'fa' ? "'YekanBakh', sans-serif" : ''}
                    dir={i18n.language === 'fa' ? 'rtl' : 'ltr'}
                >
                    {t('downloadModalTitle')}
                </Text>
                <Text
                    as="span"
                    mb={4}
                    fontWeight="normal"
                    fontSize={{
                    base: i18n.language === "fa" ? "1.5rem" : "1.7rem",
                    md: i18n.language === "fa" ? "1.5rem" : "2rem",
                    lg: i18n.language === "fa" ? "1.8rem" : "1.9rem",
                    xl: i18n.language === "fa" ? "1.8rem" : "2.2rem"
                    }}
                    fontFamily={i18n.language === 'fa' ? "'YekanBakh', sans-serif" : ''}
                    dir={i18n.language === 'fa' ? 'rtl' : 'ltr'}
                >
                    {t('downloadModaText')}
                </Text>
                </ModalHeader>
                <ModalBody>
                <Flex flexDirection="column" alignItems="center" gap={4}>
                    {/* Instagram Option */}
                    <HStack
                    cursor="pointer"
                    _hover={{ bg: 'gray.800' }}
                    p={2}
                    borderRadius="md"
                    onClick={() => {
                        handleDownload(`${downInstagram}`);
                    }}
                    >
                    <Icon as={BsArrowDown} size={30} />
                    <Text
                        as="span"
                        ml={6}
                        mr={6}
                        fontSize={{
                        base: i18n.language === "fa" ? "1.5rem" : "1.7rem",
                        md: i18n.language === "fa" ? "1.5rem" : "2rem",
                        lg: i18n.language === "fa" ? "1.8rem" : "1.9rem",
                        xl: i18n.language === "fa" ? "1.8rem" : "2.2rem"
                        }}
                        // fontWeight="bold"
                        fontFamily={i18n.language === 'fa' ? "'YekanBakh', sans-serif" : ''}
                        dir={i18n.language === 'fa' ? 'rtl' : 'ltr'}
                    >
                        {t('downloadModalInstagram')}
                    </Text>
                    <Icon as={FaInstagram} size={40} />
                    </HStack>

                    {/* Twitter Option */}
                    <HStack
                    cursor="pointer"
                    _hover={{ bg: 'gray.800' }}
                    p={2}
                    borderRadius="md"
                    onClick={() => {
                        handleDownload(`${downTwitter}`);
                    }}
                    >
                    <Icon as={BsArrowDown} size={30} />
                    <Text
                        as="span"
                        ml={6}
                        mr={6}
                        fontSize={{
                        base: i18n.language === "fa" ? "1.5rem" : "1.7rem",
                        md: i18n.language === "fa" ? "1.5rem" : "2rem",
                        lg: i18n.language === "fa" ? "1.8rem" : "1.9rem",
                        xl: i18n.language === "fa" ? "1.8rem" : "2.2rem"
                        }}
                        fontFamily={i18n.language === 'fa' ? "'YekanBakh', sans-serif" : ''}
                        dir={i18n.language === 'fa' ? 'rtl' : 'ltr'}
                    >
                        {t('downloadModalTwitter')}
                    </Text>
                    <Icon as={FaXTwitter} size={30} />
                    </HStack>
                </Flex>
                </ModalBody>
                <ModalFooter>
                <Button colorScheme="gray" onClick={onClose}>
                    <Text
                        as="span"
                        fontSize={{
                        base: i18n.language === "fa" ? "1.0rem" : "1.2rem",
                        md: i18n.language === "fa" ?   "1.0rem" : "1.5rem",
                        lg: i18n.language === "fa" ?   "1.3rem" : "1.5rem",
                        xl: i18n.language === "fa" ?   "1.3rem" : "1.9rem"
                        }}
                        fontFamily={i18n.language === 'fa' ? "'YekanBakh', sans-serif" : ''}
                        dir={i18n.language === 'fa' ? 'rtl' : 'ltr'}
                    >
                        {t('downloadModalClose')}
                    </Text>
                </Button>
                </ModalFooter>
            </ModalContent>
        </Modal>
    );
};

export default QuizDownloadModal;
