'use client';

import { AspectRatio, Box, Stack } from '@chakra-ui/react';

import ImageCarousel from '@/src/ui/carousels/ImageCarousel';
import ChakraNextImage from '@/src/ui/ChakraNextImage';

import MealInfo from './MealInfo';

export default function MealCarousel({ product }) {
  const renderItem = (productImg) => (
    <AspectRatio ratio={1 / 1} w="full">
      <ChakraNextImage
        src={productImg.imgUrl}
        width={326}
        height={427}
        alt="product image"
        w="full"
        objectFit="contain"
        bg="rgba(44, 136, 0, 0.10)"
        flexShrink="0"
        rounded="2xl"
        unoptimized
      />
    </AspectRatio>
  );

  const renderThumbs = (productImg) => (
    <AspectRatio ratio={1 / 1} w="80px" h="80px">
      <ChakraNextImage
        src={productImg.imgUrl}
        width={80}
        height={80}
        alt="product image"
        w="full"
        bg="#FFCC48"
        objectFit="contain"
        flexShrink="0"
        rounded="lg"
        unoptimized
      />
    </AspectRatio>
  );

  return (
    <Stack
      direction={{ base: 'column', md: 'row' }}
      w="full"
      align="flex-start"
      justify="flex-start"
      py="50px"
      spacing="12"
    >
      <Box w="full" flex="1">
        <ImageCarousel
          containerSpacing="8"
          items={product.productImages}
          renderItem={renderItem}
          renderThumbs={renderThumbs}
        />
      </Box>
      <MealInfo product={product} flex="1" paddingTop="30px" />
    </Stack>
  );
}
