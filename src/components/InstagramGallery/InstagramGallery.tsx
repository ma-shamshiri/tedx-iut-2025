import React, { useState } from "react";
import Slider from "react-slick";
import {
    Box,
    Image,
    Heading,
    useBreakpointValue,
} from "@chakra-ui/react";
import { instagramPosts } from "./data";
import { FaInstagram } from "react-icons/fa";
import { motion } from "framer-motion";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useTranslation } from "react-i18next";

const MotionBox = motion(Box);

interface InstagramSlideProps {
    post: {
        id: string;
        imageUrl: string;
        caption: string;
        videoUrl: string;
    };
}

const CustomPrevArrow = (props: any) => {
    const { className, style, onClick } = props;
    return (
        <Box
            className={className}
            onClick={onClick}
            style={{ ...style, colorScheme: "red", left: "5px", zIndex: 10, display: "block" }}
        />
    );
};

const CustomNextArrow = (props: any) => {
    const { className, style, onClick } = props;
    return (
        <Box
            className={className}
            onClick={onClick}
            style={{ ...style, right: "5px", zIndex: 10, display: "block" }}
        />
    );
};

const InstagramSlide: React.FC<InstagramSlideProps> = ({ post }) => {
    const [videoPlayed, setVideoPlayed] = useState(false);
    const [isHovered, setIsHovered] = useState(false);

    const handleCoverClick = () => {
        if (!videoPlayed) {
            setVideoPlayed(true);
        }
    };

    return (
        <Box p="1rem">
            <Box
                width={{ base: "95%", md: "320px" }}
                mx="auto"
                position="relative"
                borderRadius="10px"
                overflow="hidden"
                boxShadow="0 4px 12px rgba(0,0,0,0.3)"
                border={"2px solid #320701"}
            >
                <Image
                    src={post.imageUrl}
                    alt={post.caption}
                    width="100%"
                    height="auto"
                    objectFit="cover"
                    display="block"
                />

                <Box
                    position="absolute"
                    top="0"
                    left="0"
                    width="100%"
                    height="100%"
                >
                    <iframe
                        src={post.videoUrl}
                        title={`Video ${post.id}`}
                        style={{
                            width: "100%",
                            height: "100%",
                            border: "none",
                        }}
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                    />
                </Box>

                <MotionBox
                    position="absolute"
                    top="0"
                    left="0"
                    width="100%"
                    height="100%"
                    initial={{ opacity: 1 }}
                    animate={{ opacity: videoPlayed ? 0 : isHovered ? 0 : 1 }}
                    transition={{ duration: 0.5, ease: "easeInOut" }}
                    zIndex={2}
                    onClick={handleCoverClick}
                    onMouseEnter={() => setIsHovered(true)}
                    onMouseLeave={() => setIsHovered(false)}
                    style={{ pointerEvents: videoPlayed ? "none" : "auto" }}
                >
                    <Image
                        src={post.imageUrl}
                        alt={post.caption}
                        width="100%"
                        height="100%"
                        objectFit="cover"
                    />
                </MotionBox>
            </Box>
        </Box>
    );
};

const InstagramGallery: React.FC = () => {
    const { t, i18n } = useTranslation();

    const slidesToShow = useBreakpointValue({ base: 1, md: 2, lg: 3 }) || 1;

    const settings = {
        dots: false,
        infinite: true,
        speed: 1500,
        cssEase: "ease-in-out",
        slidesToShow: slidesToShow,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2800,
        pauseOnHover: true,
        // arrows: true,
        nextArrow: <CustomNextArrow />,
        prevArrow: <CustomPrevArrow />,
    };

    return (
        <Box as="section" py="4rem" px="2rem">
            <Heading
                as="h2"
                textAlign="center"
                marginY={{ base: "4rem", lg: "6rem" }}
                color="#FFF"
                fontWeight="bold"
                fontSize={{ base: "1.8rem", md: "2.4rem" }}
                fontFamily={i18n.language === "fa" ? "'YekanBakh', sans-serif" : ""}
                dir={i18n.language === "fa" ? "rtl" : "ltr"}
            >
                {t("instagramGalleryTitle2")}
            </Heading>
            <Box maxW="1400px" mx="auto">
                <Slider {...settings}>
                    {instagramPosts.map((post) => (
                        <InstagramSlide key={post.id} post={post} />
                    ))}
                </Slider>
            </Box>
        </Box>
    );
};

export default InstagramGallery;
