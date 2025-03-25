// TeamMemberCarouselCard.tsx
import React from 'react';
import {
    Box,
    Flex,
    Image,
    Link,
    Text,
    IconButton,
    useColorModeValue,
} from '@chakra-ui/react';
import { FiLinkedin, FiTwitter, FiMail } from 'react-icons/fi';
import { TeamMember } from './data';

interface TeamMemberCarouselCardProps {
    member: TeamMember;
}

const TeamMemberCarouselCard: React.FC<TeamMemberCarouselCardProps> = ({ member }) => {
    const cardBg = useColorModeValue('white', 'gray.700');
    const overlayBg = 'linear-gradient(to top, rgba(0, 0, 0, 0.7), transparent)';

    return (
        <Box
            position="relative"
            width="220px"
            height="280px"
            borderRadius="lg"
            overflow="hidden"
            bg={cardBg}
            boxShadow="lg"
            _hover={{ transform: 'scale(1.03)' }}
            transition="transform 0.4s ease"
            role="group"
        >
            {member.image && (
                <Image
                    src={member.image}
                    alt={member.name}
                    objectFit="cover"
                    width="100%"
                    height="100%"
                />
            )}

            {/* Hover Overlay */}
            <Flex
                direction="column"
                justify="flex-end"
                align="center"
                position="absolute"
                bottom="0"
                left="0"
                width="100%"
                height="100%"
                opacity="0"
                bgGradient={overlayBg}
                transition="opacity 0.4s ease"
                _groupHover={{ opacity: 1 }}
                p={4}
            >
                <Text fontSize="xl" fontWeight="bold" color="white" mb={1}>
                    {member.name}
                </Text>
                <Text fontSize="sm" color="gray.200" mb={2}>
                    {member.title}
                </Text>

                <Flex gap={2}>
                    {member.linkedinAddress && (
                        <Link href={member.linkedinAddress} isExternal>
                            <IconButton
                                aria-label="LinkedIn"
                                icon={<FiLinkedin />}
                                variant="ghost"
                                color="white"
                                _hover={{ color: 'teal.300' }}
                            />
                        </Link>
                    )}
                    {member.twitterAddress && (
                        <Link href={member.twitterAddress} isExternal>
                            <IconButton
                                aria-label="Twitter"
                                icon={<FiTwitter />}
                                variant="ghost"
                                color="white"
                                _hover={{ color: 'teal.300' }}
                            />
                        </Link>
                    )}
                    {member.emailAddress && (
                        <Link href={`mailto:${member.emailAddress}`} isExternal>
                            <IconButton
                                aria-label="Email"
                                icon={<FiMail />}
                                variant="ghost"
                                color="white"
                                _hover={{ color: 'teal.300' }}
                            />
                        </Link>
                    )}
                </Flex>

                {member.profileHref && (
                    <Link
                        href={member.profileHref}
                        isExternal
                        mt={3}
                        fontWeight="semibold"
                        color="teal.200"
                        _hover={{ textDecoration: 'underline' }}
                    >
                        View Profile
                    </Link>
                )}
            </Flex>
        </Box>
    );
};

export default TeamMemberCarouselCard;
