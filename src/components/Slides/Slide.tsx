import { Flex, Text, Link as ChakraLink } from "@chakra-ui/react";
import Link from 'next/link';

interface SlideProps {
  title: string;
  subtitle?: string;
  backgroundImage?: string;
  href: string;
}

export function Slide({ title, subtitle, backgroundImage, href }: SlideProps) {
  return (
    <Flex
      align="center"
      justify="center"
      h={["15rem", "28rem"]}
      flexDir="column"
      backgroundImage={backgroundImage}
      backgroundSize="cover"
      backgroundPosition="center"
      rounded="lg"
    >
      <Link href={href}>
        <ChakraLink
          w="full"
          h="full"
          display="flex"
          flexDir="column"
          alignItems="center"
          justifyContent="center"
          backgroundColor="rgba(0, 0, 0, 0.5)"
          rounded="lg"
          _hover={{
            textDecoration: "none",
          }}
        >
          <Text
            fontWeight="bold"
            fontSize={["1.5rem", "3rem"]}
            color="white"
          >
            {title}
          </Text>
          <Text
            fontWeight="bold"
            fontSize={["0.875rem", "1.5rem"]}
            color="gray.50"
          >
            {subtitle}
          </Text>
        </ChakraLink>
      </Link>
    </Flex>
  )
}