'use client';
import { AspectRatio, Box, Stack, VStack } from '@chakra-ui/react';

import { TRestaurant } from '@/src/constant/allRestaurants';
import ImageCarousel from '@/src/ui/carousels/ImageCarousel';
import ChakraNextImage from '@/src/ui/ChakraNextImage';

import PageHeader from './PageHeader';
import RestaurantInfo from './RestaurantInfo';

type Props = {
  restaurant: TRestaurant;
};

export default function FoodCarousel({ restaurant }: Props) {
  const renderItem = (foodImage) => (
    <AspectRatio ratio={1 / 1} w="full">
      <ChakraNextImage
        src={foodImage.imgUrl}
        width={326}
        height={427}
        alt="food image"
        w="full"
        objectFit="contain"
        bg="#FFCC48"
        flexShrink="0"
        rounded="2xl"
        unoptimized
      />
    </AspectRatio>
  );

  const renderThumbs = (foodImage) => (
    <AspectRatio ratio={1 / 1} w="80px" h="80px">
      <ChakraNextImage
        src={foodImage.imgUrl}
        width={80}
        height={80}
        alt="food image"
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
    <VStack w="full" align="flex-start" spacing="6" pt="20px">
      <PageHeader restaurant={restaurant} />
      <Stack
        direction={{ base: 'column', md: 'row' }}
        w="full"
        align="flex-start"
        justify="flex-start"
        spacing={{ base: '6', md: '12' }}
      >
        <Box w="full" flex="1">
          <ImageCarousel
            containerSpacing="8"
            items={restaurant.foodImages}
            renderItem={renderItem}
            renderThumbs={renderThumbs}
          />
        </Box>
        <RestaurantInfo
          restaurant={restaurant}
          flex="1"
          paddingTop={{ base: '10px', md: '30px' }}
        />
      </Stack>
    </VStack>
  );
}
