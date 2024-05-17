import { AntDesign, FontAwesome } from "@expo/vector-icons";
import { useNavigation, useRoute } from "@react-navigation/native";
import { Box, Center, HStack, Pressable, Text, VStack } from "native-base";
import React, { useEffect } from "react";

function HomeScreen() {
  const navigation = useNavigation();
  return (
    <Box safeAreaTop>
      <HStack>
        <AntDesign
          name="user"
          size={24}
          // color={Colors.black}
        />
        {/* <Center> */}
        <Text>Visits</Text>
        {/* </Center> */}
      </HStack>
      <Text>2 scheduled visits</Text>
      <HStack>
        <Center>
          <FontAwesome
            name="user"
            size={24}
            // color={Colors.main}
          />
        </Center>
        <Pressable onPress={() => navigation.navigate("SingleClientVisits")}>
          <VStack>
            <Text>Joseph Desire</Text>
            <Text>07:35-08:35</Text>
          </VStack>
        </Pressable>
        <>
          <AntDesign
            name="user"
            size={24}
            // color={Colors.black}
          />
          <Text>2</Text>
          <FontAwesome
            name="arrow-right"
            size={24}
            // color={Colors.main}
          />
        </>
      </HStack>
      <HStack>
        <Center>
          <FontAwesome
            name="user"
            size={24}
            // color={Colors.main}
          />
        </Center>
        <VStack>
          <Text>Timothy John</Text>
          <Text>08:50-09:20</Text>
        </VStack>
        <>
          <AntDesign
            name="user"
            size={24}
            // color={Colors.black}
          />
          <Text>1</Text>
          <FontAwesome
            name="arrow-right"
            size={24}
            // color={Colors.main}
          />
        </>
      </HStack>
    </Box>
  );
}

export default HomeScreen;
