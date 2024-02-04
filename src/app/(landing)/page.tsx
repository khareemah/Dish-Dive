import { VStack } from '@chakra-ui/react';

import BestRated from '@/src/components/landing/BestRated';
import Hero from '@/src/components/landing/Hero';
import SpecialOffer from '@/src/components/landing/SpecialOffer';

export default function HomePage() {
  return (
    <VStack w="full" align="flex-start" spacing="0">
      <Hero />
      <BestRated />
      <SpecialOffer />
      {/* <FoodCategory /> */}
      {/* <OurStory /> */}
    </VStack>
  );
}
