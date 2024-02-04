import { Heading, Text, VStack } from '@chakra-ui/react';

export default function SpecialOffer() {
  return (
    <VStack
      w="full"
      align="center"
      maxW="container.md"
      mx="auto"
      spacing={{ base: '60px', md: '80px' }}
      px="20px"
    >
      <VStack w="full" spacing="0">
        <Heading fontSize={{ base: '22px', md: '40px' }}>
          Special Offers
        </Heading>
        <Text color="#5E6973" textAlign="center">
          Ready to tantalize your taste buds without breaking the bank? Dive
          into our Special Offers section
        </Text>
      </VStack>
    </VStack>
  );
}
