import { Flex, Image, Text, Grid } from "@chakra-ui/react";

export function TravelTypes() {
  return (
    <Grid
      templateColumns={['1fr', '1fr 1fr', '1fr 1fr', 'repeat(5, 1fr)']}
      w="100%"
      justifyContent="space-between"
      align="center"
      mt={['10', '32']}
      mx="auto"
      maxW="1160px"
      gap={[8, 5]}
    >

      <Flex
        direction="column"
        align="center"
        justify="center"
      >
        <Image
          src="/assets/cocktail.svg"
          mb="4"
        />
        <Text
          fontWeight="600"
          color="brand.darkHeadingsAndText"
        >
          vida noturna
        </Text>
      </Flex>

      <Flex
        direction="column"
        align="center"
        justify="center"
      >
        <Image
          src="/assets/surf.svg"
          mb="4"
        />
        <Text
          fontWeight="600"
          color="brand.darkHeadingsAndText"
        >
          praia
        </Text>
      </Flex>

      <Flex
        direction="column"
        align="center"
        justify="center"
      >
        <Image
          src="/assets/building.svg"
          mb="4"
        />
        <Text
          fontWeight="600"
          color="brand.darkHeadingsAndText"
        >
          moderno
        </Text>
      </Flex>

      <Flex
        direction="column"
        align="center"
        justify="center"
      >
        <Image
          src="/assets/museum.svg"
          mb="4"
        />
        <Text
          fontWeight="600"
          color="brand.darkHeadingsAndText"
        >
          clássico
        </Text>
      </Flex>

      <Flex
        direction="column"
        align="center"
        justify="center"
      >
        <Image
          src="/assets/earth.svg"
          mb="4"
        />
        <Text
          fontWeight="600"
          color="brand.darkHeadingsAndText"
        >
          e mais...
        </Text>
      </Flex>
    </Grid>
  )
}