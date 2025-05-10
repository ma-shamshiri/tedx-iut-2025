import React, { useEffect, useState } from 'react';
import {
    Box,
    HStack,
    Text,
    useBreakpointValue,
    Image,
} from '@chakra-ui/react';
import { IUT_logo, IUT_logo_white } from '../../assets';

const BlockScrollingText: React.FC = () => {
    const [offset, setOffset] = useState(0);
    const textSize = useBreakpointValue({ base: "2rem", md: "3.5rem", lg: "5rem", xl: "6rem" });
    const logoSize = useBreakpointValue({ base: "4.5rem", md: "7rem", lg: "10rem", xl: "10rem" });

    useEffect(() => {
        const handleScroll = () => {
            setOffset(window.pageYOffset);
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    // Repeat pattern: text - image - text - image ...
    const repeatCount = 4;
    const text = "تداِکس دانشگاه صنعتی اصفهان";

    return (
        <Box
            position="relative"
            display="flex"
            justifyContent="center"
            alignItems="center"
            bg="#000"
            height={{ base: "12rem", lg: "18rem" }}
            overflow="hidden"
        >
            <HStack>
                <Box
                    display="flex"
                    alignItems="center"
                    style={{
                        transform: `translateX(${offset * -1}px)`,
                        transition: 'transform 0.6s ease-out',
                    }}
                    paddingX="2rem"
                    whiteSpace="nowrap"
                    dir="rtl"
                >
                    {Array.from({ length: repeatCount }).map((_, idx) => (
                        <React.Fragment key={idx}>
                            <Text
                                as="span"
                                color="#fff"
                                fontSize={textSize}
                                fontFamily={"'Rubik', sans-serif"}
                                fontWeight="bold"
                                mx={8}
                            >
                                {text}
                            </Text>
                            {/* Image between texts */}
                            <Image
                                src={IUT_logo_white}
                                alt="TEDx Logo"
                                display="inline"
                                mx={2}
                                height={logoSize}
                                width="auto"
                                style={{ verticalAlign: "middle" }}
                            />
                            <Text
                                as="span"
                                color="#fff"
                                fontSize={textSize}
                                fontFamily={"'Rubik', sans-serif"}
                                fontWeight="bold"
                                mx={8}
                            >
                                {text}
                            </Text>
                            <Image
                                src={IUT_logo_white}
                                alt="TEDx Logo"
                                display="inline"
                                mx={2}
                                height={logoSize}
                                width="auto"
                                style={{ verticalAlign: "middle" }}
                            />
                        </React.Fragment>
                    ))}
                </Box>
            </HStack>
        </Box>
    );
};

export default BlockScrollingText;
