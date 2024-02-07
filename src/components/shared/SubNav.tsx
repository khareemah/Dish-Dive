'use client';
import { SearchIcon } from '@chakra-ui/icons';
import {
  Box,
  HStack,
  IconButton,
  Input,
  InputGroup,
  InputRightElement,
} from '@chakra-ui/react';
import { useRouter, useSearchParams } from 'next/navigation';
import { useCallback, useState } from 'react';

export default function SubNav() {
  const router = useRouter();
  const [value, setValue] = useState('');

  const searchParams = useSearchParams();

  const onSearch = useCallback(() => {
    const newSearchParams = new URLSearchParams(searchParams);
    newSearchParams.set('q', value);
    router.push(`/meals?${newSearchParams.toString()}`);
  }, [router, searchParams, value]);

  return (
    <Box
      bg="#FBBC55"
      w="full"
      position="fixed"
      top="80px"
      left="0"
      zIndex="docked"
    >
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
            onChange={(e) => setValue(e.target.value)}
          />
          <InputRightElement>
            <IconButton
              rounded="md"
              aria-label="Search"
              h="full"
              w="full"
              bg="yellow.600"
              icon={<SearchIcon color="#fff" />}
              onClick={onSearch}
            />
          </InputRightElement>
        </InputGroup>
      </HStack>
    </Box>
  );
}
