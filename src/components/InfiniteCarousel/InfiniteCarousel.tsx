import React, { useEffect, useRef } from 'react';
import './styles.css';
import gsap from 'gsap';
import CustomEase from 'gsap/CustomEase';
import { Box } from '@chakra-ui/react';
import {
    group_photo1,
    group_photo2,
    group_photo3,
    group_photo4,
    group_photo5,
    group_photo6,
    group_photo7,
    group_photo8,
    group_photo9,
    group_photo10,
    group_photo11,
    group_photo12,
    group_photo13,
    group_photo14,
    group_photo15,
    group_photo16,
    group_photo17,
    group_photo18,
    group_photo19,
    group_photo20,
    group_photo21,
    group_photo22,
    group_photo23,
    group_photo24,
    group_photo25,
} from '../../assets';

gsap.registerPlugin(CustomEase);

const slideTitles = [
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
];

const slideDescriptions = [
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
];

const totalSlides = slideTitles.length;

const InfiniteCarousel: React.FC = () => {
    const sliderRef = useRef<HTMLDivElement>(null);
    const mainImgRef = useRef<HTMLDivElement>(null);
    const titleRef = useRef<HTMLDivElement>(null);
    const descRef = useRef<HTMLDivElement>(null);
    const counterRef = useRef<HTMLDivElement>(null);

    const imageList = [
        group_photo2,
        group_photo2,
        group_photo3,
        group_photo4,
        group_photo5,
        group_photo6,
        group_photo7,
        group_photo8,
        group_photo9,
        group_photo10,
        group_photo11,
        group_photo12,
        group_photo13,
        group_photo14,
        group_photo15,
        group_photo16,
        group_photo17,
        group_photo18,
        group_photo19,
        group_photo20,
        group_photo21,
        group_photo22,
        group_photo23,
        group_photo24,
        group_photo25,
        group_photo1,
    ];

    useEffect(() => {
        let currentSlide = 1;
        let isAnimating = false;
        let scrollAllowed = true;
        let lastScrollTime = 0;
        let touchStartY = 0;
        let isTouchActive = false;

        const slider = sliderRef.current!;
        const mainImageContainer = mainImgRef.current!;
        const titleContainer = titleRef.current!;
        const descriptionContainer = descRef.current!;
        const counterContainer = counterRef.current!;

        // Helpers to create new slide elements
        const createSlide = (slideNumber: number, direction: 'down' | 'up') => {
            const slide = document.createElement('div');
            slide.className = 'slide';

            const slideBgImg = document.createElement('div');
            slideBgImg.className = 'slide-bg-img';

            const img = document.createElement('img');
            img.src = imageList[slideNumber];
            img.alt = '';

            slideBgImg.appendChild(img);
            slide.appendChild(slideBgImg);

            slideBgImg.style.clipPath =
                direction === 'down'
                    ? 'polygon(0% 100%, 100% 100%, 100% 100%, 0% 100%)'
                    : 'polygon(0% 0%, 100% 0%, 100% 0%, 0% 0%)';

            return slide;
        };

        const createMainImageWrapper = (slideNumber: number, direction: 'down' | 'up') => {
            const wrapper = document.createElement('div');
            wrapper.className = 'slide-main-img-wrapper';

            const img = document.createElement('img');
            img.src = imageList[slideNumber];
            img.alt = '';

            wrapper.appendChild(img);
            wrapper.style.clipPath =
                direction === 'down'
                    ? 'polygon(0% 0%, 100% 0%, 100% 0%, 0% 0%)'
                    : 'polygon(0% 100%, 100% 100%, 100% 100%, 0% 100%)';

            return wrapper;
        };

        const createTextElements = (slideNumber: number, direction: 'down' | 'up') => {
            const newTitle = document.createElement('h1');
            newTitle.textContent = slideTitles[slideNumber - 1];
            gsap.set(newTitle, { y: direction === 'down' ? 50 : -50 });

            const newDescription = document.createElement('p');
            newDescription.textContent = slideDescriptions[slideNumber - 1];
            gsap.set(newDescription, { y: direction === 'down' ? 20 : -20 });

            const newCounter = document.createElement('p');
            newCounter.textContent = String(slideNumber);
            gsap.set(newCounter, { y: direction === 'down' ? 18 : -18 });

            return { newTitle, newDescription, newCounter };
        };

        const animateSlide = (direction: 'down' | 'up') => {
            if (isAnimating || !scrollAllowed) return;
            isAnimating = true;
            scrollAllowed = false;

            const currentSlideElement = slider.querySelector('.slide')!;
            const currentMainWrapper = mainImageContainer.querySelector(
                '.slide-main-img-wrapper'
            )!;
            const currentTitle = titleContainer.querySelector('h1')!;
            const currentDescription = descriptionContainer.querySelector('p')!;
            const currentCounter = counterContainer.querySelector('.count p')!;

            currentSlide =
                direction === 'down'
                    ? currentSlide === totalSlides
                        ? 1
                        : currentSlide + 1
                    : currentSlide === 1
                        ? totalSlides
                        : currentSlide - 1;

            const newSlide = createSlide(currentSlide, direction);
            const newMainWrapper = createMainImageWrapper(currentSlide, direction);
            const { newTitle, newDescription, newCounter } = createTextElements(
                currentSlide,
                direction
            );

            slider.appendChild(newSlide);
            mainImageContainer.appendChild(newMainWrapper);
            titleContainer.appendChild(newTitle);
            descriptionContainer.appendChild(newDescription);
            const countDiv = counterContainer.querySelector('.count')!;
            countDiv.appendChild(newCounter);

            gsap.set(newMainWrapper.querySelector('img'), {
                y: direction === 'down' ? '-50%' : '50%',
            });

            const tl = gsap.timeline({
                onComplete: () => {
                    currentSlideElement.remove();
                    currentMainWrapper.remove();
                    currentTitle.remove();
                    currentDescription.remove();
                    currentCounter.remove();
                    isAnimating = false;
                    setTimeout(() => {
                        scrollAllowed = true;
                        lastScrollTime = Date.now();
                    }, 100);
                },
            });

            const ease = CustomEase.create('', '.87,0,.13,1');
            tl.to(newSlide.querySelector('.slide-bg-img'), { clipPath: direction === 'down' ? 'polygon(0% 100%, 100% 100%, 100% 0%, 0% 0%)' : 'polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)', duration: 1.25, ease }, 0)
                .to(currentSlideElement.querySelector('img'), { scale: 1.5, duration: 1.25, ease }, 0)
                .to(newMainWrapper, { clipPath: direction === 'down' ? 'polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)' : 'polygon(0% 100%, 100% 100%, 100% 0%, 0% 0%)', duration: 1.25, ease }, 0)
                .to(currentMainWrapper.querySelector('img'), { y: direction === 'down' ? '50%' : '-50%', duration: 1.25, ease }, 0)
                .to(newMainWrapper.querySelector('img'), { y: '0%', duration: 1.25, ease }, 0)
                .to(currentTitle, { y: direction === 'down' ? -50 : 50, duration: 1.25, ease }, 0)
                .to(newTitle, { y: 0, duration: 1.25, ease }, 0)
                .to(currentDescription, { y: direction === 'down' ? -20 : 20, duration: 1.25, ease }, 0)
                .to(newDescription, { y: 0, duration: 1.25, ease }, 0)
                .to(currentCounter, { y: direction === 'down' ? -18 : 18, duration: 1.25, ease }, 0)
                .to(newCounter, { y: 0, duration: 1.25, ease }, 0);
        };

        const handleScroll = (direction: 'down' | 'up') => {
            const now = Date.now();
            if (isAnimating || !scrollAllowed || now - lastScrollTime < 1000) return;
            lastScrollTime = now;
            animateSlide(direction);
        };

        // Mouse wheel
        const onWheel = (e: WheelEvent) => {
            e.preventDefault();
            handleScroll(e.deltaY > 0 ? 'down' : 'up');
        };

        // Touch events
        const onTouchStart = (e: TouchEvent) => { touchStartY = e.touches[0].clientY; isTouchActive = true; };
        const onTouchMove = (e: TouchEvent) => {
            if (!isTouchActive || isAnimating || !scrollAllowed) return;
            const diff = touchStartY - e.touches[0].clientY;
            if (Math.abs(diff) > 10) {
                isTouchActive = false;
                handleScroll(diff > 0 ? 'down' : 'up');
            }
        };
        const onTouchEnd = () => { isTouchActive = false; };

        window.addEventListener('wheel', onWheel, { passive: false });
        window.addEventListener('touchstart', onTouchStart, { passive: false });
        window.addEventListener('touchmove', onTouchMove, { passive: false });
        window.addEventListener('touchend', onTouchEnd);

        return () => {
            window.removeEventListener('wheel', onWheel);
            window.removeEventListener('touchstart', onTouchStart);
            window.removeEventListener('touchmove', onTouchMove);
            window.removeEventListener('touchend', onTouchEnd);
        };
    }, []);

    return (
        <Box
            width="100%"
            overflow="hidden"
        >
            <div className="slider-counter" ref={counterRef}>
                <div className="count" style={{ display: "none" }} ><p>1</p></div>
            </div>

            <div className="slider" ref={sliderRef}>
                {/* Initial slide */}
                <div className="slide">
                    <div className="slide-bg-img">
                        <img src={group_photo2} alt="" />
                    </div>
                </div>
                <div className="slide-main-img" ref={mainImgRef}>
                    <div className="slide-main-img-wrapper">
                        <img src={group_photo2} alt="" />
                    </div>
                </div>
                <div className="slide-copy">
                    <div className="slide-title" ref={titleRef}>
                        <h1></h1>
                    </div>
                    <div className="slide-description" ref={descRef}>
                        <p></p>
                    </div>
                </div>
            </div>
        </Box>
    );
};

export default InfiniteCarousel;