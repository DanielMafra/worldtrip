import Link from 'next/link';
import { Heading, Flex } from '@chakra-ui/react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import SwiperCore, { Navigation, Pagination } from 'swiper';

SwiperCore.use([Navigation, Pagination]);

export function SwiperComponent() {
  return (
    <Flex
      w="100%"
      maxW="1240px"
      mx="auto"
      mb={['5', '10']}
      paddingX={['2']}
      h={['250px', '450px']}
    >
      <Swiper
        modules={[Navigation, Pagination]}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        autoplay={{
          delay: 4000,
        }}
        scrollbar={{ draggable: true }}
        style={{
          width: '100%',
          flex: '1',
          borderRadius: 20,
        }}
      >

        <SwiperSlide>
          <Flex
            w="100%"
            h="100%"
            alignItems="center"
            justify="center"
            direction="column"
            bgImage="/assets/africa.png"
            bgRepeat="no-repeat"
            bgSize="cover"
            textAlign="center"
          >
            <Link href="/continent/africa">
              <Heading
                color="white"
                fontSize={['3xl', '4xl', '4xl']}
                cursor="pointer"
              >
                África
              </Heading>
            </Link>
            <Heading
              fontWeight="semibold"
              color="white"
              fontSize={['0.8rem', '1xl', '2xl']}
              mt={['2', '4']}
            >
              Aventuras, esportes radicais e mais de 130 atividades variadas.
            </Heading>
          </Flex>
        </SwiperSlide>

        <SwiperSlide>
          <Flex
            w="100%"
            h="100%"
            alignItems="center"
            justify="center"
            direction="column"
            bgImage="/assets/america.png"
            bgRepeat="no-repeat"
            bgSize="cover"
            textAlign="center"
          >
            <Link href="/continent/america">
              <Heading
                color="white"
                fontSize={['3xl', '4xl', '4xl']}
                cursor="pointer"
              >
                América
              </Heading>
            </Link>
            <Heading
              fontWeight="semibold"
              color="white"
              fontSize={['0.8rem', '1xl', '2xl']}
              mt={['2', '4']}
            >
              Um novo estilo de vida e muitas riquezas para explorar.
            </Heading>
          </Flex>
        </SwiperSlide>

        <SwiperSlide>
          <Flex
            w="100%"
            h="100%"
            alignItems="center"
            justify="center"
            direction="column"
            bgImage="/assets/asia.png"
            bgRepeat="no-repeat"
            bgSize="cover"
            textAlign="center"
          >
            <Link href="/continent/asia">
              <Heading
                color="white"
                fontSize={['3xl', '4xl', '4xl']}
                cursor="pointer"
              >
                Ásia
              </Heading>
            </Link>
            <Heading
              fontWeight="semibold"
              color="white"
              fontSize={['0.8rem', '1xl', '2xl']}
              mt={['2', '4']}
            >
              Sinônimo de imensidão e diversidade.
            </Heading>
          </Flex>
        </SwiperSlide>

        <SwiperSlide>
          <Flex
            w="100%"
            h="100%"
            alignItems="center"
            justify="center"
            direction="column"
            bgImage="/assets/europe.png"
            bgRepeat="no-repeat"
            bgSize="cover"
            textAlign="center"
          >
            <Link href="/continent/europe">
              <Heading
                color="white"
                fontSize={['3xl', '4xl', '4xl']}
                cursor="pointer"
              >
                Europa
              </Heading>
            </Link>
            <Heading
              fontWeight="semibold"
              color="white"
              fontSize={['0.8rem', '1xl', '2xl']}
              mt={['2', '4']}
            >
              O continente mais antigo.
            </Heading>
          </Flex>
        </SwiperSlide>

        <SwiperSlide>
          <Flex
            w="100%"
            h="100%"
            alignItems="center"
            justify="center"
            direction="column"
            bgImage="/assets/oceania.png"
            bgRepeat="no-repeat"
            bgSize="cover"
            textAlign="center"
          >
            <Link href="/continent/oceania">
              <Heading
                color="white"
                fontSize={['3xl', '4xl', '4xl']}
                cursor="pointer"
              >
                Oceania
              </Heading>
            </Link>
            <Heading
              fontWeight="semibold"
              color="white"
              fontSize={['0.8rem', '1xl', '2xl']}
              mt={['2', '4']}
            >
              Ricas belezas naturais, música e gastronomia.
            </Heading>
          </Flex>
        </SwiperSlide>

      </Swiper>
    </Flex>
  )
}