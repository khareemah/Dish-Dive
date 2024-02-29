'use client';
import { ArrowForwardIcon } from '@chakra-ui/icons';
import {
  Box,
  Heading,
  HStack,
  IconButton,
  Input,
  InputGroup,
  InputRightElement,
  Link,
  Stack,
  Text,
  VStack,
} from '@chakra-ui/react';
import NextLink from 'next/link';
import { CiFacebook, CiInstagram, CiTwitter } from 'react-icons/ci';

import ChakraNextImage from '@/src/ui/ChakraNextImage';

const footerSections = [
  {
    title: 'Explore',
    links: [
      {
        label: 'Resources',
        href: '#',
        isExternal: true,
      },
      {
        label: 'Blog',
        href: '#',
        isExternal: true,
      },
      {
        label: 'Documents',
        href: '#',
        isExternal: true,
      },
    ],
  },
  {
    title: 'Company',
    links: [
      {
        label: 'About Us',
        href: '#',
      },
      {
        label: 'Partners',
        href: '#',
      },
      {
        label: 'Customers',
        href: '#',
      },
      {
        label: 'Contact Us',
        href: '#',
      },
    ],
  },
];

export default function Footer() {
  return (
    <Box bgColor="#121212" w="full">
      <VStack
        w="full"
        as="footer"
        align="flex-start"
        h="full"
        py="40px"
        px="20px"
        maxW="container.md"
        mx="auto"
        spacing="12"
      >
        <Stack
          direction={{ base: 'column', md: 'row' }}
          w="full"
          align="flex-start"
          spacing={{ base: 8, md: 3 }}
        >
          {footerSections.map((section) => (
            <VStack
              flex="1"
              w="full"
              spacing="4"
              align="flex-start"
              key={section.title}
            >
              <Heading
                lineHeight="28px"
                fontWeight="600"
                color="#FFF"
                fontSize="16px"
              >
                {section.title}
              </Heading>
              <VStack align="flex-start" w="full" spacing="2">
                {section.links.map((link, i) =>
                  link.isExternal ? (
                    <Link key={i} href={link.href} isExternal color="#F9F9F9">
                      {link.label}
                    </Link>
                  ) : (
                    <NextLink key={i} href={link.href}>
                      <Text color="#F3EBFA">{link.label}</Text>
                    </NextLink>
                  )
                )}
              </VStack>
            </VStack>
          ))}
        </Stack>

        <VStack
          flex="1"
          w="full"
          bg="rgba(250, 244, 255, 0.05)"
          align="flex-start"
          p={{ base: '4', md: '8' }}
          spacing="6"
          rounded="md"
        >
          <Text
            color="#FFF"
            fontSize={{ base: '18px', md: '20px' }}
            fontWeight="500"
          >
            Subscribe
          </Text>
          <InputGroup w="full" size="md">
            <Input
              placeholder="Email Address"
              variant="ghost"
              focusBorderColor="#000"
              bgColor="#000"
              color="#FFF"
              sx={{ '::placeholder': { color: 'white.50' } }}
              size="md"
            />
            <InputRightElement>
              <IconButton
                rounded="md"
                aria-label="Search"
                h="full"
                w="full"
                bg="yellow.600"
                icon={<ArrowForwardIcon color="#000" fontSize="22px" />}
              />
            </InputRightElement>
          </InputGroup>
          <Text w="full" color="#F3EBFA" lineHeight="28px">
            Hello, we are DISH DIVE trying to make an effort to get you the best
            of the best meals for you to get the best results. Just insight.
          </Text>
        </VStack>

        <Stack
          direction={{ base: 'column', md: 'row' }}
          w="full"
          justify="space-between"
          spacing={{ base: 6, md: 3 }}
          align={{ base: 'flex-start', md: 'center' }}
        >
          <Box w="fit-content">
            <ChakraNextImage
              src="/assets/images/logo.png"
              alt=""
              w="full"
              width={30}
              height={30}
            />
          </Box>
          <HStack spacing="4">
            <Text color="#FFF">Terms</Text>
            <Text color="#FFF">Privacy</Text>
            <Text color="#FFF">Cookies</Text>
          </HStack>
          <HStack spacing="4">
            <IconButton
              aria-label="social media icon"
              icon={<CiInstagram fontSize="30px" />}
              variant="ghost"
              color="#FFF"
              rounded="full"
              colorScheme="black"
            />

            <IconButton
              aria-label="social media icon"
              icon={<CiFacebook fontSize="30px" />}
              variant="ghost"
              color="#FFF"
              rounded="full"
              colorScheme="black"
            />

            <IconButton
              aria-label="social media icon"
              icon={<CiTwitter fontSize="30px" />}
              variant="ghost"
              color="#FFF"
              rounded="full"
              colorScheme="black"
            />
          </HStack>
        </Stack>
      </VStack>
    </Box>
  );
}
