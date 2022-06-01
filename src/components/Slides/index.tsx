import { Box } from '@chakra-ui/react';
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";

import { Navigation, Pagination } from "swiper";
import { Slide } from './Slide';

interface IContinent {
  id: string;
  name: string;
  call: string;
  callImage: string;
}

interface ISlidesProps {
  continents: IContinent[];
}

export function Slides({ continents }: ISlidesProps) {
  return (
    <Box position="relative" w="100%" h="28rem" mt={["1.25rem", "3.25rem"]}>
      <Swiper
        modules={[Navigation, Pagination]}
        navigation={true}
        pagination={true}
        slidesPerView={1}
        spaceBetween={2}
      >
        {continents.map(continent => (
          <SwiperSlide key={continent.id}>
            <Slide
              href={continent.id}
              title={continent.name}
              subtitle={continent.call}
              backgroundImage={continent.callImage}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </Box>
  )
}