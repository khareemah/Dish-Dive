import { Breadcrumb, BreadcrumbItem, BreadcrumbLink } from '@chakra-ui/react';
import Link from 'next/link';

export default function PageHeader({ product }) {
  return (
    <Breadcrumb fontSize={{ base: '18px', md: '32px' }} separator="/">
      <BreadcrumbItem>
        <BreadcrumbLink as={Link} href="/meals" prefetch={false}>
          Meals
        </BreadcrumbLink>
      </BreadcrumbItem>

      <BreadcrumbItem>
        <BreadcrumbLink>{product.title}</BreadcrumbLink>
      </BreadcrumbItem>
    </Breadcrumb>
  );
}
