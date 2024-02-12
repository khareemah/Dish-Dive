'use client';
import { ChevronLeftIcon } from '@chakra-ui/icons';
import { Button } from '@chakra-ui/react';
import Link from 'next/link';

type Props = {
  to: string;
  children: React.ReactNode;
};

export function BackButton({ to, children }: Props) {
  return (
    <Link href={to}>
      <Button
        variant="link"
        colorScheme="black"
        size="lg"
        leftIcon={<ChevronLeftIcon fontSize="2xl" />}
        fontSize="22px"
        fontWeight="600"
        lineHeight="48px"
        letterSpacing="0.32px"
        _hover={{ textDecoration: 'none' }}
      >
        {children}
      </Button>
    </Link>
  );
}
