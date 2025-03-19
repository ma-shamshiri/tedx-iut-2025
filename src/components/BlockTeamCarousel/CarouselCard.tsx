import React, { useState } from 'react';
import { useColorMode } from '@chakra-ui/react';
import {
    Box,
    Text,
    Avatar,
    VStack,
    HStack,
    Flex,
    useColorModeValue,
    Link,
    useBreakpointValue
} from '@chakra-ui/react';
import { Link as RouterLink } from "react-router-dom";
import Badges from './Badges';
import { BsPersonLinesFill } from "react-icons/bs";
import { useTranslation } from "react-i18next";
import { IoMdStar } from 'react-icons/io';

interface CarouselCardProps {
    name?: string;
    title?: string;
    avatarUrl?: string;
    profileUrl?: string;
    badgeText?: string;
    badgeTextColor?: { light: string; dark: string };
    badgeBackgroundColor?: { light: string; dark: string };
    badgeBorderColor?: { light: string; dark: string };
    starColor?: { light: string; dark: string };
    testimonial?: string;
}

const CarouselCard: React.FC<CarouselCardProps> = ({
    name,
    title,
    avatarUrl,
    profileUrl,
    badgeText = 'role',
    badgeTextColor = { light: 'black', dark: 'white' },
    badgeBackgroundColor = { light: 'dodgerblue', dark: 'dodgerblue' },
    badgeBorderColor = { light: 'blue', dark: 'blue' },
    starColor = { light: 'white', dark: 'white' },
    testimonial,
}) => {
    const { t } = useTranslation();

    const { colorMode } = useColorMode();

    const [isHoveredButton, setIsHoveredButton] = useState(false);

    const handleHoverButton = () => {
        setIsHoveredButton(true);
    };

    const handleUnHoverButton = () => {
        setIsHoveredButton(false);
    };

    const isLargeScreen = useBreakpointValue({ base: false, lg: true });

    const iconSize = useBreakpointValue({ base: "20px", md: "20px", lg: "20px" });
    const starSize = useBreakpointValue({ base: "20px", lg: "24px" });

    const iconColor = isHoveredButton
        ? (colorMode === 'dark' ? 'white' : '#7B4CF6')
        : 'white';

    // const starIconColor = useColorModeValue(starColor.light, starColor.dark);

    const cardBackgroundColor = useColorModeValue(
        "linear-gradient(to right bottom, silver, silver, #ededed, #ededed)",
        "linear-gradient(to right bottom, #0e0e29, #0e0e29, #272763, #272763)"
    );

    const separatorColor = useColorModeValue(
        // "linear-gradient(to left, transparent, #7C42F3, transparent",
        "linear-gradient(to left, transparent, #000, transparent",
        "linear-gradient(to left, transparent, #9E7CFF, transparent"
    );

    return (
        <Box
            display="flex"
            justifyContent="center"
            alignItems="center"
            width="100%"
            position="relative"
        >
            <Box
                className='carouselCard'
                width="100%"
                height="fit-content"
                minW="30rem"
                maxW="50rem"
                minH="37.5rem"
                bg={cardBackgroundColor}
                color="white"
                padding="1.5rem"
                borderRadius="7px"
                boxShadow={useColorModeValue(
                    "0 0 20px 5px rgba(0, 0, 0, 0.1)",  // Light mode boxShadow
                    "0 0 20px 5px rgba(0, 0, 0, 0.2)"  // Dark mode boxShadow
                )}
            >
                <VStack spacing={10} align="right">
                    {isLargeScreen ? (
                        <HStack spacing={4}>
                            <Avatar
                                name={name}
                                src={avatarUrl}
                                width="9rem"
                                height="9rem"
                                transition="0.2s ease-in-out"
                                _hover={{
                                    transform: "scale(1.08)",
                                }}
                            />
                            <VStack
                                align="start"
                                spacing={7}
                            >
                                <Text
                                    className='name'
                                    fontSize="1.8rem"
                                    fontWeight="bold"
                                    color={useColorModeValue("gray.900", "gray.50")}
                                    textAlign="center"
                                >
                                    {name}
                                </Text>

                                <HStack>
                                    <IoMdStar
                                        size={starSize}
                                        color={useColorModeValue(starColor.light, starColor.dark)}
                                    />
                                    <Badges
                                        text={badgeText}
                                        textColor={{ light: badgeTextColor.light, dark: badgeTextColor.dark }}
                                        backgroundColor={{ light: badgeBackgroundColor.light, dark: badgeBackgroundColor.dark }}
                                        borderColor={{ light: badgeBorderColor.light, dark: badgeBorderColor.dark }}
                                    />
                                </HStack>
                            </VStack>
                        </HStack>
                    ) : (
                        <VStack spacing={4} align="center">
                            <Avatar
                                name={name}
                                src={avatarUrl}
                                width="10rem"
                                height="10rem"
                            />

                            <VStack
                                align="center"
                                spacing="2rem"
                                paddingTop="1rem"
                                // width="70%"
                                maxWidth="10rem"
                            >
                                <Text
                                    className='name'
                                    fontSize="1.4rem"
                                    fontWeight="bold"
                                    color={useColorModeValue("gray.900", "gray.50")}
                                    textAlign="center"
                                >
                                    {name}
                                </Text>
                                <HStack>
                                    <IoMdStar
                                        size={starSize}
                                        color={useColorModeValue(starColor.light, starColor.dark)}
                                    />
                                    <Badges
                                        text={badgeText}
                                        textColor={{ light: badgeTextColor.light, dark: badgeTextColor.dark }}
                                        backgroundColor={{ light: badgeBackgroundColor.light, dark: badgeBackgroundColor.dark }}
                                        borderColor={{ light: badgeBorderColor.light, dark: badgeBorderColor.dark }}
                                    />
                                    <IoMdStar
                                        size={starSize}
                                        color={useColorModeValue(starColor.light, starColor.dark)}
                                    />
                                </HStack>
                            </VStack>
                        </VStack>
                    )}

                    <Flex className='separatorContainer' justifyContent="center" alignItems="center">
                        <Box
                            className="separator"
                            width="30rem"
                            height="1px"
                            style={{
                                background: separatorColor,
                            }}
                        />
                    </Flex>

                    <Text
                        className='testimonial'
                        fontSize={{ base: "1.3rem", lg: "1.6rem" }}
                        color={useColorModeValue("gray.900", "gray.300")}
                        textAlign="left"
                        paddingX={{ base: "3rem" }}
                    >
                        &ldquo;{testimonial}&rdquo;
                    </Text>

                    <Box
                        className="buttonContainer"
                        display="flex"
                        justifyContent="center"
                        alignItems="center"
                    >
                        <Link
                            className="button"
                            position="relative"
                            as={RouterLink}
                            to={profileUrl}
                            // href={profileUrl}
                            width={{ base: "50%", lg: "11rem" }}
                            bg="#7B4CF6"
                            color="#fff"
                            fontSize={{ base: "2rem", lg: "1.5rem" }}
                            padding="0.5rem"
                            border="2px solid #7B4CF6"
                            borderRadius="3px"
                            cursor="pointer"
                            _hover={{
                                bg: "transparent",
                                color: "#7B4CF6",
                                _dark: {
                                    color: "white"
                                },
                            }}
                            transition="background-color 0.2s ease-out"
                            onMouseEnter={handleHoverButton}
                            onMouseLeave={handleUnHoverButton}
                        >
                            <HStack justifyContent="center" alignItems="center">
                                <BsPersonLinesFill size={iconSize} color={iconColor} />

                                <Text
                                    fontSize={{ base: "1rem", lg: "1.2rem" }}
                                    fontWeight="bold"
                                    textAlign="center"
                                >
                                    {t("seeProfile")}
                                </Text>
                            </HStack>
                        </Link>
                    </Box>
                </VStack>
            </Box>
        </Box>
    );
};

export default CarouselCard;
