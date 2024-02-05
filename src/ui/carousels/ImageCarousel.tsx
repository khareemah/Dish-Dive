'use client';
import {
  Box,
  BoxProps,
  ButtonProps,
  HStack,
  StackProps,
  VStack,
} from '@chakra-ui/react';
import {
  type EmblaCarouselType as CarouselApi,
  type EmblaOptionsType as CarouselOptions,
  type EmblaPluginType as CarouselPlugin,
} from 'embla-carousel';
import useEmblaCarousel from 'embla-carousel-react';
import { ReactNode, useCallback, useEffect, useState } from 'react';

type Props<T> = {
  items: T[];
  renderItem(item: T): ReactNode;
  renderThumbs(item: T): ReactNode;
  carouselOptions?: CarouselApi;
  carouselPlugins?: CarouselPlugin[];
  itemProps?: Omit<BoxProps, 'minW'>;
  buttonProps?: Omit<ButtonProps, 'variant'>;
  spacing?: StackProps['spacing'];
  containerSpacing?: StackProps['spacing'];
};

function ImageCarousel<T>({
  carouselOptions = {
    align: 'start',
    loop: false,
  } as any,
  carouselPlugins = [],
  items,
  renderItem,
  renderThumbs,
  itemProps,
  spacing = '1rem',
  containerSpacing = '3rem',
}: Props<T>) {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [emblaMainRef, emblaMainApi] = useEmblaCarousel(
    carouselOptions as CarouselOptions,
    carouselPlugins
  );

  const [emblaThumbsRef, emblaThumbsApi] = useEmblaCarousel({
    containScroll: 'keepSnaps',
    dragFree: true,
  });

  const onThumbClick = useCallback(
    (index: number) => {
      if (!emblaMainApi || !emblaThumbsApi) return;
      emblaMainApi.scrollTo(index);
    },
    [emblaMainApi, emblaThumbsApi]
  );

  const onSelect = useCallback(() => {
    if (!emblaMainApi || !emblaThumbsApi) return;
    setSelectedIndex(emblaMainApi.selectedScrollSnap());
    emblaThumbsApi.scrollTo(emblaMainApi.selectedScrollSnap());
  }, [emblaMainApi, emblaThumbsApi, setSelectedIndex]);

  useEffect(() => {
    if (!emblaMainApi) return;
    onSelect();
    emblaMainApi.on('select', onSelect);
    emblaMainApi.on('reInit', onSelect);
  }, [emblaMainApi, onSelect]);

  return (
    <VStack w="full" overflow="hidden" spacing={containerSpacing}>
      <Box w="full" ref={emblaMainRef}>
        <HStack
          w="full"
          style={{ backfaceVisibility: 'hidden', touchAction: 'pan-y' }}
          spacing={spacing}
        >
          {items.map((item, i) => (
            <Box
              key={i}
              minW="0"
              w="full"
              flexShrink="0"
              display="flex"
              justifyContent="center"
              alignItems="center"
              alignSelf="stretch"
              cursor="grab"
              _active={{ cursor: 'grabbing' }}
              {...itemProps}
            >
              {renderItem(item)}
            </Box>
          ))}
        </HStack>

        <Box ref={emblaThumbsRef} mt="4">
          <HStack w="full" spacing="4" flexShrink="0">
            {items.map((item, index) => (
              <Box
                flexShrink="0"
                w="fit-content"
                h="full"
                onClick={() => onThumbClick(index)}
                opacity={index === selectedIndex ? 1 : 0.4}
                cursor="pointer"
                key={index}
                transition="opacity 0.2s"
              >
                {renderThumbs(item)}
              </Box>
            ))}
          </HStack>
        </Box>
      </Box>
    </VStack>
  );
}

export default ImageCarousel;
