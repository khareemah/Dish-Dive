'use client';
import { Text, VStack } from '@chakra-ui/react';

import ArrowButtonCarousel from '@/src/ui/carousels/ArrowButtonCarousel';

import FoodCard from '../../landing/FoodCard';

export default function RelatedMeals({ products }) {
  return (
    <VStack w="full" align="flex-start" spacing="6">
      <Text fontSize={{ base: '22px', md: '32px' }}>
        People also like this from korede
      </Text>
      <ArrowButtonCarousel
        spacing={{ base: 6, md: 5 }}
        items={products}
        itemProps={{ w: { base: '90%', md: '300px' }, maxW: '300px' }}
        renderItem={(product) => (
          <FoodCard item={product} key={(product as any).title} />
        )}
      />
    </VStack>
  );
}
