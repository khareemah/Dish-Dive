'use client';
import { ChevronLeftIcon, ChevronRightIcon } from '@chakra-ui/icons';
import {
  Box,
  BoxProps,
  Center,
  Fade,
  HStack,
  IconButton,
  IconButtonProps,
  StackProps,
} from '@chakra-ui/react';
import {
  type EmblaCarouselType as CarouselApi,
  type EmblaOptionsType as CarouselOptions,
  type EmblaPluginType as CarouselPlugin,
} from 'embla-carousel';
import useEmblaCarousel from 'embla-carousel-react';
import { ReactNode } from 'react';

import useCarouselButtons from '@/src/hooks/useCarouselButtons';

type Props<T> = {
  items: T[];
  renderItem(item: T): ReactNode;
  carouselOptions?: CarouselApi;
  carouselPlugins?: CarouselPlugin[];
  itemProps?: Omit<BoxProps, 'minW'>;
  buttonProps?: Omit<IconButtonProps, 'icon'>;
  spacing?: StackProps['spacing'];
};

function ArrowButtonCarousel<T>({
  carouselOptions = {
    align: 'start',
    loop: false,
  } as any,
  carouselPlugins = [],
  items,
  renderItem,
  buttonProps,
  itemProps,
  spacing = '1rem',
}: Props<T>) {
  const [emblaMainRef, emblaMainApi] = useEmblaCarousel(
    carouselOptions as CarouselOptions,
    carouselPlugins
  );

  const {
    nextBtnDisabled,
    onNextButtonClick,
    onPrevButtonClick,
    prevBtnDisabled,
  } = useCarouselButtons(emblaMainApi);

  return (
    <Center w="full" position="relative" overflow="hidden">
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
      </Box>

      <Fade
        unmountOnExit
        in={!prevBtnDisabled}
        style={{
          width: 'fit-content',
          height: 'fit-content',
          position: 'absolute',
          left: 0,
        }}
      >
        <IconButton
          aria-label="Previous Slide"
          rounded="full"
          icon={<ChevronLeftIcon fontSize="2xl" />}
          onClick={onPrevButtonClick}
          isDisabled={prevBtnDisabled}
          pointerEvents={prevBtnDisabled ? 'none' : 'auto'}
          flexShrink="0"
          shadow="sm"
          {...buttonProps}
        />
      </Fade>

      <Fade
        unmountOnExit
        in={!nextBtnDisabled}
        style={{
          width: 'fit-content',
          height: 'fit-content',
          position: 'absolute',
          right: 0,
        }}
      >
        <IconButton
          aria-label="Next Testimonials"
          rounded="full"
          icon={<ChevronRightIcon fontSize="2xl" />}
          onClick={onNextButtonClick}
          isDisabled={nextBtnDisabled}
          pointerEvents={nextBtnDisabled ? 'none' : 'auto'}
          flexShrink="0"
          shadow="sm"
          {...buttonProps}
        />
      </Fade>
    </Center>
  );
}

export default ArrowButtonCarousel;
