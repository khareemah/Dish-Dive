import './global.css';
import 'react-toastify/dist/ReactToastify.css';

import { Toast } from '@chakra-ui/react';
import type { Metadata } from 'next';
// import Script from "next/script";
import { PropsWithChildren } from 'react';

import AppProviders from '../providers';
import GlobalFont from '../providers/GlobalFont';

export const metadata: Metadata = {
  title: 'FOOD APP',
  description: 'Get the best fod in your town with deep dive',
  icons: {
    icon: '/assets/images/favicon.ico',
  },
};

export default function RootLayout({ children }: PropsWithChildren) {
  return (
    <html lang="en">
      <body>
        <GlobalFont />
        <Toast />
        <AppProviders>{children}</AppProviders>
      </body>
    </html>
  );
}
