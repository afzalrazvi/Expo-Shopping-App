import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React, { useEffect } from "react";
import FruitsHeader from "../screens/FruitsHeader";
import FruitsCart from "../screens/FruitsCart";
import Fruits from "../screens/Fruits";
import { useDispatch, useSelector } from "react-redux";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { set_cart } from "../redux/action/cartAction";
import Profile from "../screens/Profile";

const Stack = createNativeStackNavigator();
const StackNavigation = () => {
  const { items } = useSelector((state) => state?.cart);
  const dispatch = useDispatch();
  useEffect(() => {
    if (!items?.length) return;
    async function saveTostorage({ items }) {
      await AsyncStorage.setItem("@cartItems", JSON.stringify(items));
    }
    saveTostorage(items);
  }, [items]);
  useEffect(() => {
    async function checkCart() {
      let cartItems = await AsyncStorage.getItem("@cartItems");
      if (cartItems && typeof cartItems === "string") {
        cartItems = JSON.parse(cartItems);
        dispatch(set_cart(cartItems));
        console.log("items:", cartItems);
      }
    }
    checkCart();
  });

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Profile">
        <Stack.Screen
          name="Fruits"
          component={Fruits}
          options={{
            header: () => {
              return <FruitsHeader />;
            },
          }}
        />
        <Stack.Screen name="FruitsCart" component={FruitsCart} />
        <Stack.Screen name="Profile" component={Profile} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default StackNavigation;
