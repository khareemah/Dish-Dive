'use client';
import { Heading, SimpleGrid, VStack } from '@chakra-ui/react';
import Link from 'next/link';
import { useState } from 'react';

import allRestaurants from '@/src/constant/allRestaurants';
import { BackButton } from '@/src/ui/BackButton';
import { capitalize } from '@/src/utils/string-helpers';

import FoodCard from '../../landing/FoodCard';
import NoMeals from './NoMeals';

type SearchParams = Partial<Record<string, string | string[]>>;

type Props = {
  searchParams: URLSearchParams;
};

export default function RestaurantsList({ searchParams }: Props) {
  const [restaurants] = useState(allRestaurants);

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
  const filteredRestaurants = restaurants.filter((restaurant) =>
    restaurant.title.includes(capitalize(search))
  );

  return (
    <VStack w="full" align="flex-start" spacing="8">
      <BackButton to="..">
        <Heading fontSize="20px" fontWeight="600">
          All Available Restaurants
        </Heading>
      </BackButton>
      {filteredRestaurants.length === 0 ? (
        <NoMeals />
      ) : (
        <SimpleGrid
          w="full"
          columns={{ base: 1, md: 3 }}
          gap={{ md: '8', base: '12' }}
        >
          {filteredRestaurants.map((restaurant) => (
            <Link href={`restaurants/${restaurant.id}`} key={restaurant.id}>
              <FoodCard item={restaurant} />
            </Link>
          ))}
        </SimpleGrid>
      )}
    </VStack>
  );
}
