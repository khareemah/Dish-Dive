'use client';
import {
  Box,
  Button,
  chakra,
  Heading,
  HStack,
  Slide,
  Text,
  useDisclosure,
  VStack,
} from '@chakra-ui/react';

import { TRestaurant } from '@/src/constant/allRestaurants';
import ArrowButtonCarousel from '@/src/ui/carousels/ArrowButtonCarousel';
import ChakraNextImage from '@/src/ui/ChakraNextImage';
import { capitalizeString } from '@/src/utils/string-helpers';

import FoodCard from '../../landing/FoodCard';

type Props = {
  restaurant: TRestaurant;
};

function Overlay({ isOpen }: { isOpen: boolean }) {
  return (
    <Box
      w="full"
      h="full"
      position="absolute"
      top="0"
      left="0"
      right="0"
      bottom="0"
      bgColor="rgba(0, 0, 0, 0.7)"
      display={isOpen ? 'block' : 'none'}
    ></Box>
  );
}

export default function RelatedRestaurants({ restaurant }: Props) {
  const { isOpen, onClose, onOpen } = useDisclosure();
  return (
    <VStack w="full" align="flex-start" pb="80px" spacing="6">
      <Text fontSize="22px" fontWeight="600">
        People also like this from{' '}
        <chakra.span
          as="button"
          fontSize="22px"
          fontWeight="600"
          onClick={onOpen}
          textDecoration="underline"
        >
          {capitalizeString(restaurant.restaurantName)}
        </chakra.span>
      </Text>
      <ArrowButtonCarousel
        spacing={{ base: 6, md: 5 }}
        items={restaurant.relatedRestaurants}
        itemProps={{ w: { base: '90%', md: '300px' }, maxW: '300px' }}
        renderItem={(relatedRestaurant) => (
          <FoodCard item={relatedRestaurant} key={relatedRestaurant.title} />
        )}
      />

      <Overlay isOpen={isOpen} />
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
          pt="20px"
          bg="#FFF"
          roundedTop="xl"
          shadow="md"
          flex="1"
          pos="relative"
          boxShadow="md"
        >
          <VStack
            align="flex-start"
            w="full"
            maxW="container.md"
            mx="auto"
            spacing="4"
          >
            <HStack w="full" spacing="8" justify="flex-start">
              <Button
                variant="unstyled"
                onClick={onClose}
                color="yellow.400"
                fontSize="18px"
              >
                Cancel
              </Button>
              <Heading fontSize="18px" fontWeight="600">
                About {restaurant.restaurantName} Foods
              </Heading>
            </HStack>
            <VStack w="full" align="flex-start" spacing="3">
              <Text fontSize={{ md: '16px', base: '14px' }} fontWeight="500">
                {restaurant.restaurantHistory}
              </Text>
              <Button
                variant="link"
                color="#000"
                fontWeight="500"
                fontSize={{ md: '16px', base: '14px' }}
              >
                {restaurant.restaurantWebsite}
              </Button>
              <HStack w="full" spacing="2" justify="flex">
                <ChakraNextImage
                  src="/assets/images/instagram.svg"
                  alt="instagram icon"
                  width={24}
                  height={24}
                  w="24px"
                  h="24px"
                />
                <Text fontWeight="500" fontSize={{ md: '16px', base: '14px' }}>
                  {restaurant.socialMedia}
                </Text>
              </HStack>
            </VStack>
          </VStack>
        </VStack>
      </Slide>
    </VStack>
  );
}
