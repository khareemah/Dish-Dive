'use client';

import { chakra, HStack, Text, VStack } from '@chakra-ui/react';

import Rating from '@/src/ui/Rating';
import { formatPrice } from '@/src/utils/number-formatters';

export default function MealInfo({ product, ...props }) {
  return (
    <VStack w="full" h="full" align="flex-start" {...props}>
      <Text fontSize="25px" fontWeight="500">
        {product.title}
      </Text>
      <Text maxW="600px" fontSize={{ base: '16px', md: '18px' }}>
        {product.description}
      </Text>
      <Text fontSize="20px" fontWeight="700">
        from {formatPrice(product.price)}
      </Text>
      <VStack w="full" spacing="0" align="flex-start">
        <Text fontSize="16px">
          Estimated Calorie:
          <chakra.span fontWeight="bold"> {product.calories}</chakra.span>
        </Text>
        <Text fontSize="16px">
          Allergy Information:{' '}
          <chakra.span fontWeight="bold">{product.allergy}</chakra.span>
        </Text>
      </VStack>
      {product.rating && (
        <HStack w="full" align="center">
          <Text fontWeight="600" fontSize="18px">
            {product.rating}
          </Text>
          <Rating
            rating={isNaN(+product.rating) ? 0 : +product.rating}
            max={5}
          />
          <Text color="#3B3A3A" fontSize="18px">
            ({product.review})
          </Text>
        </HStack>
      )}
    </VStack>
  );
}
