import { Button, Flex, Image, Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay, Text } from "@chakra-ui/react";
import { Info } from "phosphor-react";

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

interface ContinentCitiesInfoDetailsProps {
  city: ICity;
  onModalOpen: () => void;
  setModalCity: (city: ICity) => void;
}

export function ContinentCitiesInfoDetails({
  city,
  onModalOpen,
  setModalCity
}: ContinentCitiesInfoDetailsProps) {
  return (
    <>
      <Flex
        flex="1 1 16rem"
        flexDir="column"
        w="100%"
        maxW="16rem"
        maxH="17rem"
        rounded="lg"
        mt={["1.25rem", "2.5rem"]}
      >
        <Image
          src={city.image}
          alt={city.name}
          w="100%"
          roundedTop="lg"
        />

        <Flex
          align="center"
          justify="space-between"
          roundedBottom="lg"
          p="1.5rem"
          borderX="1px solid"
          borderBottom="1px solid"
          borderColor="brand.100"
        >
          <Flex
            flexDir="column"
          >
            <Text
              fontSize="1.25rem"
              fontWeight="semibold"
            >
              {city.name}
            </Text>
            <Text>{city.country}</Text>
          </Flex>
          <Button
            variant="outline"
            p={0}
            color="brand.100"
            onClick={() => {
              onModalOpen();
              setModalCity(city);
            }}
          >
            <Info size={24} />
          </Button>
        </Flex>
      </Flex>
    </>
  )
}