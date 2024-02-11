'use client';

import { chakra, HStack, Text, VStack } from '@chakra-ui/react';

import Rating from '@/src/ui/Rating';
import { formatPrice } from '@/src/utils/number-formatters';

export default function RestaurantInfo({ restaurant, ...props }) {
  return (
    <VStack
      w="full"
      h="full"
      align="flex-start"
      justify="flex-end"
      display="inline-flex"
      {...props}
    >
      <Text fontSize="20px" fontWeight="500">
        {restaurant.title}
      </Text>
      <Text maxW="600px" fontSize="16px">
        {restaurant.description}
      </Text>
      <Text fontSize="20px" fontWeight="700">
        from {formatPrice(restaurant.price)}
      </Text>
      <VStack w="full" spacing="0" align="flex-start">
        <Text fontSize="16px">
          Estimated Calorie:
          <chakra.span fontSize="16px" fontWeight="bold">
            {' '}
            {restaurant.calories}
          </chakra.span>
        </Text>
        <Text fontSize="16px">
          Allergy Information:{' '}
          <chakra.span fontWeight="bold">{restaurant.allergy}</chakra.span>
        </Text>
      </VStack>
      {restaurant.rating && (
        <HStack w="full" align="center">
          <Text fontWeight="600" fontSize="18px">
            {restaurant.rating}
          </Text>
          <Rating
            rating={isNaN(+restaurant.rating) ? 0 : +restaurant.rating}
            max={5}
          />
          <Text color="#3B3A3A" fontSize="18px">
            ({restaurant.review})
          </Text>
        </HStack>
      )}
    </VStack>
  );
}
