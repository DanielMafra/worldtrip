import { Flex, Box, Heading, Text, Image } from "@chakra-ui/react"

export function Hero() {
  return (
    <Flex
      w="100%"
      height="335px"
      backgroundImage="url(/assets/background.png)"
      backgroundRepeat="no-repeat"
      backgroundSize="cover"
    >
      <Flex
        justify={['center', 'space-between']}
        align="center"
        w="100%"
        maxW="1160px"
        mx="auto"
      >
        <Box
          padding="4"
        >
          <Heading
            fontWeight="500"
            color="white"
            fontSize={['xl', '2l', '2xl', '2xl', '4xl']}
            mb="20px"
          >
            5 Continentes, <br />
            infinitas possibilidades.
          </Heading>
          <Text
            color="brand.lightInfo"
            fontSize={['0.8rem', 'xl']}
            maxW={['100%', '100%', '100%', '550px']}
          >
            Chegou a hora de tirar do papel a viagem que você sempre sonhou.
          </Text>
        </Box>
        <Image
          w={['300px', '300px', '300px', '430px']}
          display={['none', 'none', 'block']}
          src="/assets/hero.svg"
          transform="rotate(3deg) translateY(64px)"
        />
      </Flex>
    </Flex>
  )
}