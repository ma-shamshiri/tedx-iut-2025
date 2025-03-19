import React, { useState } from 'react';
import { Box, useBreakpointValue } from "@chakra-ui/react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import CarouselCard from "./CarouselCard";
import { IoIosArrowDroprightCircle } from "react-icons/io";
import { IoIosArrowDropleftCircle } from "react-icons/io";
import { teamData } from "./teamCarouselData";
import { useTranslation } from 'react-i18next';

interface ArrowProps {
    className?: string;
    style?: React.CSSProperties;
    onClick?: () => void;
}
const SampleNextArrow: React.FC<ArrowProps> = ({ className, style, onClick }) => {
    return (
        <Box
            className="slick-arrow"
            position="absolute"
            right={{ base: "-37px", lg: "-70px" }}
            top="50%"
            transform="translateY(-50%)"
            display="block"
            onClick={onClick}
            cursor="pointer"
            _hover={{
                svg: { color: "red" }
            }}
        >
            <IoIosArrowDroprightCircle size={useBreakpointValue({ base: "30px", lg: "45px" })} color="#904ff7" />
        </Box>
    );
};

const SamplePrevArrow: React.FC<ArrowProps> = ({ className, style, onClick }) => {

    return (
        <Box
            className="slick-arrow"
            position="absolute"
            left={{ base: "-37px", lg: "-70px" }}
            top="50%"
            transform="translateY(-50%)"
            display="block"
            onClick={onClick}
            cursor="pointer"
        >
            <IoIosArrowDropleftCircle size={useBreakpointValue({ base: "30px", lg: "45px" })} color="#904ff7" />
        </Box>
    );
};


export const BlockTeamCarousel: React.FC = () => {
    const { t } = useTranslation();

    const [centerSlide, setCenterSlide] = useState<number>(0);

    const settings = {
        dots: true,
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        centerMode: true,
        // autoplay: true,
        // cssEase: "linear",
        // speed: 2000,
        // autoplaySpeed: 2000,
        speed: 800,
        // pauseOnHover: true,
        focusOnSelect: true,
        afterChange: (current: number) => setCenterSlide(current),
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />,
        appendDots: (dots: React.ReactNode) => (
            <Box
                padding="10px"
                position="absolute"
                bottom={{ base: "-100", lg: "-59" }}
            >
                <Box margin="0">{dots}</Box>
            </Box>
        ),
        customPaging: (i: number) => (
            <div
                style={{
                    width: '15px',
                    height: '15px',
                    borderRadius: '100%',
                    backgroundColor: i === centerSlide ? 'gold' : '#904FF7',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                }}
            >
                <span
                    style={{
                        width: '7px',
                        height: '7px',
                        borderRadius: '50%',
                        backgroundColor: i === centerSlide ? 'black' : '#0E0E29',
                    }}
                ></span>
            </div>
        ),
        responsive: [
            {
                breakpoint: 1400,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    centerMode: false,
                }
            }
        ],
    };
    return (
        <Box
            width={{ base: "95%", md: "50%", lg: "60%", xl: "85%" }}
            marginX="auto"
            padding="2rem"
        >
            <Slider
                {...settings}
            >
                {teamData.map((d, index) => (
                    <Box
                        key={d.name}
                        padding={{ base: "0", lg: "1rem" }}
                        transition="opacity 0.6s ease"
                        opacity={centerSlide === index ? 1 : 0.2}
                        width="100%"
                    >
                        <CarouselCard
                            name={d.name}
                            title={d.title}
                            avatarUrl={d.avatarUrl}
                            profileUrl={d.profileUrl}
                            badgeText={d.badgeText}
                            badgeTextColor={d.badgeTextColor}
                            badgeBackgroundColor={d.badgeBackgroundColor}
                            badgeBorderColor={d.badgeBorderColor}
                            starColor={d.starColor}
                            testimonial={t(d.testimonial)}
                        />
                    </Box>
                ))}
            </Slider>
        </Box>
    );
}

// export default App;