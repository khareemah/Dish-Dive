import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  Text,
} from '@chakra-ui/react';
import Link from 'next/link';

import { TRestaurant } from '@/src/constant/allRestaurants';

type Props = {
  restaurant: TRestaurant;
};

export default function PageHeader({ restaurant }: Props) {
  return (
    <Breadcrumb fontSize="22px" separator="/" fontWeight="600">
      <BreadcrumbItem>
        <BreadcrumbLink as={Link} href="/meals" prefetch={false}>
          All Restaurants
        </BreadcrumbLink>
      </BreadcrumbItem>

      <BreadcrumbItem>
        <Text>{restaurant.title}</Text>
      </BreadcrumbItem>
    </Breadcrumb>
  );
}
