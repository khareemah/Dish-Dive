'use client';
import {
  AspectRatio,
  Box,
  Center,
  chakra,
  HStack,
  Text,
  VStack,
} from '@chakra-ui/react';

import ChakraNextImage from '@/src/ui/ChakraNextImage';
import Rating from '@/src/ui/Rating';
import { formatPrice } from '@/src/utils/number-formatters';

export default function FoodCard({ item }) {
  return (
    <VStack align="flex-start" w="full" position="relative">
      {item.bestRated && (
        <Center
          position="absolute"
          top="0"
          right="0"
          px="3"
          py="1"
          bg="#BFFFB5"
          zIndex="1"
          color="#000"
          // rounded="8px"
          shadow="sm"
          fontSize="14px"
          rounded="full"
          mr="3"
          mt="3"
        >
          Best Rated
        </Center>
      )}
      <AspectRatio ratio={1 / 1} w="full">
        <ChakraNextImage
          alt="food image"
          src={item.src}
          width={400}
          height={400}
          flexShrink="0"
          rounded="8px"
          fallback={<Box w="full" h="full" rounded="2xl" bg="gray.200" />}
          unoptimized
          objectFit="contain"
        />
      </AspectRatio>
      <VStack align="flex-start" spacing="2">
        <Text fontWeight="500" fontSize="18px" color="##6E6E6E">
          {item.title}
        </Text>

        {item.rating && (
          <HStack>
            <Text fontWeight="600">{item.rating}</Text>
            <Rating rating={isNaN(+item.rating) ? 0 : +item.rating} max={5} />
            <Text color="#3B3A3A">({item.review})</Text>
          </HStack>
        )}

        {item.price && (
          <Text>
            <chakra.span color="#6E6E6E">From </chakra.span>
            <chakra.span fontWeight="600">
              {formatPrice(+item.price)}
            </chakra.span>
          </Text>
        )}
      </VStack>
    </VStack>
  );
}
