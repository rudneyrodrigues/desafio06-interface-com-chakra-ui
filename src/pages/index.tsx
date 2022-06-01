import type { GetStaticProps, NextPage } from 'next';
import { Box, Flex, Text, Image, Divider } from '@chakra-ui/react';

import { Header } from '../components/Header';
import { TravelTypes } from '../components/TravelTypes';
import { Slides } from '../components/Slides';
import { continents } from '../utils/continents';
import Head from 'next/head';

interface IContinent {
  id: string;
  name: string;
  call: string;
  callImage: string;
}

interface IHomeProps {
  continents: IContinent[];
}

const Home: NextPage<IHomeProps> = ({ continents }: IHomeProps) => {
  return (
    <>
      <Head>
        <title>WorldTrip</title>
      </Head>

      <Header />

      <Box>
        <Box
          bgImage="/home-banner.jpg"
          bgPosition={'center 20%'}
          bgSize={'cover'}
          bgRepeat={'no-repeat'}
        >
          <Box maxW="1160px" mx="auto" position="relative" px={4}>
            <Flex
              flexDir="column"
              py={["1.75rem", "5rem"]}
            >
              <Text
                as="h1"
                fontSize={["1.25rem", "2.25rem"]}
                fontWeight="medium"
                mb={[".5rem", "1.5rem"]}
                color="gray.50"
              >
                5 Continentes,<br />infinitas possibilidades.
              </Text>
              <Text
                fontSize={[".875rem", "1.25rem"]}
                fontWeight="normal"
                color="gray.100"
                maxW={["auto", "auto", "50%"]}
              >
                Chegou a hora de tirar do papel a viagem que você sempre sonhou.
              </Text>
            </Flex>

            <Image
              src="/Airplane.svg"
              alt="Avião"
              position="absolute"
              bottom="-3rem"
              display={['none', 'none', 'block']}
              // maxW="50%"
              right={0}
            />
          </Box>
        </Box>

        <Box
          px={4}
          mb={8}
          mx="auto"
          maxW="1160px"
          mt={["2.25rem", "7rem"]}
          position="relative"
        >
          <TravelTypes />

          <Flex mt="4rem" mb="2rem" align="center" justify="center">
            <Divider color="blue" size="4rem" borderColor="blue.800" w="5.625rem" />
          </Flex>

          <Flex
            flexDir="column"
            align="center"
            mt={["1.5rem", "3.25rem"]}
            position="relative"
          >
            <Text
              as="h1"
              textAlign="center"
              fontWeight="medium"
              fontSize={["1.25rem", "2.25rem"]}
            >
              Vamos nessa?<br />Então escolha seu continente
            </Text>

            <Slides continents={continents} />
          </Flex>
        </Box>
      </Box>
    </>
  )
}

export default Home;

export const getStaticProps: GetStaticProps = async () => {
  return {
    props: {
      continents: continents.map((continent) => ({
        id: continent.id,
        name: continent.name,
        call: continent.call,
        callImage: continent.callImage,
      })),
    },
  }
};
