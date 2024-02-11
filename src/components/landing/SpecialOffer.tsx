import {
  Box,
  Button,
  Heading,
  SimpleGrid,
  Text,
  VStack,
} from '@chakra-ui/react';
import Link from 'next/link';

import allProducts from '@/src/constant/allRestaurants';

import SpecialOfferCard from './FoodCard';

export default function SpecialOffer() {
  return (
    <VStack
      w="full"
      align="center"
      maxW="container.md"
      mx="auto"
      spacing="12"
      px="20px"
    >
      <VStack w="full" spacing="0">
        <Heading fontSize={{ base: '32px', lg: '40px' }}>
          Special Offers
        </Heading>
        <Text color="#5E6973" textAlign="center" fontSize="16px">
          Ready to tantalize your taste buds without breaking the bank? Dive
          into our Special Offers section
        </Text>
      </VStack>

      <SimpleGrid
        w="full"
        gap={{ base: '12', md: '8' }}
        columns={{ base: 1, md: 3 }}
      >
        {allProducts
          .filter((meal) => meal.specialOffer)
          .slice(0, 3)
          .map((item) => (
            <SpecialOfferCard item={item} key={item.title} />
          ))}
      </SimpleGrid>
      <Box w="full">
        <Link href="/meals">
          <Button size="lg" w="full">
            See More
          </Button>
        </Link>
      </Box>
    </VStack>
  );
}
