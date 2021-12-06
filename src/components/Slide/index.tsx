import { Flex, Heading } from "@chakra-ui/react";
import { SwiperComponent } from "../Swiper";

export function Slide() {
  return (
    <>
      <Flex
        justify="center"
        align="center"
      >
        <Heading
          fontWeight="500"
          textAlign="center"
          fontSize={['4xl']}
          color="brand.darkHeadingsAndText"
          mb="14"
        >
          Vamos nessa? <br />
          Então escolha seu continente
        </Heading>
      </Flex>
      <SwiperComponent />
    </>
  )
}