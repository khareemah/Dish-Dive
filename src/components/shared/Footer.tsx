'use client';
import { ArrowForwardIcon } from '@chakra-ui/icons';
import {
  Heading,
  HStack,
  IconButton,
  Input,
  InputGroup,
  InputRightElement,
  Link,
  SimpleGrid,
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
    <VStack
      w="full"
      bgColor="#121212"
      as="footer"
      align="flex-start"
      h="full"
      minH="164px"
      spacing="6"
      py="60px"
    >
      <VStack
        maxW="container.md"
        w="full"
        mx="auto"
        flex="1"
        spacing="60px"
        direction={{ base: 'column', md: 'row' }}
        px={{ base: '20px', lg: '60px' }}
        align="flex-start"
      >
        <SimpleGrid
          columns={{ base: 1, md: 2 }}
          gap={{ base: 6, md: 12 }}
          w="full"
        >
          {footerSections.map((section) => (
            <VStack w="full" spacing="4" align="flex-start" key={section.title}>
              <Heading
                lineHeight="28px"
                fontWeight="700"
                color="#FFF"
                fontSize="16px"
              >
                {section.title}
              </Heading>
              <VStack align="flex-start" spacing="2">
                {section.links.map((link) =>
                  link.isExternal ? (
                    <Link
                      key={link.href}
                      href={link.href}
                      isExternal
                      color="#F3EBFA"
                    >
                      {link.label}
                    </Link>
                  ) : (
                    <NextLink key={link.href} href={link.href}>
                      <Text color="#F3EBFA">{link.label}</Text>
                    </NextLink>
                  )
                )}
              </VStack>
            </VStack>
          ))}
        </SimpleGrid>

        <VStack
          w="full"
          p="4"
          rounded="5px"
          spacing="24px"
          align="flex-start"
          bg="#333"
        >
          <Heading color="#FFF" fontSize="18px">
            Subscribe
          </Heading>
          <InputGroup w="full" size="lg">
            <Input
              placeholder="Email Address"
              variant="ghost"
              focusBorderColor="#FFF"
              sx={{ '::placeholder': { color: '#cdc6c6' } }}
              bgColor="#000"
              size="lg"
            />
            <InputRightElement>
              <IconButton
                rounded="md"
                aria-label="Search"
                h="full"
                w="full"
                bg="#FFCC48"
                icon={<ArrowForwardIcon color="#000" fontSize="30px" />}
              />
            </InputRightElement>
          </InputGroup>
          <Text
            w="full"
            fontWeight="400"
            fontSize="14px"
            color="#F3EBFA
"
          >
            Hello, we are ABC. trying to make an effort to put the right people
            for you to get the best results. Just insight
          </Text>
        </VStack>
        <VStack w="full" align="flex-start" spacing="3">
          <ChakraNextImage
            src="/assets/images/logo.png"
            alt=""
            width={30}
            height={30}
          />
          <HStack w="full" spacing="6">
            <Text color="#FFF">Terms</Text>
            <Text color="#FFF">Privacy</Text>
            <Text color="#FFF">Cookies</Text>
          </HStack>
          <HStack w="full" spacing="2">
            <IconButton
              aria-label="social media icon"
              icon={<CiTwitter fontSize="30px" />}
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
              icon={<CiInstagram fontSize="30px" />}
              variant="ghost"
              color="#FFF"
              rounded="full"
              colorScheme="black"
            />
          </HStack>
        </VStack>
      </VStack>
    </VStack>
  );
}
