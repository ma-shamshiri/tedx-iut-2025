import React from "react";
import {
    Box,
    Text,
    Link,
    useBreakpointValue,
    Heading,
} from "@chakra-ui/react";
import { motion } from "framer-motion";
import { instagramPosts } from "./data";
import { FaInstagram } from "react-icons/fa";

// Chakra + Framer
const MotionBox = motion(Box);

const InstagramGallery2: React.FC = () => {
    // Decide how many columns at each breakpoint
    const columnCount = useBreakpointValue({ base: 1, md: 2, lg: 3 });

    return (
        <Box as="section" bg="#000" py="4rem" px="2rem">
            <Heading
                as="h2"
                textAlign="center"
                mb="2rem"
                color="#FFF"
                fontWeight="bold"
                fontSize={{ base: "1.8rem", md: "2.4rem" }}
            >
                فعالیت‌های اینستاگرام TEDx
            </Heading>

            {/* Masonry container using CSS columns */}
            <Box
                // Make a "masonry" layout by controlling columnCount and columnGap in CSS
                sx={{
                    columnCount: columnCount,
                    columnGap: "1rem",
                }}
                // Provide fallback for older browsers if needed
                style={{ columnCount: columnCount }}
                margin="0 auto"
                maxW="1100px"
            >
                {instagramPosts.map((post) => (
                    <MotionBox

                        key={post.id}
                        // Each item must be "display: inline-block" to properly flow in columns
                        display="inline-block"
                        width="100%"
                        mb="1rem"
                        position="relative"
                        borderRadius="md"
                        overflow="hidden"
                        bg="#fff"
                        // Card styling & hover scale
                        whileHover={{ scale: 1.02 }}
                        transition="0.3s"
                        boxShadow="0 4px 12px rgba(0,0,0,0.3)"
                    >
                        <Link href={post.link} isExternal>
                            {/* Use the natural aspect ratio: w=100%, h=auto */}
                            <Box as="img"
                                src={post.imageUrl}
                                alt={post.caption}
                                width="100%"
                                height="auto"
                            />
                            {/* Hover overlay with brand accent */}
                            <Box
                                position="absolute"
                                bottom="0"
                                left="0"
                                width="100%"
                                bg="rgba(0,0,0,0.6)"
                                color="#FFF"
                                p="0.5rem"
                                opacity="0"
                                _hover={{ opacity: 1 }}
                                transition="opacity 0.3s ease"
                            >
                                <Box display="flex" alignItems="center" gap="0.5rem">
                                    <Box as={FaInstagram} color="#CB0000" />
                                    <Text fontSize="sm" fontWeight="bold">
                                        {post.caption}
                                    </Text>
                                </Box>
                            </Box>
                        </Link>
                    </MotionBox>
                ))}
            </Box>
        </Box>
    );
};

export default InstagramGallery2;
