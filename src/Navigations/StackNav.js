import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "../Screens/HomeScreen";
import SingleClientVisits from "../Screens/SingleClientVisits";
import CreateNewVisit from "../Screens/CreateNewVisit";
import NewVisit from "../Screens/NewVisit";
import TasksAndMedications from "../Screens/TasksAndMedications";
import Notes from "../Screens/Notes";

const Stack = createNativeStackNavigator();

const StackNav = () => {
  return (
    <Stack.Navigator
      initialRouteName="Home"
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen
        name="Home"
        component={HomeScreen}
        initialParams={{ keyword: "" }}
      />
      <Stack.Screen name="SingleClientVisits" component={SingleClientVisits} />
      <Stack.Screen name="CreateNewVisit" component={CreateNewVisit} />
      <Stack.Screen name="NewVisit" component={NewVisit} />
      <Stack.Screen
        name="TasksAndMedications"
        component={TasksAndMedications}
      />
      <Stack.Screen name="Notes" component={Notes} />
      {/* <Stack.Screen name="Shipping" component={ShoppingScreen} />
        <Stack.Screen name="CheckOut" component={PaymentScreen} />
        <Stack.Screen name="PlaceOrder" component={PlaceOrderScreen} />
        <Stack.Screen name="Cart" component={CartScreen} /> */}
    </Stack.Navigator>
  );
};

export default StackNav;
