import Head from "next/head";
import { Box, Flex, Text } from "@chakra-ui/react";
import { GetStaticPaths, GetStaticProps } from "next";

import { Header } from "../components/Header";
import { ContinentDetails } from "../components/Continent/ContinentDetails";
import { ContinentCities } from "../components/Continent/ContinentCities";

import { continents } from "../utils/continents";

interface ICity {
  id: string;
  name: string;
  image: string;
  country: string;
  code: string;
}

interface IContinentProps {
  continent: {
    id: string;
    name: string;
    call: string;
    callImage: string;
    bannerImage: string;
    about: string;
    countries: number;
    languages: number;
    cities100: number;
    cities: ICity[];
  };
}

export default function Continent({ continent }: IContinentProps) {
  return (
    <>
      <Head>
        <title>{continent.name} | WorldTrip</title>
      </Head>

      <Header />

      <Box>
        <Box
          h={["9.375rem", "31.25rem"]}
          backgroundImage={`url(${continent.bannerImage})`}
          backgroundSize="cover"
          backgroundPosition="center"
          backgroundRepeat="no-repeat"
        >
          <Box w="full" h="full" backgroundColor="rgba(0,0,0,0.5)">
            <Flex
              w="full"
              h="full"
              maxW="1160px"
              mx="auto"
              align={["center", "center", "end"]}
              justify={["center", "center", "flex-start"]}
              pb={[0, 0, "3rem"]}
              px={4}
            >
              <Text
                fontSize={["1.75rem", "3rem"]}
                fontWeight="semibold"
                color="white"
              >
                {continent.name}
              </Text>
            </Flex>
          </Box>
        </Box>

        <ContinentDetails
          about={continent.about}
          countries={continent.countries}
          languages={continent.languages}
          cities100={continent.cities100}
        />

        <ContinentCities cities={continent.cities} />
      </Box>
    </>
  )
}

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: continents.map((continent) => {
      return {
        params: {
          id: continent.id,
        },
      };
    }),
    fallback: "blocking",
  };
}

export const getStaticProps: GetStaticProps = async ({params}: any) => {
  const { id } = params;

  return {
    props: {
      continent: continents.find((continent) => continent.id === id),
    }
  }
}