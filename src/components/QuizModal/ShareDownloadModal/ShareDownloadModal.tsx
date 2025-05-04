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
  Box,
} from '@chakra-ui/react';
import { useTranslation } from 'react-i18next';
import { BsArrowDown } from 'react-icons/bs';
import { FaShareAlt, FaWhatsapp, FaLinkedin, FaTelegram, FaInstagram } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';
import { PersonalityElement } from '../data';

import {
  downInstagram,
  downTwitter,
} from "../../../assets";

interface ShareDownloadModal {
    isOpen: boolean;
    onClose: () => void;
    action: 'download' | 'share' | null;
    resultElement: PersonalityElement | null;
}
  
const ShareDownloadModal: React.FC<ShareDownloadModal> = ({ isOpen, onClose, action, resultElement }) => {
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
                    {action === 'download' ? (
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
                    ) : (
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
                    )}
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

export default ShareDownloadModal;
