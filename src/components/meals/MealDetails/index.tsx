import { VStack } from '@chakra-ui/react';

import MealCarousel from './MealCarousel';

export default function MealDetailsPage() {
  return (
    <VStack
      w="full"
      align="flex-start"
      spacing="0"
      maxW="container.md"
      margin="0 auto"
      pt="180px"
      pb="100px"
      px="20px"
    >
      <MealCarousel />
      {/* <MealInfo />
      <MealPhoto /> */}
    </VStack>
  );
}
