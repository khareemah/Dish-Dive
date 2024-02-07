'use client';
import { VStack } from '@chakra-ui/react';
import { useSearchParams } from 'next/navigation';

import MealsList from './MealsList';

export default function AllMeals() {
  const searchParams = useSearchParams();
  return (
    <VStack
      w="full"
      align="flex-start"
      maxW="container.md"
      margin="0 auto"
      pt="220px"
      pb="100px"
      px="20px"
    >
      <MealsList searchParams={searchParams} />
    </VStack>
  );
}
