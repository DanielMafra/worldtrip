import { GetStaticPaths, GetStaticProps } from 'next';
import { Header } from '../../components/Header';
import { Flex, Heading, Grid, Text, Box, Image, Tooltip } from '@chakra-ui/react';
import { InfoOutlineIcon } from '@chakra-ui/icons';

export default function Locale({ content }) {
  return (
    <>
      <Header back={true} />
      {content && (
        <>
          <Flex
            w="100%"
            h="500px"
            px="36"
            pt="72"
            backgroundImage={`url(${content.image})`}
            bgPosition="center"
            bgRepeat="no-repeat"
            bgSize="cover"
            align="center"
            justify={['center', 'center', 'flex-start']}
          >
            <Heading
              textAlign={['center', 'left']}
              color="white"
              fontSize={['5xl']}
              fontWeight="medium"
            >
              {content.name}
            </Heading>
          </Flex>

          <Grid
            templateColumns={['1fr', '1fr', '1fr 1fr', '1.2fr 1fr']}
            gap={[20]}
            my={[20]}
            maxW="1120px"
            mx="auto"
            color="brand.darkHeadingsAndText"
          >
            <Text
              fontSize={['xl']}
              textAlign="justify"
              padding="4"
            >
              {content.description}
            </Text>

            <Flex
              align="center"
              justifyContent="space-between"
              padding="4"
            >
              <Flex
                alignItems={['flex-start', 'flex-start', 'center']}
                direction="column"
              >
                <Heading
                  fontWeight="600"
                  fontSize={['2xl', '5xl']}
                  color="brand.highlight"
                >
                  {content.countries}
                </Heading>
                <Text
                  fontWeight="600"
                  fontSize={['md', 'xl']}
                >
                  países
                </Text>
              </Flex>
              <Flex
                alignItems="center"
                direction="column"
              >
                <Heading
                  fontWeight="600"
                  fontSize={['2xl', '5xl']}
                  color="brand.highlight"
                >
                  {content.langs}
                </Heading>
                <Text fontWeight="600" fontSize={['md', 'xl']}>
                  linguas
                </Text>
              </Flex>
              <Flex
                alignItems="center"
                direction="column"
              >
                <Heading
                  fontWeight="600"
                  fontSize={['2xl', '5xl']}
                  color="brand.highlight"
                >
                  {content.visiteds}
                </Heading>
                <Text
                  fontWeight="600"
                  fontSize={['md', 'xl']}
                  display="flex"
                  flexDirection="row"
                  alignItems="center"
                >
                  cidades + 100
                  <Flex>
                    <Tooltip
                      label="Locais mais visitados"
                    >
                      <InfoOutlineIcon
                        cursor="pointer"
                        ml="1"
                        w={['8px', '14px']}
                        h={['8px', '14px']}
                      />
                    </Tooltip>
                  </Flex>
                </Text>
              </Flex>
            </Flex>
          </Grid>

          <Flex>
            <Heading
              width="100%"
              maxW="1120px"
              mx="auto"
              textAlign="start"
              mb="64px"
              color="brand.darkHeadingsAndText"
              padding="4"
            >
              Cidades +100
            </Heading>
          </Flex>

          <Grid
            maxWidth="1160px"
            mx="auto"
            templateColumns={['1fr', '1fr 1fr', 'repeat(3, 1fr)', 'repeat(4, 1fr)']}
            gap={['64px', '45px']}
            pb="32"
            alignItems="center"
            justifyContent="center"
            px={['30px', '0px']}
          >
            {content.cities.map(city => (
              <Box
                width="256px"
                overflow="hidden"
                key={city.name}
                borderRadius="8"
                bg="white"
                pb="8"
                mx="auto"
              >
                <Image
                  boxSize='256px'
                  objectFit='cover'
                  src={`${city.image}`}
                  alt=""
                />
                <Flex
                  align="center"
                  justify="space-between"
                  pr="4"
                >
                  <Box>
                    <Heading
                      fontFamily="Barlow"
                      fontSize="20"
                      fontWeight="600"
                      mt="18"
                      px="4"
                      color="brand.darkHeadingsAndText"
                    >
                      {city.name}
                    </Heading>
                    <Text
                      fontFamily="Barlow"
                      fontWeight="500"
                      mt="2"
                      px="4"
                      color="brand.darkInfo"
                    >
                      {city.locale}
                    </Text>
                  </Box>
                  <Image
                    borderRadius='full'
                    boxSize='30px'
                    src={`${city.flag}`}
                    alt='Dan Abramov'
                  />
                </Flex>
              </Box>
            ))}
          </Grid>
        </>
      )}
    </>
  )
}

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = []

  return {
    paths,
    fallback: true,
  }
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const { locale } = params;
  const res = await fetch(`http://localhost:3333/continents/?slug=${locale}`);
  const data = await res.json();

  const content = {
    name: data[0].name,
    image: data[0].image,
    description: data[0].description,
    countries: data[0].countries,
    langs: data[0].langs,
    visiteds: data[0].visiteds,
    cities: data[0].cities
  }

  if (!content) {
    return {
      notFound: true,
    }
  }

  return {
    props: {
      content
    }
  }
}