import './global.css';
import 'react-toastify/dist/ReactToastify.css';

import type { Metadata } from 'next';
import { PropsWithChildren } from 'react';

import AppProviders from '../providers';
import GlobalFont from '../providers/GlobalFont';

export const metadata: Metadata = {
  title: 'Dish Dive',
  description: 'Get the best fod in your town with deep dive',
  icons: {
    icon: '/assets/images/logo.png',
  },
};

export default function RootLayout({ children }: PropsWithChildren) {
  return (
    <html lang="en">
      <body>
        <GlobalFont />
        <AppProviders>{children}</AppProviders>
      </body>
    </html>
  );
}
