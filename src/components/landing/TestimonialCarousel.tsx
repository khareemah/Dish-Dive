'use client';
import { ChevronLeftIcon, ChevronRightIcon } from '@chakra-ui/icons';
import {
  AspectRatio,
  Box,
  HStack,
  IconButton,
  Text,
  VStack,
} from '@chakra-ui/react';
import Autoplay from 'embla-carousel-autoplay';
import useEmblaCarousel from 'embla-carousel-react';

import testimonials from '@/src/constant/testimonials';
import useCarouselButtons from '@/src/hooks/useCarouselButtons';
import ChakraNextImage from '@/src/ui/ChakraNextImage';

type TTestimonial = {
  imgSrc: string;
  testimonial: JSX.Element;
  customerName: string;
};

function TestimonialItem({ testimonial }: { testimonial: TTestimonial }) {
  return (
    <VStack spacing="8" w="full" h="full" p="3">
      <AspectRatio w={{ base: 'full', md: '160px' }} ratio={1 / 1}>
        <ChakraNextImage
          src={testimonial.imgSrc}
          alt=""
          w="full"
          h="full"
          width={337}
          height={225}
        />
      </AspectRatio>
      <Text fontSize="14px" color="#5E6973" textAlign="center">
        {testimonial.testimonial}
      </Text>
      <Text fontSize="14px" fontWeight="bold">
        {testimonial.customerName}
      </Text>
    </VStack>
  );
}

export default function TestimonialCarousel() {
  const [emblaRef, emblaApi] = useEmblaCarousel(
    {
      align: 'start',
      loop: false,
      skipSnaps: true,
    },
    [
      Autoplay({
        stopOnInteraction: true,
        stopOnLastSnap: true,
        stopOnMouseEnter: true,
        delay: 5_000,
      }),
    ]
  );

  const {
    nextBtnDisabled,
    onNextButtonClick,
    onPrevButtonClick,
    prevBtnDisabled,
  } = useCarouselButtons(emblaApi);

  return (
    <VStack w="full" spacing="50px">
      <Box w="full" overflow="hidden" ref={emblaRef}>
        <HStack
          w="full"
          style={{ backfaceVisibility: 'hidden', touchAction: 'pan-y' }}
          spacing="4"
        >
          {testimonials.map((testimonial, i) => (
            <VStack
              key={i}
              spacing="6"
              minW="0"
              w={{ base: 'full', lg: '49%' }}
              flexShrink="0"
              alignSelf="stretch"
              justify="space-between"
            >
              <TestimonialItem
                key={testimonial.customerName}
                testimonial={testimonial}
              />
            </VStack>
          ))}
        </HStack>
      </Box>

      <HStack w="fit-content" justify="center" align="center" spacing="6">
        <IconButton
          aria-label="Previous Testimonials"
          rounded="full"
          bgColor="transparent"
          border="2px solid #FFCC48"
          color="#FFCC48"
          icon={<ChevronLeftIcon fontSize="2xl" />}
          onClick={onPrevButtonClick}
          isDisabled={prevBtnDisabled}
          flexShrink="0"
          _hover={{
            color: '#FFF',
            bg: '#FFCC48',
          }}
        />
        <IconButton
          aria-label="Next Testimonials"
          rounded="full"
          bgColor="transparent"
          border="2px solid #FFCC48"
          color="#FFCC48"
          icon={<ChevronRightIcon fontSize="2xl" />}
          onClick={onNextButtonClick}
          isDisabled={nextBtnDisabled}
          flexShrink="0"
          _hover={{
            color: '#FFF',
            bg: '#FFCC48',
          }}
        />
      </HStack>
    </VStack>
  );
}
