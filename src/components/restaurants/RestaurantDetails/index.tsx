'use client';
import {
  //  Slide,
  // useDisclosure,
  VStack,
} from '@chakra-ui/react';
import { useParams } from 'next/navigation';

import allRestaurants from '@/src/constant/allRestaurants';

import CustomerReview from './CustomerReview';
import FoodCarousel from './FoodCarousel';
import OtherComments from './OtherComments';
import PriceRating from './PriceRating';
import RelatedRestaurants from './RelatedRestaurants';

export default function MealDetailsPage() {
  const { restaurantId } = useParams();
  const restaurant = allRestaurants.find(
    (item) => item.id.toString() === restaurantId
  );

  // const { isOpen, onToggle } = useDisclosure();

  return (
    <VStack
      w="full"
      align="flex-start"
      spacing="0"
      maxW="container.md"
      margin="0 auto"
      pt="200px"
      pb="100px"
      px="20px"
    >
      <FoodCarousel restaurant={restaurant} />
      <PriceRating priceRating={restaurant.priceRating} />
      <RelatedRestaurants
        relatedRestaurants={restaurant.relatedRestaurants}
        restaurantName={restaurant.restaurantName}
      />
      <CustomerReview />
      <OtherComments />
    </VStack>
  );
}
