import { Avatar, Heading, HStack, Text, VStack } from '@chakra-ui/react';

const comments = [
  {
    name: 'David',
    time: '4 hours ago',
    description: (
      <>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eligendi,
        autem vel beatae nihil amet officiis deleniti maiores ad iure molestias!
      </>
    ),
  },

  {
    name: 'Mary',
    time: '3 hours ago',
    description: (
      <>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eligendi,
        autem vel beatae nihil amet officiis deleniti maiores ad iure molestias!
      </>
    ),
  },

  {
    name: 'Esther',
    time: '2 hours ago',
    description: (
      <>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eligendi,
        autem vel beatae nihil amet officiis deleniti maiores ad iure molestias!
      </>
    ),
  },
];

export default function OtherComments() {
  return (
    <VStack w="full" align="flex-start" spacing="6">
      <Heading fontSize="20px">Reviews</Heading>
      <VStack w="full" spacing="6" align="flex-start">
        {comments.map((comment) => {
          return (
            <HStack w="full" key={comment.name} spacing="6" align="flex-start">
              <Avatar size="md" name={`${comment.name}`} />
              <VStack w="full">
                <VStack
                  w="full"
                  justify="space-between"
                  align="flex-start"
                  spacing="0"
                >
                  <Text fontSize="16px">{comment.name}</Text>
                  <Text>{comment.time}</Text>
                </VStack>
                <Text fontSize="16px">{comment.description}</Text>
              </VStack>
            </HStack>
          );
        })}
      </VStack>
    </VStack>
  );
}
