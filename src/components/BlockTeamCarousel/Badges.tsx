import { Badge, Box, ResponsiveValue } from "@chakra-ui/react";

interface BadgesProps {
  text: string;
  textColor?: { light: string; dark: string };
  textSize?: ResponsiveValue<string>;
  backgroundColor?: { light: string; dark: string };
  fontWeight?: string;
  borderColor?: { light: string; dark: string };
  borderWidth?: string;
  borderRadius?: string;
  padding?: ResponsiveValue<string>;
  whiteSpace?: string;
}

const Badges: React.FC<BadgesProps> = ({
  text,
  textColor = { light: "#fff", dark: "#000" },
  textSize = { base: "1.2rem", lg: "1.2rem" },
  backgroundColor = { light: "#000", dark: "#fff" },
  fontWeight = "600",
  borderColor = { light: "#fff", dark: "#000" },
  borderWidth = "2px",
  borderRadius = "4rem",
  padding = { base: "0.1rem 1rem", md: "0.1rem 1rem", lg: "0.1rem 1.2rem" },
  whiteSpace = "nowrap",
}) => {
  return (
    <>
      <Badge
        className="badge_custom"
        as={Box}
        color={textColor.light}
        fontSize={textSize}
        textTransform="capitalize"
        bg={backgroundColor.light}
        fontWeight={fontWeight}
        borderWidth={borderWidth}
        borderColor={borderColor.light}
        borderRadius={borderRadius}
        padding={padding}
        whiteSpace={whiteSpace}
        _dark={{
          color: textColor.dark,
          bg: backgroundColor.dark,
          borderColor: borderColor.dark,
        }}
      >
        {text}
      </Badge>
    </>
  );
};

export default Badges;
