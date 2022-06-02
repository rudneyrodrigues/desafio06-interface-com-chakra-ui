import { Box, Button, Flex, Popover, PopoverArrow, PopoverBody, PopoverCloseButton, PopoverContent, PopoverHeader, PopoverTrigger, Text, Tooltip } from "@chakra-ui/react";
import { Info } from 'phosphor-react';

interface ContinentInfoProps {
  title: string;
  number: number;
  moreInfo?: boolean;
}

export function ContinentInfo({ title, number, moreInfo = false }: ContinentInfoProps) {
  return (
    <Flex
      flex="1"
      flexDir="column"
      align="center"
      position="relative"
    >
      <Text
        color="brand.100"
        fontSize={["1.5rem", "3rem"]}
        fontWeight="semibold"
      >
        {number}
      </Text>
      <Text
        fontWeight={["normal", "normal", "semibold"]}
        fontSize={["1.125rem", "1.125rem", "1.5rem"]}
        textAlign="center"
        whiteSpace="nowrap"
        display="flex"
        alignItems="center"
        justifyContent="center"
        position="relative"
        gap={2}
      >
        {title}

        {moreInfo && (
          <Tooltip
            label="Cidades mais visitadas"
            backgroundColor="brand.100"
            fontWeight="bold"
          >
            <Info size={24} />
          </Tooltip>
        )}
      </Text>
    </Flex>
  )
}