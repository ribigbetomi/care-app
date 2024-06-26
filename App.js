import { StyleSheet, Text, View } from "react-native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NativeBaseProvider, Box, StatusBar } from "native-base";
import { NavigationContainer } from "@react-navigation/native";
import { Provider } from "react-redux";
import BottomNav from "./src/Navigations/BottomNav";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NativeBaseProvider>
      {/* <Provider store={store}> */}

      <NavigationContainer>
        {/* <ToastContainer /> */}
        <StatusBar style="auto" />
        <Stack.Navigator
          initialRouteName="Bottom"
          screenOptions={{
            headerShown: false,
          }}
        >
          <Stack.Screen name="Bottom" component={BottomNav} />
          {/* <Stack.Screen name="Register" component={RegisterScreen} />
              <Stack.Screen name="Order" component={OrderScreen} />
              <Stack.Screen name="Login" component={LoginScreen} />
              <Stack.Screen name="Paystack" component={PaystackPayment} /> */}
        </Stack.Navigator>
      </NavigationContainer>

      {/* </Provider> */}
    </NativeBaseProvider>
  );
}

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: "#fff",
//     alignItems: "center",
//     justifyContent: "center",
//   },
// });
