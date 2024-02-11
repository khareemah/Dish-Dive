import { Heading } from '@chakra-ui/react';

import { TRestaurant } from '@/src/constant/allRestaurants';
import { BackButton } from '@/src/ui/BackButton';

type Props = {
  restaurant: TRestaurant;
};

export default function PageHeader({ restaurant }: Props) {
  return (
    <BackButton to="..">
      <Heading fontSize="22px" fontWeight="500">
        {restaurant.title}
      </Heading>
    </BackButton>
  );
}
