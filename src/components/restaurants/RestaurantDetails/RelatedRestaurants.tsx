'use client';
import {
  chakra,
  CloseButton,
  Slide,
  Text,
  useDisclosure,
  VStack,
} from '@chakra-ui/react';

import { TRelatedRestaurants } from '@/src/constant/allRestaurants';
import ArrowButtonCarousel from '@/src/ui/carousels/ArrowButtonCarousel';

import FoodCard from '../../landing/FoodCard';

type Props = {
  relatedRestaurants: TRelatedRestaurants[];
  restaurantName: string;
};

export default function RelatedRestaurants({
  relatedRestaurants,
  restaurantName,
}: Props) {
  const { isOpen, onClose, onOpen } = useDisclosure();
  return (
    <VStack w="full" align="flex-start" pb="80px" spacing="6">
      <Text fontSize="22px" fontWeight="600">
        People also like this from{' '}
        <chakra.span as="a" href="#" onClick={onOpen}>
          {`${restaurantName}`.toLowerCase()}
        </chakra.span>
      </Text>
      <ArrowButtonCarousel
        spacing={{ base: 6, md: 5 }}
        items={relatedRestaurants}
        itemProps={{ w: { base: '90%', md: '300px' }, maxW: '300px' }}
        renderItem={(restaurant) => (
          <FoodCard item={restaurant} key={restaurant.title} />
        )}
      />
      <Slide
        direction="bottom"
        in={isOpen}
        style={{
          zIndex: 9999,
          width: '100%',
          display: 'flex',
          height: 'fit-content',
        }}
      >
        <VStack
          w="full"
          pb="32px"
          px="4"
          pt="50px"
          color="white"
          bg="red.500"
          roundedTop="xl"
          shadow="md"
          flex="1"
          pos="relative"
        >
          <CloseButton pos="absolute" top="2" right="4" onClick={onClose} />
        </VStack>
      </Slide>
    </VStack>
  );
}
