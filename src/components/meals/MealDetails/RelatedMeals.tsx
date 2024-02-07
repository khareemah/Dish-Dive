'use client';
import {
  chakra,
  CloseButton,
  Slide,
  Text,
  useDisclosure,
  VStack,
} from '@chakra-ui/react';

import { TRelatedProduct } from '@/src/constant/allProducts';
import ArrowButtonCarousel from '@/src/ui/carousels/ArrowButtonCarousel';

import FoodCard from '../../landing/FoodCard';

export default function RelatedMeals({
  relatedMeals,
  mealName,
}: {
  relatedMeals: TRelatedProduct[];
  mealName: string;
}) {
  const { isOpen, onClose, onOpen } = useDisclosure();
  return (
    <VStack w="full" align="flex-start" pb="50px">
      <Text fontSize={{ base: '22px', md: '28px' }}>
        People also like this from{' '}
        <chakra.span as="a" href="#" onClick={onOpen}>
          {`${mealName}`.toLowerCase()}
        </chakra.span>
      </Text>
      <ArrowButtonCarousel
        spacing={{ base: 6, md: 5 }}
        items={relatedMeals}
        itemProps={{ w: { base: '90%', md: '300px' }, maxW: '300px' }}
        renderItem={(meal) => <FoodCard item={meal} key={meal.title} />}
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
