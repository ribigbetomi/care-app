import { AntDesign, FontAwesome } from "@expo/vector-icons";
import { Box, Center, HStack, Text, VStack } from "native-base";
import React from "react";

export default function SingleClientVisits() {
  return (
    <Box>
      <HStack>
        <Center>
          <FontAwesome
            name="user"
            size={24}
            // color={Colors.main}
          />
        </Center>
        <Text>Joseph Desire</Text>
        <Text> Today, 12:35-13:05</Text>
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
        <VStack></VStack>
        <Text>Joseph Desire</Text>
        <Text>Today, 07:35-08:35</Text>
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
    </Box>
  );
}
