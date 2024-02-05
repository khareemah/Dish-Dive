'use client';

import { AspectRatio, Box, VStack } from '@chakra-ui/react';

import ImageCarousel from '@/src/ui/carousels/ImageCarousel';
import ChakraNextImage from '@/src/ui/ChakraNextImage';

const product = {
  productImages: [
    { imgUrl: '/assets/images/best-rated-1.png' },
    { imgUrl: '/assets/images/best-rated-2.png' },
  ],
  imgUrl: '/assets/images/best-rated-1.png',
  price: '3000',
  calories: '300 kcal',
  allergy: 'Contains nuts',
};

export default function MealCarousel() {
  const renderItem = (productImg) => (
    <ChakraNextImage
      src={productImg.imgUrl}
      width={326}
      height={427}
      alt="product image"
      w="full"
      objectFit="contain"
      bg="#FFCC48"
      h="full"
      overflow="hidden"
      flexShrink="0"
      rounded="3xl"
      unoptimized
    />
  );

  const renderThumbs = (productImg) => (
    <AspectRatio ratio={1 / 1} w="117px">
      <ChakraNextImage
        src={productImg.imgUrl}
        width={326}
        height={427}
        alt="product image"
        w="full"
        bg="#FFCC48"
        objectFit="contain"
        flexShrink="0"
        rounded="2xl"
        unoptimized
      />
    </AspectRatio>
  );

  return (
    <VStack w="full" align="flex-start" py="50px">
      <Box w="full" flex="1">
        <ImageCarousel
          containerSpacing="8"
          items={product.productImages}
          renderItem={renderItem}
          renderThumbs={renderThumbs}
        />
      </Box>
    </VStack>
  );
}
