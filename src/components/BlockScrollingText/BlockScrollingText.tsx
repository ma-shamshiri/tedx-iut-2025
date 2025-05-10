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
    const textSize = useBreakpointValue({ base: "1.8rem", md: "2rem", lg: "2.2rem", xl: "2.2rem" });
    const logoSize = useBreakpointValue({ base: "4.0rem", md: "5rem", lg: "6rem", xl: "6.5rem" });

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
    const repeatCount = 1;
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
                                fontFamily={"'IRANSans', sans-serif"}
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
