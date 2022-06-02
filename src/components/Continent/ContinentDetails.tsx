import { Flex, Text } from "@chakra-ui/react";
import { ContinentInfo } from "./ContinentInfo";

interface ContinentDetailsProps {
  about: string;
  countries: number;
  languages: number;
  cities100: number;
}

export function ContinentDetails({
  about,
  countries,
  languages,
  cities100,
}: ContinentDetailsProps) {
  return (
    <Flex
      maxW="1160px"
      mx="auto"
      px={4}
      mt={["1.5rem", "1.5rem", "5rem"]}
      flexDir={["column", "column", "column", "row"]}
      gap={["1rem", "1rem", "4.375rem"]}
    >
      <Text
        fontSize={[".875rem", ".875rem", "1.5rem"]}
        textAlign="justify"
      >
        {about}
      </Text>
      <Flex
        flex="1"
        flexDir={["column", "row"]}
        gap="2.625rem"
        flexWrap={["wrap", "wrap", "nowrap"]}
      >

        <ContinentInfo title="Países" number={countries} />
        <ContinentInfo title="Línguas" number={languages} />
        <ContinentInfo title="Cidades +100" number={cities100} moreInfo={true} />

      </Flex>
    </Flex>
  )
}