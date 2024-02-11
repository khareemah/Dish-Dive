'use client';
import {
  CircularProgress,
  CircularProgressLabel,
  Stack,
  Text,
  VStack,
} from '@chakra-ui/react';

export default function PriceRating({ priceRating }) {
  return (
    <VStack w="full" align="flex-start" py="80px" spacing="6">
      <VStack w="full" align="flex-start" spacing="6">
        <Text fontSize="22px" fontWeight="600">
          See Price Value Rating by the numbers
        </Text>

        <Stack
          w="full"
          direction={{ base: 'column', md: 'row' }}
          spacing="8"
          align="center"
          justify="center"
        >
          <VStack>
            <CircularProgress
              value={priceRating.goodValue}
              size="150px"
              thickness="4px"
              color="yellow.400"
            >
              <CircularProgressLabel>{`${priceRating.goodValue}+`}</CircularProgressLabel>
            </CircularProgress>
            <Text fontWeight="600" fontSize="18px">
              Good Value
            </Text>
          </VStack>

          <VStack>
            <CircularProgress
              value={priceRating.okay}
              size="150px"
              thickness="4px"
              color="yellow.400"
            >
              <CircularProgressLabel>{`${priceRating.okay}+`}</CircularProgressLabel>
            </CircularProgress>
            <Text fontWeight="600" fontSize="18px">
              Okay
            </Text>
          </VStack>

          <VStack>
            <CircularProgress
              value={priceRating.overpriced}
              size="150px"
              thickness="4px"
              color="yellow.400"
            >
              <CircularProgressLabel>
                {`${priceRating.overpriced}+`}
              </CircularProgressLabel>
            </CircularProgress>
            <Text fontWeight="600" fontSize="18px">
              Overpriced
            </Text>
          </VStack>
        </Stack>
      </VStack>
      {/* <VStack w="full" align="flex-start" spacing="6">
        <Text fontSize={{ base: '18px', md: '32px' }}>
          Your price value rating
        </Text>

        <Box p={4} pt={6} w="full">
          <Slider
            size="lg"
            aria-label="slider-ex-6"
            onChange={(val) => setSliderValue(val)}
          >
            <SliderMark value={25} {...labelStyles}>
              OverPriced
            </SliderMark>
            <SliderMark value={50} {...labelStyles}>
              Okay
            </SliderMark>
            <SliderMark value={75} {...labelStyles}>
              Good Value
            </SliderMark>
            <SliderTrack>
              <SliderFilledTrack />
            </SliderTrack>
            <SliderThumb />
          </Slider>
        </Box>
      </VStack> */}
    </VStack>
  );
}
