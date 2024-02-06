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
import useEmblaCarousel, {
  EmblaOptionsType,
  EmblaPluginType,
} from 'embla-carousel-react';
import { ReactNode } from 'react';

import useCarouselButtons from '@/src/hooks/useCarouselButtons';

type Props<T> = {
  items: T[];
  renderItem(item: T): ReactNode;
  carouselOptions?: EmblaOptionsType;
  carouselPlugins?: EmblaPluginType[];
  itemProps?: Omit<BoxProps, 'minW'>;
  buttonProps?: Omit<IconButtonProps, 'icon'>;
  spacing?: StackProps['spacing'];
};

function ArrowButtonCarousel<T>({
  carouselOptions = {
    align: 'start',
    loop: false,
  },
  carouselPlugins = [],
  items,
  renderItem,
  buttonProps,
  itemProps,
  spacing = '1rem',
}: Props<T>) {
  const [emblaRef, emblaApi] = useEmblaCarousel(
    carouselOptions,
    carouselPlugins
  );

  const {
    nextBtnDisabled,
    onNextButtonClick,
    onPrevButtonClick,
    prevBtnDisabled,
  } = useCarouselButtons(emblaApi);

  return (
    <Center w="full" position="relative" overflow="hidden">
      <Box w="full" ref={emblaRef}>
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
