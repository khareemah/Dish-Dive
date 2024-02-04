import { Box, VStack } from '@chakra-ui/react';
import { PropsWithChildren } from 'react';

import Footer from '@/src/components/shared/Footer';
import Navbar from '@/src/components/shared/Navbar';
import SubNav from '@/src/components/shared/SubNav';

export default function HomeLayout({ children }: PropsWithChildren) {
  return (
    <VStack as="main" w="full" minH="100vh" spacing="0">
      <Navbar />
      <SubNav />
      <Box as="section" w="full" flex="1">
        {children}
      </Box>
      <Footer />
    </VStack>
  );
}
