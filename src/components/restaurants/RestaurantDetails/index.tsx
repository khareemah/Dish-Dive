'use client';
import { VStack } from '@chakra-ui/react';
import { useParams } from 'next/navigation';

import allRestaurants from '@/src/constant/allRestaurants';
import NoData from '@/src/ui/NoData';

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

  let content = <></>;
  if (!restaurant) {
    content = <NoData label="No Restaurant found" />;
  }

  if (restaurant) {
    content = (
      <>
        <FoodCarousel restaurant={restaurant} />
        <PriceRating priceRating={restaurant.priceRating} />
        <RelatedRestaurants restaurant={restaurant} />
        <CustomerReview />
        <OtherComments />
      </>
    );
  }
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
      {content}
    </VStack>
  );
}
