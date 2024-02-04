'use client';
import { SearchIcon } from '@chakra-ui/icons';
import {
  Box,
  HStack,
  IconButton,
  Input,
  InputGroup,
  InputRightElement,
  Text,
} from '@chakra-ui/react';
import { CiLocationOn } from 'react-icons/ci';

export default function SubNav() {
  return (
    <Box bg="#FBBC55" w="full">
      <HStack
        w="full"
        justify="space-between"
        spacing="5"
        minH="80px"
        px="20px"
        maxW="container.md"
        margin="0 auto"
      >
        <InputGroup w="full" size="lg">
          <Input
            placeholder="Search for Meals"
            variant="ghost"
            focusBorderColor="#FFF"
            sx={{ '::placeholder': { color: 'black.50' } }}
            size="lg"
          />
          <InputRightElement>
            <IconButton
              rounded="md"
              aria-label="Search"
              h="full"
              w="full"
              bg="yellow.600"
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
    </Box>
  );
}
