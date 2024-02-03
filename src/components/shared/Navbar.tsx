'use client';
import { SearchIcon } from '@chakra-ui/icons';
import {
  Box,
  Button,
  Heading,
  HStack,
  IconButton,
  Input,
  InputGroup,
  InputRightElement,
  Text,
  VStack,
} from '@chakra-ui/react';
import { useEffect, useState } from 'react';
import { CiLocationOn } from 'react-icons/ci';

export default function Navbar() {
  const [scrolling, setScrolling] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY || document.documentElement.scrollTop;

      if (scrollTop > 100) {
        setScrolling(true);
      } else {
        setScrolling(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    // Cleanup function to remove event listener when unmounting
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  return (
    <Box w="full" position="fixed" top="0" left="0" zIndex="10">
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
        bgColor={scrolling ? 'rgba(0,0,0, 0.5)' : 'transparent'}
      >
        <HStack
          justify="space-between"
          w="full"
          flexWrap={{ base: 'wrap', md: 'nowrap' }}
        >
          <Heading fontSize="30px" color="#FFCC48" letterSpacing="0">
            FoodApp
          </Heading>
          <HStack spacing="4" w="full" justify="flex-end">
            <Button
              size="lg"
              variant="ghost"
              w="150px"
              color="#FFF"
              _hover={{
                bgColor: '#FBBC55',
              }}
            >
              Login
            </Button>
            <Button size="lg" w="150px" color="#FFF">
              Sign up
            </Button>
          </HStack>
        </HStack>
        <HStack w="full" justify="space-between" spacing="5">
          <InputGroup w="full" size="lg">
            <Input
              placeholder="Search for places"
              variant="flushed"
              focusBorderColor="#FFCC48"
              color="#FFCC48"
              sx={{ '::placeholder': { color: '#FFCC48' } }}
              size="lg"
            />
            <InputRightElement>
              <IconButton
                rounded="md"
                aria-label="Search"
                h="full"
                w="full"
                icon={<SearchIcon color="#fff" />}
              />
            </InputRightElement>
          </InputGroup>
          <HStack
            wrap="nowrap"
            whiteSpace="nowrap"
            spacing="0"
            display={{ base: 'none', md: 'flex' }}
          >
            <CiLocationOn fontSize="30px" color="white" />
            <Text fontWeight="600" color="white">
              Lekki, Lagos
            </Text>
          </HStack>
        </HStack>
      </VStack>
    </Box>
  );
}
