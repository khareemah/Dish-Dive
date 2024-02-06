'use client';
import { ChevronDownIcon, HamburgerIcon } from '@chakra-ui/icons';
import {
  Box,
  Button,
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerOverlay,
  HStack,
  IconButton,
  Menu,
  MenuButton,
  Text,
  useDisclosure,
  VStack,
} from '@chakra-ui/react';
import Link from 'next/link';
import { CiLocationOn } from 'react-icons/ci';

import ChakraNextImage from '@/src/ui/ChakraNextImage';

export default function Navbar() {
  const { isOpen, onClose, onOpen } = useDisclosure();

  return (
    <>
      <Drawer isOpen={isOpen} onClose={onClose} placement="left">
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />

          <DrawerBody>
            <VStack w="full" h="full" justify="space-between" py="50px">
              <VStack
                w="full"
                spacing="32px"
                align="flex-start"
                onClick={onClose}
              >
                <Link href="#">About Us</Link>
                <Link href="#">Partners</Link>
                <Link href="/services">Customers</Link>
                <Link href="/contact-us">Contact</Link>
              </VStack>

              <VStack
                w="full"
                spacing="6"
                // display={isLoggedIn ? "none" : "flex"}
              >
                <Link href="#" style={{ width: '100%' }}>
                  <Button
                    size="lg"
                    w="full"
                    variant="outline"
                    onClick={onClose}
                  >
                    Login
                  </Button>
                </Link>
                <Link href="#" style={{ width: '100%' }}>
                  <Button size="lg" w="full" onClick={onClose}>
                    Create Account
                  </Button>
                </Link>
              </VStack>
            </VStack>
          </DrawerBody>
        </DrawerContent>
      </Drawer>

      <Box
        w="full"
        bgColor="#fafafa"
        position="fixed"
        top="0"
        zIndex="docked"
        minH="80px"
      >
        <HStack
          w="full"
          mx="auto"
          justify="space-between"
          spacing="4"
          as="nav"
          align="center"
          p="4"
          maxW="container.md"
          margin="0 auto"
        >
          <Link href="/">
            <ChakraNextImage
              src="/assets/images/logo.png"
              alt=""
              width={30}
              height={30}
            />
          </Link>

          <Menu>
            {() => (
              <>
                <MenuButton
                  rounded="md"
                  borderWidth="1px"
                  as={Button}
                  size="lg"
                  gap="12px"
                  variant="ghost"
                  colorScheme=""
                  fontSize="md"
                  border="none"
                  rightIcon={
                    <ChevronDownIcon
                      transition="all 0.3s"
                      transform={isOpen ? 'rotate(180deg)' : 'rotate(0deg)'}
                    />
                  }
                >
                  <HStack wrap="nowrap" whiteSpace="nowrap" spacing="0">
                    <CiLocationOn fontSize="30px" />
                    <Text fontWeight="600">Lekki, Lagos</Text>
                  </HStack>
                </MenuButton>
                {/* <Portal>
                  <MenuList
                    zIndex="dropdown"
                    rounded="none"
                    shadow="lg"
                    border="none"
                    py="26px"
                    px="0"
                  >
                    <MenuItem fontSize="sm">Place 1</MenuItem>
                    <MenuItem fontSize="sm">Place 2</MenuItem>
                  </MenuList>
                </Portal> */}
              </>
            )}
          </Menu>
          <IconButton
            aria-label="Open navigation"
            variant="ghost"
            icon={<HamburgerIcon fontSize="2xl" />}
            onClick={onOpen}
          />
        </HStack>
      </Box>
    </>
  );
}
