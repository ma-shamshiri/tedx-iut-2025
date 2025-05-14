import React, { useRef, useState } from "react";
import Slider from "react-slick";
import {
    Box,
    Image,
    Heading,
    useBreakpointValue,
} from "@chakra-ui/react";
import { speakers } from "./data";
import { motion } from "framer-motion";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useTranslation } from "react-i18next";

const MotionBox = motion(Box);

interface SpeakerSlideProps {
    speaker: {
        id: string;
        imageUrl: string;
        name: string;
        description: string;
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

const titleVariants: { [key: string]: any } = {
    initial: {
        y: 60,
        opacity: 0,
    },
    animate: {
        y: 0,
        opacity: 1,
        transition: {
            duration: 0.6,
            ease: "easeInOut",
        },
    },
};

const SpeakerSlide: React.FC<SpeakerSlideProps> = ({ speaker }) => {
    const [videoPlayed, setVideoPlayed] = useState(false);

    return (
        <Box p="1rem">
            <Box
                // width={{ base: "95%", md: "95%" }}
                mx="auto"
                position="relative"
                borderRadius="10px"
                overflow="hidden"
                boxShadow="0 0 20px 1px #404040"
                border={"2px solid #800000"}
                aspectRatio="1/1"
            >
                <Image
                    src={speaker.imageUrl}
                    alt={speaker.name}
                    width="100%"
                    height="100%"
                    objectFit="cover"
                    objectPosition="center 15%"
                    display="block"
                    transition="all 0.3s ease"
                    _hover={{
                        filter: "brightness(1.1) contrast(1.1)",
                        transform: "scale(1.03)"
                    }}
                />
            </Box>
        </Box>
    );
};

const Speakers: React.FC = () => {
    const { t, i18n } = useTranslation();

    const ref = useRef<HTMLDivElement>(null);

    const slidesToShow = useBreakpointValue({ base: 1, md: 2, lg: 3 }) || 1;

    const settings = {
        dots: false,
        infinite: true,
        speed: 1500,
        cssEase: "ease-in-out",
        slidesToShow: slidesToShow,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 8000,
        pauseOnHover: true,
        // arrows: true,
        nextArrow: <CustomNextArrow />,
        prevArrow: <CustomPrevArrow />,
    };

    return (
        <Box
            as="section"
            // bgGradient="radial(circle at center, rgba(229,62,62,1) 0%, rgba(229,62,62,0.2) 40%, rgba(0,0,0,1) 100%)"
            bg="#000"
            paddingBottom="5rem"
            px="2rem"
            width="100%"
            overflow="hidden"
        >
            <motion.div
                ref={ref}
                variants={titleVariants}
                initial="initial"
                whileInView="animate"
            >
                <Heading
                    as="h2"
                    textAlign="center"
                    marginBottom={{ base: "1rem", lg: "2rem" }}
                    color="#FFF"
                    fontWeight="bold"
                    fontSize={{ base: "2rem", md: "2.7rem", lg: "3.4rem" }}
                    fontFamily={i18n.language === "fa" ? "'IRANSans', sans-serif" : ""}
                    dir={i18n.language === "fa" ? "rtl" : "ltr"}
                >
                    {t("speakersTitle")}
                </Heading>
            </motion.div>
            <Box
                maxW="1400px"
                mx="auto"
                marginBottom={{ base: "2rem", lg: "6rem" }}
            >
                <Slider {...settings}>
                    {speakers.map((speaker) => (
                        <SpeakerSlide key={speaker.id} speaker={speaker} />
                    ))}
                </Slider>
            </Box>
        </Box>
    );
};

export default Speakers;
