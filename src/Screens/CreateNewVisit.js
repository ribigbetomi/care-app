import { Box, HStack, Text, VStack } from "native-base";

const CreateNewVisit = () => {
  return (
    <Box>
      <VStack>
        <Text>Start Morning Visit</Text>
        <Text>7:30-8:30</Text>
      </VStack>
      <VStack>
        <Text>Start Lunch Visit</Text>
        <Text>12:30-13:00</Text>
      </VStack>
      <VStack>
        <Text>Start Tea Visit</Text>
        <Text>16:30-17:00</Text>
      </VStack>
      <VStack>
        <Text>Start Night Visit</Text>
        <Text>20:30-21:30</Text>
      </VStack>
    </Box>
  );
};

export default CreateNewVisit;
