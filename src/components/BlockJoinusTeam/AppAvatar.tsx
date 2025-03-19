import React, { FC } from "react";
import { Avatar } from "@chakra-ui/react";

interface AppAvatarProps {
  key: string;
  name: string;
  url: string;
  opacity?: string;
}

const AppAvatar: FC<AppAvatarProps> = ({ key, name, url, opacity }) => {
  return (
    <Avatar
      key={key}
      name={name}
      src={url}
      width={{ base: "4.7rem", lg: "7rem" }}
      height={{ base: "4.7rem", lg: "7rem" }}
      margin={-2}
      opacity={opacity}
      position={"relative"}
      zIndex={2}
      _before={{
        content: '""',
        width: "full",
        height: "full",
        rounded: "full",
        transform: "scale(1.125)",
        bgGradient: "linear(to-bl, #D4145A, #FBB03B)",
        // bgGradient: "linear(to-bl, #11998E, #38EF7D)",
        position: "absolute",
        zIndex: -1,
        top: 0,
        left: 0,
      }}
      transition="0.3s ease-in-out"
      _hover={{
        transform: "scale(1.2)",
      }}
    />
  );
};

export default AppAvatar;
