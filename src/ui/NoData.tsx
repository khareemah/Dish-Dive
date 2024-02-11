'use client';
import {
  Button,
  Center,
  CenterProps,
  Heading,
  ImageProps,
  VStack,
} from '@chakra-ui/react';

import ChakraNextImage from './ChakraNextImage';

type Props = CenterProps & {
  retryHandler?(): void;
  label?: string;
  buttonLabel?: string;
  isLoading?: boolean;
  maxImgH?: ImageProps['maxH'];
  hideIcon?: boolean;
};

function NoData({
  retryHandler,
  h,
  label,
  buttonLabel,
  isLoading,
  maxImgH,
  hideIcon,
  ...rest
}: Props) {
  return (
    <Center w="full" minH={h ?? '250px'} {...rest}>
      <VStack w="full" h="full" justify="center" align="center" spacing="4">
        {!hideIcon && (
          <ChakraNextImage
            src="/assets/images/no-data.svg"
            alt="no-data-logo"
            height={200}
            width={200}
            maxH={maxImgH ?? '150px'}
          />
        )}
        <Heading fontWeight="semibold" fontSize="lg">
          {label ?? 'No Data Found'}
        </Heading>
        {!!retryHandler && (
          <Button
            size="lg"
            w="150px"
            onClick={retryHandler}
            isDisabled={isLoading}
            isLoading={isLoading}
          >
            {buttonLabel ?? 'Retry'}
          </Button>
        )}
      </VStack>
    </Center>
  );
}

export default NoData;
