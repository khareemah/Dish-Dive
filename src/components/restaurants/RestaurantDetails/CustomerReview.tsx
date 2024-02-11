'use client';
import {
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
    <VStack w="full" align="flex-start" pb="50px" spacing="3">
      <VStack w="full" align="flex-start" spacing="6">
        <Text fontWeight="600" fontSize="22px">
          Submit your review
        </Text>
        <Textarea border="1px solid black" rows={8} resize="none"></Textarea>
      </VStack>
      <Controller
        control={control}
        name="rating"
        render={({ field }) => (
          <FormControl>
            <FormLabel>Click on the stars below to rate this food</FormLabel>
            <Input type="number" hidden {...register('rating')} />
            <RatingInput value={field.value} onChange={field.onChange} />
          </FormControl>
        )}
      />
      <Checkbox defaultChecked gap="2">
        I am not compensated for reviews, i give my honest opinions, findings,
        beliefs or experiences on any topics or food items
      </Checkbox>
      <Button w={{ base: 'full', md: '200px' }} size="lg" ml="auto" mt="12">
        Submit
      </Button>
    </VStack>
  );
}
