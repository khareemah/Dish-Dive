import { Heading, Text, VStack } from '@chakra-ui/react';

import TestimonialCarousel from './TestimonialCarousel';

export default function OurStory() {
  return (
    <VStack
      w="full"
      align="flex-start"
      maxW="container.md"
      mx="auto"
      spacing="12"
      px="20px"
      py="80px"
    >
      <VStack w="full" spacing="2" align="flex-start">
        <Heading
          fontSize={{ base: '28px', lg: '40px' }}
          textAlign={{ base: 'center', md: 'left' }}
        >
          Our Success Story
        </Heading>
        <Text color="#5E6973" textAlign="center">
          Hear what people are saying about us
        </Text>
      </VStack>
      <TestimonialCarousel />
    </VStack>
  );
}
