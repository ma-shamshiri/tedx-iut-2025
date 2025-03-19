import React from 'react';
import { Box, Link, Image, Text } from '@chakra-ui/react';
import { slides } from './data';

const Nav: React.FC = () => {
    const handleMouseMove = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
        const nav = document.getElementById('nav');
        if (nav) {
            const percent = e.clientX / window.innerWidth;
            nav.animate(
                {
                    transform: `translateX(${percent * nav.offsetWidth * -1}px)`,
                },
                {
                    fill: 'forwards',
                    duration: 4000,
                }
            );
        }
    };

    return (
        <Box
            position="relative"
            width="100%"
            height="100vh"
        >
            <Box
                id="nav"
                position="absolute"
                top="40%"
                left="50%"
                transform="translate(-50%, -50%)"
                display="flex"
                flexDirection="row"
                onMouseMove={handleMouseMove}
            >
                {slides.map((slide, index) => (
                    <Link
                        key={index}
                        href={slide.profileSrc}
                        color="rgb(184, 184, 184)"
                        fontFamily='"Neue Montreal", Arial, Helvetica, sans-serif'
                        textDecoration="none"
                        position="relative"
                        textTransform="uppercase"
                        padding="2em 0.4em"
                        fontWeight="500"
                        textAlign="center"
                        _hover={{
                            color: '#fff',
                        }}
                    >
                        <Text
                            position="relative"
                            zIndex="2"
                            width="400px"
                        >
                            {slide.fullName}
                        </Text>
                        <Box
                            className="img-wrapper"
                            position="absolute"
                            opacity="0"
                            transform="translate(-50%, -50%) scale(0.5)"
                            transition="all 250ms"
                            pointerEvents="none"
                            width="300px"
                            height="400px"
                            overflow="hidden"
                            _hover={{
                                opacity: 1,
                                transform: 'translate(-50%, -50%) scale(1)',
                            }}
                        >
                            <Image
                                src={slide.imageSrc}
                                alt={slide.fullName}
                                position="absolute"
                                opacity="0"
                                top="0"
                                left="0"
                                transform="scale(2.5)"
                                transition="transform 200ms cubic-bezier(0.075, 0.82, 0.165, 1), opacity 250ms"
                                pointerEvents="none"
                                width="100%"
                                height="100%"
                                objectFit="contain"
                                _hover={{
                                    opacity: 1,
                                    transform: 'scale(1.5)',
                                }}
                            />
                        </Box>
                    </Link>
                ))}
            </Box>
        </Box>
    );
};

export default Nav;
