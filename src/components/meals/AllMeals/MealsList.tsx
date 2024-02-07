'use client';
import { Heading, SimpleGrid, VStack } from '@chakra-ui/react';
import Link from 'next/link';
import { useState } from 'react';

import allProducts from '@/src/constant/allProducts';
import { BackButton } from '@/src/ui/BackButton';
import { capitalize } from '@/src/utils/string-helpers';

import FoodCard from '../../landing/FoodCard';
import NoMeals from './NoMeals';

type SearchParams = Partial<Record<string, string | string[]>>;
export default function MealsList({
  searchParams,
}: {
  searchParams: URLSearchParams;
}) {
  const [meals] = useState(allProducts);

  const searchParamsObject: SearchParams = {};
  searchParams.forEach((value, key) => {
    if (searchParamsObject[key]) {
      if (Array.isArray(searchParamsObject[key])) {
        (searchParamsObject[key] as string[]).push(value);
      } else {
        searchParamsObject[key] = [searchParamsObject[key] as string, value];
      }
    } else {
      searchParamsObject[key] = value;
    }
  });

  console.log(searchParamsObject); // Check if searchParamsObject is populated correctly

  let search = '';

  if (typeof searchParamsObject.q === 'string') {
    search = searchParamsObject.q;
  }
  const mainMeals = meals.filter((meal) =>
    meal.title.includes(capitalize(search))
  );

  return (
    <VStack w="full" align="flex-start" spacing="8">
      <BackButton to="..">
        <Heading fontSize="28px" fontWeight="500">
          All Available Meals
        </Heading>
      </BackButton>
      {mainMeals.length === 0 ? (
        <NoMeals />
      ) : (
        <SimpleGrid
          w="full"
          columns={{ base: 1, md: 3 }}
          gap={{ md: '8', base: '12' }}
        >
          {mainMeals.map((meal) => (
            <Link href={`meals/${meal.id}`} key={meal.id}>
              <FoodCard item={meal} />
            </Link>
          ))}
        </SimpleGrid>
      )}
    </VStack>
  );
}
