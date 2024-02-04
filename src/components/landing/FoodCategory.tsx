import { Button, Heading, SimpleGrid, Text, VStack } from '@chakra-ui/react';

import { foodCategories } from '@/src/constant/food-categories';

import FoodCard from './FoodCard';

export default function FoodCategory() {
  return (
    <VStack
      w="full"
      align="center"
      maxW="container.md"
      mx="auto"
      spacing="12"
      px="20px"
      py="100px"
    >
      <VStack w="full" spacing="0">
        <Heading fontSize={{ base: '32px', lg: '40px' }}>
          Food Categories
        </Heading>
        <Text color="#5E6973" textAlign="center">
          Our Food Categories are your passport to a world of delicious
          possibilities.
        </Text>
      </VStack>

      <SimpleGrid
        w="full"
        gap={{ base: '12', md: '8' }}
        columns={{ base: 1, md: 3 }}
      >
        {foodCategories.map((item) => (
          <FoodCard item={item} key={item.title} />
        ))}
      </SimpleGrid>
      <Button
        size="lg"
        variant="ghost"
        w="full"
        bg="#FAFAFA"
        border="2px solid #FBBC55"
        color="#FBBC55"
        _hover={{
          bgColor: '#FBBC55',
          color: '#FFF',
        }}
      >
        See More
      </Button>
    </VStack>
  );
}
