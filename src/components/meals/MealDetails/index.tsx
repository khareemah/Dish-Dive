'use client';
import {
  //  Slide,
  // useDisclosure,
  VStack,
} from '@chakra-ui/react';
import { useParams } from 'next/navigation';

import allProducts from '@/src/constant/allProducts';

import CustomerReview from './CustomerReview';
import MealCarousel from './MealCarousel';
import OtherComments from './OtherComments';
import PageHeader from './PageHeader';
import PriceRating from './PriceRating';
import RelatedMeals from './RelatedMeals';

export default function MealDetailsPage() {
  const { mealId } = useParams();
  const product = allProducts.find((item) => item.id.toString() === mealId);

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
      <PageHeader product={product} />
      <MealCarousel product={product} />
      <RelatedMeals
        relatedMeals={product.relatedProducts}
        mealName={product.title}
      />
      <PriceRating pricing={product.pricing} />
      <CustomerReview />
      <OtherComments />
    </VStack>
  );
}
