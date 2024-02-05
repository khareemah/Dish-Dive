'use client';
import { HamburgerIcon } from '@chakra-ui/icons';
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
          <ChakraNextImage
            src="/assets/images/logo.png"
            alt=""
            width={30}
            height={30}
          />

          <HStack
            wrap="nowrap"
            whiteSpace="nowrap"
            spacing="0"
            // display={{ base: "none", md: "flex" }}
          >
            <CiLocationOn fontSize="30px" />
            <Text fontWeight="600">Lekki, Lagos</Text>
          </HStack>

          <IconButton
            aria-label="Open navigation"
            variant="ghost"
            icon={<HamburgerIcon fontSize="2xl" />}
            onClick={onOpen}
          />
        </HStack>
      </Box>
    </>
    // <Box w="full" top="0" left="0" zIndex="10">
    //   <VStack
    //     as="nav"
    //     w="full"
    //     minH="80px"
    //     maxW="container.md"
    //     margin="0 auto"
    //     align="flex-start"
    //     justify="center"
    //     py="4"
    //     spacing="7"
    //     px="20px"
    //   >
    //     <HStack
    //       justify="space-between"
    //       w="full"
    //       flexWrap={{ base: 'wrap', md: 'nowrap' }}
    //       spacing="6"
    //     >
    //       <ChakraNextImage
    //         src="/assets/images/logo.png"
    //         alt=""
    //         width={30}
    //         height={30}
    //       />
    //       <HStack spacing="4" w="full" justify="flex-end">
    //         <Button
    //           size="lg"
    //           variant="ghost"
    //           w="150px"
    //           bg="#FAFAFA"
    //           border="2px solid #FBBC55"
    //           color="#FBBC55"
    //           _hover={{
    //             bgColor: '#FBBC55',
    //             color: '#FFF',
    //           }}
    //         >
    //           Login
    //         </Button>
    //         <Button size="lg" w="150px" color="#FFF">
    //           Sign up
    //         </Button>
    //       </HStack>
    //     </HStack>
    //   </VStack>
    // </Box>
  );
}
