import { Heading, VStack } from '@chakra-ui/react';

import ChakraNextImage from '@/src/ui/ChakraNextImage';

export default function NoMeals() {
  return (
    <VStack align="center" justify="center" spacing="0" w="full">
      <ChakraNextImage
        src="/assets/images/no-data.svg"
        alt=""
        w="full"
        width={400}
        height={300}
      />
      <Heading fontSize="22px">No Results Found</Heading>
    </VStack>
  );
}
