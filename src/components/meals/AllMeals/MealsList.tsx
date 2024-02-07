'use client';
import { Heading, SimpleGrid, VStack } from '@chakra-ui/react';
import Link from 'next/link';
import { useEffect, useState } from 'react';

import allProducts from '@/src/constant/allProducts';
import { BackButton } from '@/src/ui/BackButton';

import FoodCard from '../../landing/FoodCard';
// import { BackButton } from "@/src/ui/BackButton";

export default function MealsList() {
  const [meals, setMeals] = useState(allProducts);
  const searchTerm = '';

  console.log('parent rendering');

  useEffect(() => {
    if (searchTerm) {
      setMeals(meals.filter((meal) => meal.title.includes(searchTerm)));
    } else {
      setMeals(meals);
    }
  }, [searchTerm, setMeals, meals]);

  return (
    <VStack w="full" align="flex-start" spacing="8">
      <BackButton to="..">
        <Heading fontSize="28px" fontWeight="500">
          All Available Meals
        </Heading>
      </BackButton>
      <SimpleGrid
        w="full"
        columns={{ base: 1, md: 3 }}
        gap={{ md: '8', base: '12' }}
      >
        {meals.map((meal) => (
          <Link href={`meals/${meal.id}`} key={meal.id}>
            <FoodCard item={meal} />
          </Link>
        ))}
      </SimpleGrid>
    </VStack>
  );
}
