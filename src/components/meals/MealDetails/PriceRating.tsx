'use client';
import {
  CircularProgress,
  CircularProgressLabel,
  Stack,
  Text,
  VStack,
} from '@chakra-ui/react';
// import { useState } from 'react';

export default function PriceRating() {
  // const [sliderValue, setSliderValue] = useState(50);
  // console.log(sliderValue);
  // const labelStyles = {
  //   mt: '2',
  //   ml: '-2.5',
  //   fontSize: 'sm',
  // };

  return (
    <VStack w="full" align="flex-start" pb="50px" spacing="20">
      <VStack w="full" align="flex-start" spacing="6">
        <Text fontSize={{ base: '22px', md: '28px' }}>
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
              value={80}
              size="150px"
              thickness="4px"
              color="yellow.400"
            >
              <CircularProgressLabel>80+</CircularProgressLabel>
            </CircularProgress>
            <Text fontWeight="600" fontSize="18px">
              Good Value
            </Text>
          </VStack>

          <VStack>
            <CircularProgress
              value={20}
              size="150px"
              thickness="4px"
              color="yellow.400"
            >
              <CircularProgressLabel>20+</CircularProgressLabel>
            </CircularProgress>
            <Text fontWeight="600" fontSize="18px">
              Okay
            </Text>
          </VStack>

          <VStack>
            <CircularProgress
              value={5}
              size="150px"
              thickness="4px"
              color="yellow.400"
            >
              <CircularProgressLabel>5+</CircularProgressLabel>
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
