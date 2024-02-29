'use client';
import { ChevronDownIcon } from '@chakra-ui/icons';
import {
  Button,
  Heading,
  HStack,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  SimpleGrid,
  Text,
  VStack,
} from '@chakra-ui/react';
import Link from 'next/link';
import { useMemo, useState } from 'react';

import allRestaurants from '@/src/constant/allRestaurants';
import { BackButton } from '@/src/ui/BackButton';
import ChakraNextImage from '@/src/ui/ChakraNextImage';
import { formatPrice } from '@/src/utils/number-formatters';
import { capitalize } from '@/src/utils/string-helpers';

import FoodCard from '../../landing/FoodCard';
import NoMeals from './NoMeals';

type SearchParams = Partial<Record<string, string | string[]>>;

type Props = {
  searchParams: URLSearchParams;
};

export default function RestaurantsList({ searchParams }: Props) {
  const [filteredRestaurants] = useState(allRestaurants);
  const [selectedPriceRange, setSelectedPriceRange] = useState('');

  const priceRange = useMemo(
    () => [{ price: '2000' }, { price: '3000' }, { price: '4000' }],
    []
  );

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
  // console.log(searchParamsObject); // Check if searchParamsObject is populated correctly

  const search = useMemo(() => {
    if (typeof searchParamsObject.q === 'string') {
      return searchParamsObject.q;
    }
    return '';
  }, [searchParamsObject]);

  console.log(search);

  const filterByPrice = (price: { price: string }) => {
    setSelectedPriceRange(price.price);
  };

  console.log(selectedPriceRange);

  const filteredRestaurant = filteredRestaurants
    .filter((restaurant) => restaurant.title.includes(capitalize(search)))
    .filter((restaurant) => +restaurant.price >= +selectedPriceRange);

  //   filteredRestaurant = filteredRestaurant.filter((restaurant) => {
  //     console.log(typeof selectedPriceRange);
  //     if (selectedPriceRange === "2000") {
  //       return +restaurant.price >= 2000;
  //     } else if (selectedPriceRange === "3000") {
  //       return +restaurant.price >= 3000;
  //     } else if (selectedPriceRange === "4000") {
  //       return +restaurant.price > 4000;
  //     } else {
  //       return true;
  //     }
  //   });

  //   // Set filteredRestaurants to the state
  //   // setFilteredRestaurants(filteredRestaurants);
  // }, [selectedPriceRange]);
  return (
    <VStack w="full" align="flex-start" spacing="14">
      <HStack w="full" align="center" spacing="4">
        <ChakraNextImage
          src="/assets/images/filter.svg"
          alt=""
          width={24}
          height={24}
          w="24px"
          h="24px"
        />
        <Menu>
          {({ isOpen }) => (
            <>
              <MenuButton
                rounded="10px"
                borderWidth="2px"
                borderColor="#3B3A3A"
                as={Button}
                size="lg"
                gap="12px"
                colorScheme="gray"
                fontSize="md"
                bg="#fff"
                rightIcon={
                  <ChevronDownIcon
                    transition="all 0.3s"
                    transform={isOpen ? 'rotate(180deg)' : 'rotate(0deg)'}
                  />
                }
              >
                Filter By Price
              </MenuButton>

              <MenuList zIndex="2">
                {priceRange.map((price) => (
                  <MenuItem
                    onClick={filterByPrice.bind(null, price)}
                    key={price.price}
                  >
                    {' '}
                    from {formatPrice(+price.price)}
                  </MenuItem>
                ))}
              </MenuList>
            </>
          )}
        </Menu>
      </HStack>
      <VStack w="full" align="flex-start" spacing="8">
        {!!search && (
          <Text fontWeight="700" fontSize="20px">
            {filteredRestaurant.length}{' '}
            {filteredRestaurant.length < 2 ? 'item' : 'items'} found for &quot;
            {search}&quot;
          </Text>
        )}
        <BackButton to="..">
          <Heading fontSize="20px" fontWeight="600">
            All Available Restaurants
          </Heading>
        </BackButton>
        {filteredRestaurant.length === 0 ? (
          <NoMeals />
        ) : (
          <SimpleGrid
            w="full"
            columns={{ base: 1, md: 3 }}
            gap={{ md: '8', base: '12' }}
          >
            {filteredRestaurant.map((restaurant) => (
              <Link href={`restaurants/${restaurant.id}`} key={restaurant.id}>
                <FoodCard item={restaurant} />
              </Link>
            ))}
          </SimpleGrid>
        )}
      </VStack>
    </VStack>
  );
}
