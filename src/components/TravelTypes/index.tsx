import { Flex, Link, Text } from "@chakra-ui/react";
import { Martini, Umbrella, Buildings, HouseLine, GlobeHemisphereWest } from 'phosphor-react';
import { TravelType } from "./TravelType";

export function TravelTypes() {
  return (
    <Flex
      align="center"
      flexWrap="wrap"
      justify="space-between"
      gap={4}
      position="relative"
    >
      <TravelType href="#" icon={Martini} title="Vida Noturna" />
      <TravelType href="#" icon={Umbrella} title="Praia" />
      <TravelType href="#" icon={Buildings} title="Moderno" />
      <TravelType href="#" icon={HouseLine} title="Clássico" />
      <TravelType href="#" icon={GlobeHemisphereWest} title="E mais" />
    </Flex>
  )
}