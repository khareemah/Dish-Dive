import { Heading, Text, VStack } from '@chakra-ui/react';

export default function Hero() {
  return (
    <VStack
      as="section"
      w="full"
      bgColor="#1E1E1E"
      minH="100vh"
      backgroundImage="url('/assets/images/hero.png')"
      backgroundPosition="center"
      backgroundSize="cover"
      backgroundRepeat="no-repeat"
      zIndex="1"
      position="relative"
      px="20px"
      _before={{
        content: "''",
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        background: 'rgba(0, 0, 0, 0.5)',
        zIndex: '-1',
      }}
    >
      <VStack
        maxW="container.md"
        w="full"
        margin="0 auto"
        minH="100vh"
        align="flex-start"
        justify="center"
        color="#FFF"
        spacing="2"
        pt="160px"
      >
        <Heading
          w="full"
          fontSize={{ md: '55px', base: '36px' }}
          lineHeight={{ md: '55px', base: '40px' }}
        >
          Uncover the Perfect Bite, Every Time!
        </Heading>
        <Text w="full" fontSize={{ base: '18px', md: '22px' }}>
          Don&apos;t Settle, Compare! Get the Best Meal in your Town with Dish
          Dive
        </Text>
      </VStack>
    </VStack>
  );
}
