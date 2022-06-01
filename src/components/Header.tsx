import { Box, Button, Flex, Image, useColorMode } from "@chakra-ui/react";
import { Moon, Sun, CaretLeft } from 'phosphor-react';
import { useRouter } from "next/router";
import Link from "next/link";

export function Header() {
  const { colorMode, toggleColorMode } = useColorMode();
  const { asPath,  } = useRouter();
  
  return (
    <Box h="5rem" px={4}>
      <Flex h="5rem" mx="auto" align="center" maxW="1160px">
        {asPath !== "/" && (
          <Link href="/">
            <Button mr="auto" bgColor="inherit">
              <CaretLeft size={16} />
            </Button>
          </Link>
        )}

        <Image
          w={{ base: "5rem", md: "initial" }}
          src="/Logo.svg" alt="WorldTrip"
        />

        {colorMode === "light" ? (
          <Button ml="auto" bgColor="inherit" onClick={toggleColorMode} size="md">
            <Moon weight="fill" size={16} />
          </Button>
        ) : (
          <Button ml="auto" onClick={toggleColorMode} size="md">
            <Sun weight="fill" size={16} />
          </Button>
        )}
      </Flex>
    </Box>
  )
}