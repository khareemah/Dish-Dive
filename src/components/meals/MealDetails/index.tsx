import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  VStack,
} from '@chakra-ui/react';
import Link from 'next/link';

import CustomerReview from './CustomerReview';
import MealCarousel from './MealCarousel';
import PriceRating from './PriceRating';
import RelatedMeals from './RelatedMeals';

export default function MealDetailsPage() {
  const product = {
    rating: 4.5,
    review: 206,
    productImages: [
      { imgUrl: '/assets/images/main.svg' },
      { imgUrl: '/assets/images/best-rated-2.png' },
    ],
    description:
      'Mouth Watering Spaghetti made with the finest pasta, garnished with cabbage, carrots, bell peppers, chicken sausages and well seasoned.',
    imgUrl: '/assets/images/main.svg',
    price: '3000',
    calories: '300 kcal',
    allergy: 'Contains nuts',
    title: 'Spaghetti from Korede',
  };

  const products = [
    {
      productImages: [
        { imgUrl: '/assets/images/main.svg' },
        { imgUrl: '/assets/images/best-rated-2.png' },
      ],
      description:
        'Mouth Watering Spaghetti made with the finest pasta, garnished with cabbage, carrots, bell peppers, chicken sausages and well seasoned.',
      src: '/assets/images/main.svg',
      price: '3000',
      calories: '300 kcal',
      allergy: 'Contains nuts',
      title: 'Spaghetti from Korede',
    },
    {
      productImages: [
        { imgUrl: '/assets/images/main.svg' },
        { imgUrl: '/assets/images/best-rated-2.png' },
      ],
      description:
        'Mouth Watering Spaghetti made with the finest pasta, garnished with cabbage, carrots, bell peppers, chicken sausages and well seasoned.',
      src: '/assets/images/main.svg',
      price: '3000',
      calories: '300 kcal',
      allergy: 'Contains nuts',
      title: 'Amala From Buka Street',
    },
    {
      productImages: [
        { imgUrl: '/assets/images/main.svg' },
        { imgUrl: '/assets/images/best-rated-2.png' },
      ],
      description:
        'Mouth Watering Spaghetti made with the finest pasta, garnished with cabbage, carrots, bell peppers, chicken sausages and well seasoned.',
      src: '/assets/images/main.svg',
      price: '3000',
      calories: '300 kcal',
      allergy: 'Contains nuts',
      title: 'Pounded Yam from Zee Foods',
    },
    {
      productImages: [
        { imgUrl: '/assets/images/main.svg' },
        { imgUrl: '/assets/images/best-rated-2.png' },
      ],
      description:
        'Mouth Watering Spaghetti made with the finest pasta, garnished with cabbage, carrots, bell peppers, chicken sausages and well seasoned.',
      src: '/assets/images/main.svg',
      price: '3000',
      calories: '300 kcal',
      allergy: 'Contains nuts',
      title: 'Amala From Yakoyo Street',
    },
  ];

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
      <Breadcrumb fontSize={{ base: '18px', md: '32px' }} separator="/">
        <BreadcrumbItem>
          <BreadcrumbLink as={Link} href="/meals" prefetch={false}>
            Meals
          </BreadcrumbLink>
        </BreadcrumbItem>

        <BreadcrumbItem>
          <BreadcrumbLink>{product.title}</BreadcrumbLink>
        </BreadcrumbItem>
      </Breadcrumb>
      <MealCarousel product={product} />
      <PriceRating />
      <RelatedMeals products={products} />
      <CustomerReview />
    </VStack>
  );
}
