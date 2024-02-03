// All Added Providers should be added here
import { PropsWithChildren } from 'react';

import ChakraProvider from './chakra';
import RouteProgress from './RouteProgress';

export default function AppProviders({ children }: PropsWithChildren) {
  return (
    <ChakraProvider>
      <RouteProgress />
      {children}
    </ChakraProvider>
  );
}
