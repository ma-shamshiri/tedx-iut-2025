import React from "react";
import {
  Box,
  Flex,
  Image,
  Text,
  useColorModeValue,
  Link,
  ResponsiveValue,
} from "@chakra-ui/react";
import { useTranslation } from "react-i18next";

interface TeamGridCardProps {
  isHovered?: boolean;
  handleHover?: () => void;
  handleUnhover?: () => void;
  src: string;
  name: string;
  imageMarginTop?: ResponsiveValue<string>;
  imageMarginBottom?: ResponsiveValue<string>;
  nameMarginTop?: string;
  buttonSrc?: string;
}

const TeamGridCard: React.FC<TeamGridCardProps> = ({
  isHovered,
  handleHover,
  handleUnhover,
  src,
  name,
  imageMarginTop = "0",
  imageMarginBottom = "2rem",
  buttonSrc = "#",
}) => {
  const { t } = useTranslation();

  return (
    <Flex
      flexDirection="column"
      justifyContent="center"
      alignItems="center"
      marginTop={imageMarginTop}
    >
      <Box
        className="talk_title_container"
        marginBottom="2rem"
        opacity={isHovered ? 1 : 0}
        transition="opacity 0.3s ease-in-out"
      >
        <Text
          fontWeight="bold"
          color={useColorModeValue("#F8F0C6", "#F8F0C6")}
          fontSize="2.3rem"
        >
          {name}
        </Text>
      </Box>
      <Link href={buttonSrc}>
        <Box
          className="profile_container"
          onMouseEnter={handleHover}
          onMouseLeave={handleUnhover}
          position="relative"
          width={{ base: "15rem", md: "18rem", lg: "18rem" }}
          height={{ base: "15rem", md: "18rem", lg: "18rem" }}
          bg="white"
          borderRadius="100%"
          marginBottom={imageMarginBottom}
          overflow="hidden"
          border="2px solid transparent"
          transition="border-color 0.3s ease-out"
          _hover={{
            borderColor: "#16F8B6",
          }}
          cursor="pointer"
        >
          <Box
            className="profile_name"
            position="absolute"
            width="100%"
            height="100%"
            bg="black"
            opacity="0"
            zIndex="1"
            _hover={{
              opacity: "0.2",
            }}
            transition="opacity 0.3s ease-out"
          ></Box>

          <Image
            className="profile_image"
            src={src}
            boxShadow="0 0 30px 1px black"
            objectFit="cover"
          />
        </Box>
      </Link>
      <Link
        className="btn btn--secondary btn--block"
        href={buttonSrc}
        // target="_blank"
        border="2px"
        borderColor={useColorModeValue("0C0F36", "#16F8B6")}
        borderRadius="1.2rem"
        cursor="pointer"
        fontSize={{ base: "1.5rem", lg: "1.5rem" }}
        fontWeight="600"
        // margin="1rem 0"
        outline="0"
        padding="1rem 1rem"
        textAlign="center"
        // textTransform="uppercase"
        whiteSpace="nowrap"
        bg="#fff"
        color="var(--color-headings)"
        display="inline-block"
        width="80%"
        _hover={{
          bg: useColorModeValue("#0C0F36", "#06c78f"),
          color: useColorModeValue("#fff", "#fff"),
        }}
      >
        {t("seeProfile")}
      </Link>
    </Flex>
  );
};

export default TeamGridCard;
