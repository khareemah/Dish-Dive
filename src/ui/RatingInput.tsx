import { Button, HStack } from '@chakra-ui/react';

import StarIcon from '../icons/StarIcon';

type Props = {
  max?: number;
  value: number;
  onChange(newRating: number): void;
};

function RatingInput({ value, onChange, max = 5 }: Props) {
  return (
    <HStack spacing="1" align="center">
      {Array(max)
        .fill('')
        .map((_, i) => (
          <Button
            variant="unstyled"
            h="fit-content"
            minW="fit-content"
            key={i}
            onClick={() => onChange(value === i + 1 ? 0 : i + 1)}
            p="0"
          >
            <StarIcon color={i < value ? '#F1C40F' : '#D9D9D9'} />
          </Button>
        ))}
    </HStack>
  );
}

export default RatingInput;
