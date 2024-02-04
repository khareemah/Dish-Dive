'use client';
import { Box, Button, HStack, VStack } from '@chakra-ui/react';

import ChakraNextImage from '@/src/ui/ChakraNextImage';

export default function Navbar() {
  return (
    <Box w="full" top="0" left="0" zIndex="10">
      <VStack
        as="nav"
        w="full"
        minH="80px"
        maxW="container.md"
        margin="0 auto"
        align="flex-start"
        justify="center"
        py="4"
        spacing="7"
        px="20px"
      >
        <HStack
          justify="space-between"
          w="full"
          flexWrap={{ base: 'wrap', md: 'nowrap' }}
          spacing="6"
        >
          <ChakraNextImage
            src="/assets/images/logo.png"
            alt=""
            width={30}
            height={30}
          />
          <HStack spacing="4" w="full" justify="flex-end">
            <Button
              size="lg"
              variant="ghost"
              w="150px"
              bg="#FAFAFA"
              border="2px solid #FBBC55"
              color="#FBBC55"
              _hover={{
                bgColor: '#FBBC55',
                color: '#FFF',
              }}
            >
              Login
            </Button>
            <Button size="lg" w="150px" color="#FFF">
              Sign up
            </Button>
          </HStack>
        </HStack>
      </VStack>
    </Box>
  );
}
