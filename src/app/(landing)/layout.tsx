import { Box, VStack } from '@chakra-ui/react';
import { PropsWithChildren } from 'react';

import Footer from '@/src/components/shared/Footer';
import Navbar from '@/src/components/shared/Navbar';

export default function HomeLayout({ children }: PropsWithChildren) {
  return (
    <VStack as="main" w="full" minH="100vh" spacing="0">
      <Navbar />
      <Box as="section" w="full" flex="1">
        {children}
      </Box>
      <Footer />
    </VStack>
  );
}
