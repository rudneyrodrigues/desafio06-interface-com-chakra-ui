import { Box, Icon, Link, LinkProps, Text } from "@chakra-ui/react";
import { Circle } from "phosphor-react";
import { ElementType } from "react";

interface TravelTypeProps extends LinkProps {
  icon: ElementType;
  title: string;
  href: string;
}

export function TravelType({ icon, title, href, ...rest }: TravelTypeProps) {
  return (
    <Box
      display="flex"
      flexDirection={["row", "column"]}
      alignItems="center"
      justifyContent="center"
      flex="1 1 150px"
      gap={2}
      p={4}
      rounded="lg"
      color="brand.100"
    >
      <Icon
        as={icon}
        fontSize={85}
        display={["none", "block"]}
      />

      <Icon
        as={Circle}
        size=".5rem"
        weight="fill" 
        display={["block", "none"]}
      />

      <Text
        color="gray.700"
        fontWeight={["medium", "semibold"]}
        fontSize={["1rem", "1.5rem"]}
        _dark={{
          color: "gray.50",
        }}
      >
        {title}
      </Text>
    </Box>
  )
}