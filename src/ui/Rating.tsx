'use client';
import { HStack } from '@chakra-ui/react';

import StarIcon from '../icons/StarIcon';

type Props = {
  rating: number;
  max?: number;
};

function Rating({ rating, max = 5 }: Props) {
  return (
    <HStack spacing="0" align="center">
      {Array(max)
        .fill('')
        .map((_, i) => (
          <StarIcon
            key={i}
            color={i + 1 <= Math.floor(rating) ? '#F1C40F' : '#D9D9D9'}
          />
        ))}
    </HStack>
  );
}

export default Rating;
