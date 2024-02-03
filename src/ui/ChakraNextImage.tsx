/* eslint-disable @typescript-eslint/indent */
'use client';
import { chakra, ImageProps as ChakraImageProps } from '@chakra-ui/react';
import Image, { ImageProps as NextImageProps } from 'next/image';

const nextImagePropsSet = new Set([
  'src',
  'width',
  'height',
  'alt',
  'loader',
  'fill',
  'sizes',
  'quality',
  'priority',
  'onLoadingComplete',
  'blurDataURL',
  'placeholder',
  'unoptimized',
]);

// This component wraps the next/Image with chakra UI
// to allow usage with styled props.
// This should be used for images throughout the application
const ForwardedNextImage = chakra(Image, {
  shouldForwardProp: (prop) => nextImagePropsSet.has(prop),
});

type Props = NextImageProps &
  Required<Pick<NextImageProps, 'alt' | 'width' | 'height' | 'src'>> &
  Omit<ChakraImageProps, 'width' | 'height'>;

function ChakraNextImage(props: Props) {
  return <ForwardedNextImage {...props} />;
}

export default ChakraNextImage;
