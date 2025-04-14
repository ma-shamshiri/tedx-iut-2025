import React, { useState, useEffect, useRef } from 'react';
import { Box, IconButton } from '@chakra-ui/react';
import { AiOutlineArrowLeft, AiOutlineArrowRight } from 'react-icons/ai';
import TeamMemberCarouselCard from './TeamMemberCarouselCard';
import { teamMembersData } from './data';

const ITEMS_TO_SHOW = 5; // how many items are visible at once

const TeamMemberCarousel: React.FC = () => {
  const totalItems = teamMembersData.length;
  const [centerIndex, setCenterIndex] = useState(0);

  // For auto-play
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);

  useEffect(() => {
    startAutoPlay();
    return stopAutoPlay;
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const startAutoPlay = () => {
    if (!intervalRef.current) {
      intervalRef.current = setInterval(() => {
        handleNext();
      }, 3000); // change duration as needed
    }
  };

  const stopAutoPlay = () => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
    }
  };

  const handlePrev = () => {
    setCenterIndex((prev) => (prev - 1 + totalItems) % totalItems);
  };

  const handleNext = () => {
    setCenterIndex((prev) => (prev + 1) % totalItems);
  };

  const visibleIndices = Array.from({ length: ITEMS_TO_SHOW }, (_, i) => {
    const offset = i - Math.floor(ITEMS_TO_SHOW / 2);
    return (centerIndex + offset + totalItems) % totalItems;
  });

  return (
    <Box
      position="relative"
      width="100%"
      height="400px" 
      overflow="hidden"
      onMouseEnter={stopAutoPlay}
      onMouseLeave={startAutoPlay}
    >
      <IconButton
        icon={<AiOutlineArrowLeft />}
        aria-label="Previous"
        position="absolute"
        top="50%"
        left="40px"
        transform="translateY(-50%)"
        zIndex={20}
        bg="red.500"
        color="white"
        _hover={{ bg: 'red.600', transform: 'translateY(-50%) scale(1.1)' }}
        onClick={handlePrev}
      />

      <IconButton
        icon={<AiOutlineArrowRight />}
        aria-label="Next"
        position="absolute"
        top="50%"
        right="40px"
        transform="translateY(-50%)"
        zIndex={20}
        bg="red.500"
        color="white"
        _hover={{ bg: 'red.600', transform: 'translateY(-50%) scale(1.1)' }}
        onClick={handleNext}
      />

      {visibleIndices.map((itemIndex, idx) => {
        const offset = idx - Math.floor(ITEMS_TO_SHOW / 2);

        let opacity = 1;
        let scale = 1;
        let zIndex = 5 - Math.abs(offset);

        if (Math.abs(offset) === 2) {
          opacity = 0.4;
          scale = 0.8;
        }
        else if (Math.abs(offset) === 1) {
          opacity = 0.7;
          scale = 0.9;
        }

        const xOffset = offset * 250;

        return (
          <Box
            key={teamMembersData[itemIndex].id}
            position="absolute"
            top="50%"
            left="50%"
            transform={`translate(-50%, -50%) translateX(${xOffset}px) scale(${scale})`}
            transition="all 0.7s cubic-bezier(0.25, 0.46, 0.45, 0.94)"
            style={{ opacity, zIndex }}
          >
            <TeamMemberCarouselCard member={teamMembersData[itemIndex]} />
          </Box>
        );
      })}
    </Box>
  );
};

export default TeamMemberCarousel;
