import {
  Box,
  Button,
  Flex,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Text
} from "@chakra-ui/react";

interface ICity {
  id: string;
  name: string;
  image: string;
  country: string;
  code: string;
}

interface ContinentCitiesModalProps {
  isOpen: boolean;
  onClose: () => void;
  city: ICity;
}

export function ContinentCitiesModal({
  isOpen,
  onClose,
  city
}: ContinentCitiesModalProps) {
  return (
    <Modal isOpen={isOpen} onClose={onClose} isCentered>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader
          display="flex"
          alignItems="center"
          justifyContent="center"
        >
          {city.name}
        </ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <Box
            backgroundImage={`url(${city.image})`}
            backgroundSize="cover"
            backgroundPosition="center"
            h={["10rem", "15rem"]}
            rounded="lg"
          >
            <Flex
              h="full"
              w="full"
              align="end"
              backgroundColor="rgba(0,0,0,0.5)"
              rounded="lg"
              p={4}
              gap={2}
            >
              <Text
                fontSize="1.25rem"
                fontWeight="semibold"
                color="white"
              >
                {city.country}
              </Text>
              <Text
                textTransform="uppercase"
                fontWeight="bold"
                color="brand.100"
              >{city.code}</Text>
            </Flex>
          </Box>
          <Text
            mt={4}
            fontSize={["1rem", "1.125rem"]}
          >
            Uma belíssima cidade para viajar.
          </Text>
        </ModalBody>
        <ModalFooter>
          <Button
            variant="solid"
            colorScheme="red"
            onClick={onClose}
          >
            Fechar
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  )
}