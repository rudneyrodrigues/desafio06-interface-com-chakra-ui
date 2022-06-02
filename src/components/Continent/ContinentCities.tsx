import { Box, Flex, Text, useDisclosure } from "@chakra-ui/react";
import { useState } from "react";
import { ContinentCitiesInfoDetails } from "./ContinentCitiesInfoDetails";
import { ContinentCitiesModal } from "./ContinentCitiesModal";

interface ICity {
  id: string;
  name: string;
  image: string;
  country: string;
  code: string;
}

// interface IModalInfo {
//   city: string;
//   query: string;
// }

interface ContinentCitiesProps {
  cities: ICity[];
  // onClickCard: (data: IModalInfo) => void;
}

export function ContinentCities({
  cities
}: ContinentCitiesProps) {
  const { isOpen, onOpen, onClose } = useDisclosure()
  const [cityModal, setCityModal] = useState<ICity>({} as ICity);

  return (
    <Box maxW="1160px" mx="auto" px={4} my={["2rem", "5rem"]}>
      <Text
        as="h1"
        fontSize={["1.5rem", "2.25rem"]}
        fontWeight="medium"
      >
        Cidades +100
      </Text>

      <Flex
        flexWrap="wrap"
        align="center"
        justify="center"
        gap="2rem"
      >
        {cities.map(city => {
          return (
            <ContinentCitiesInfoDetails
              city={city}
              key={city.id}
              onModalOpen={onOpen}
              setModalCity={setCityModal}
            />
          )
        })}

        <ContinentCitiesModal
          isOpen={isOpen}
          onClose={onClose}
          city={cityModal}
        />
      </Flex>
    </Box>
  )
}