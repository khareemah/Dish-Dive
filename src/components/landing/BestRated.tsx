import { Heading, SimpleGrid, Text, VStack } from '@chakra-ui/react';
import Link from 'next/link';

import allRestaurants from '@/src/constant/allRestaurants';

import BestRatedCard from './FoodCard';

export default function BestRated() {
  return (
    <VStack
      w="full"
      align="center"
      py="80px"
      maxW="container.md"
      mx="auto"
      spacing="12"
      px="20px"
    >
      <VStack w="full" spacing="3">
        <Heading
          fontSize={{ base: '28px', lg: '40px' }}
          w="full"
          textAlign="center"
        >
          Best Rated Meals
        </Heading>
        <Text color="#5E6973" textAlign="center" fontSize="16px">
          You get to find out the best rated meals in your town with Dish Dive.
        </Text>
      </VStack>
      <SimpleGrid
        w="full"
        gap={{ base: '12', md: '8' }}
        columns={{ base: 1, md: 3 }}
      >
        {allRestaurants
          .filter((restaurant) => restaurant.bestRated)
          .slice(0, 3)
          .map((item) => (
            <Link href={`restaurants/${item.id}`} key={item.title}>
              <BestRatedCard item={item} />
            </Link>
          ))}
      </SimpleGrid>
    </VStack>
  );
}
