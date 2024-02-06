import { Heading, SimpleGrid, Text, VStack } from '@chakra-ui/react';

import { bestRated } from '@/src/constant/best-rated';

import BestRatedCard from './FoodCard';

export default function BestRated() {
  return (
    <VStack
      w="full"
      align="center"
      py="100px"
      maxW="container.md"
      mx="auto"
      spacing="12"
      px="20px"
    >
      <VStack w="full" spacing="0">
        <Heading fontSize={{ base: '32px', lg: '40px' }}>
          Best Rated Meal
        </Heading>
        <Text color="#5E6973" textAlign="center" fontSize="16px">
          You get to find out the best rated meals in your Town with Dish Dive.
        </Text>
      </VStack>
      <SimpleGrid
        w="full"
        gap={{ base: '12', md: '8' }}
        columns={{ base: 1, md: 3 }}
      >
        {bestRated.map((item) => (
          <BestRatedCard item={item} key={item.title} />
        ))}
      </SimpleGrid>
    </VStack>
  );
}
