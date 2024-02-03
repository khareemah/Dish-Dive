import { VStack } from '@chakra-ui/react';

import Hero from '@/src/components/landing/Hero';

export default function HomePage() {
  return (
    <VStack w="full" align="flex-start" spacing="0">
      <Hero />
      {/* <BestRated /> */}
      {/* <SpecialOffer /> */}
      {/* <FoodCategory /> */}
      {/* <OurStory /> */}
    </VStack>
  );
}
