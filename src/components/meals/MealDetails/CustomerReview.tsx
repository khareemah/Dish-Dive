'use client';
import {
  Box,
  Button,
  Checkbox,
  FormControl,
  FormLabel,
  Input,
  Text,
  Textarea,
  VStack,
} from '@chakra-ui/react';
import { Controller, useForm } from 'react-hook-form';

import RatingInput from '@/src/ui/RatingInput';

export default function CustomerReview() {
  const { register, control } = useForm();
  return (
    <VStack w="full" align="flex-start" py="100px" spacing="3">
      <Text fontSize={{ base: '22px', md: '32px' }}>Submit your review</Text>
      <Box w="full">
        <FormLabel>Comments</FormLabel>
        <Textarea border="1px solid black" rows={5}></Textarea>
      </Box>
      <Controller
        control={control}
        name="rating"
        render={({ field }) => (
          <FormControl>
            <FormLabel>
              Pick the rating that aligns with your preference.
            </FormLabel>
            <Input type="number" hidden {...register('rating')} />
            <RatingInput value={field.value} onChange={field.onChange} />
          </FormControl>
        )}
      />
      <Checkbox defaultChecked gap="2">
        I am not compensated for reviews, i give my honest opinions, findings,
        beliefs or experiences on any topics or food items
      </Checkbox>
      <Button w={{ base: 'full', md: '200px' }} size="lg" ml="auto" my="4">
        Submit
      </Button>
    </VStack>
  );
}
