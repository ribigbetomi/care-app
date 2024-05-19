import { FontAwesome } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { Box, HStack, Pressable, Text, VStack } from "native-base";

const NewVisit = () => {
  const navigation = useNavigation();
  return (
    <Box>
      <HStack>
        <FontAwesome
          name="user"
          size={24}
          // color={Colors.main}
        />
        <VStack>
          <Text>Joseph Desire</Text>
          <Text> DOB: 19/03/1955</Text>
        </VStack>
      </HStack>
      <Text> Carers on Visit: Tim Carroll and Jim Proudfoot</Text>

      <Pressable onPress={() => navigation.navigate("TasksAndMedications")}>
        <Text>Tasks and Medications</Text>
      </Pressable>
      <Pressable onPress={() => navigation.navigate("Notes")}>
        <Text>Notes</Text>
      </Pressable>
    </Box>
  );
};

export default NewVisit;
