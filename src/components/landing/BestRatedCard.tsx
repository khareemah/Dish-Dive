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

export default function BestRatedCard({ item }) {
  return (
    <VStack align="flex-start" w="full" position="relative">
      <Center
        position="absolute"
        top="-30px"
        right="0"
        px="4"
        py="2"
        bg="#BFFFB5"
        mr="3"
        mt="3"
        zIndex="1"
        color="#000"
        rounded="8px"
        shadow="sm"
      >
        Best Rated
      </Center>
      <AspectRatio ratio={1 / 1} w="full">
        <ChakraNextImage
          alt="Product Name"
          src={item.src}
          width={200}
          height={200}
          flexShrink="0"
          rounded="8px"
          fallback={<Box w="full" h="full" rounded="2xl" bg="gray.200" />}
          borderRadius="10px"
          unoptimized
          objectFit="cover"
        />
      </AspectRatio>
      <VStack align="flex-start" spacing="0">
        <Text fontSize="18px" fontWeight="500">
          {item.title}
        </Text>
        <HStack>
          <Text fontWeight="600">{item.rating}</Text>
          <Rating rating={isNaN(+item.rating) ? 0 : +item.rating} max={5} />
          <Text color="#3B3A3A">({item.review})</Text>
        </HStack>
        <Text fontSize="16px">
          <chakra.span color="#6E6E6E">From </chakra.span>
          <chakra.span fontWeight="600">
            {' '}
            {formatPrice(+item.price)}
          </chakra.span>
        </Text>
      </VStack>
    </VStack>
  );
}
