import React, { useState } from "react";
import {
  Box,
  Heading,
  Text,
  Container,
  SimpleGrid,
  useColorModeValue,
  Flex,
  VStack,
  useColorMode,
} from "@chakra-ui/react";
import { useTranslation } from "react-i18next";
import AvatarIcon from "./AvatarIcon";
import BlurColor from "./BlurColor";
import TeamForm from "./TeamForm";

export const BlockJoinusTeam: React.FC = () => {
  // const { colorMode } = useColorMode();
  // const displayValue = useBreakpointValue({ base: "none", xl: "block" });

  const { t } = useTranslation();

  return (
    <>
      <Box position={"relative"}>
        <Box
          className="block block--dark block--skewed-right block-showcase aos-animate"
          paddingX={{ base: "2rem", lg: "4rem" }}
          paddingY={{ base: "4rem", lg: "8rem" }}
          paddingBottom="8rem"
          //   bg={useColorModeValue("gray.800", "#16F8B6")}
          //   bg={useColorModeValue("#ACD1B4", "#23214A")}
          bg={useColorModeValue(
            "linear-gradient(45deg, #685ACD, #5851db, #833ab4, #c13584, #e1306c, #fd1d1d)",
            "#1A202C"
          )}
          overflow={"hidden"}
        >
          <SimpleGrid row={2}>
            <Box
              className="block__header container aos-animate"
              textAlign="center"
              // maxWidth="100rem"
              data-aos="fade-up"
              data-aos-duration="500"
              // marginBottom="10rem"
            >
              <Flex>
                <Container
                  as={SimpleGrid}
                  // maxW={"7xl"}
                  columns={{ base: 1, md: 2 }}
                  spacing={{ base: 10, lg: 32 }}
                  paddingY={{ base: 10, sm: 20, lg: 32 }}
                >
                  <VStack spacing={{ base: 50, md: 20 }}>
                    <Heading
                      marginLeft={{ lg: "25rem" }}
                      color={useColorModeValue("gray.100", "#16f8b6")}
                      width={{ base: "100%", lg: 850 }}
                      // paddingLeft={{ base: -101, lg: "15rem" }}
                      lineHeight={1.1}
                      fontSize={{
                        base: "2.5rem",
                        sm: "2rem",
                        md: "5xl",
                        lg: "3.2rem",
                      }}
                    >
                      {t("joinUs")}{" "}
                      <Text
                        as={"span"}
                        bgGradient="linear(to-r, red.400, pink.400)"
                        bgClip="text"
                      >
                        &
                      </Text>{" "}
                      {t("joinUsTitle")}
                    </Heading>
                    {/* <Box marginLeft={{ lg: "9rem" }}>
                      <AvatarIcon />
                    </Box> */}
                  </VStack>
                </Container>
              </Flex>
            </Box>
            <Flex justifyContent={{ base: "center", lg: "center" }}>
              <TeamForm />
            </Flex>
          </SimpleGrid>
        </Box>

        <BlurColor
          position={"absolute"}
          top={30}
          left={-10}
          filter="blur(70px)"
          // display={colorMode !== "dark" ? "none" : displayValue}
          // opacity={colorMode !== "dark" ? 0 : 1}
          // transition={{ opacity: "0.3s" }}
        />
      </Box>
    </>
  );
};

// export default BlockJoinusTeam;
