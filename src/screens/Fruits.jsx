import React, { useEffect, useState } from "react";
import {
  FlatList,
  Image,
  StyleSheet,
  TouchableOpacity,
  View,
} from "react-native";
import { Divider, Icon, Text, useTheme } from "react-native-paper";
import { IMAGES } from "../utils/Constent";
import { AddCartBtn } from "../navigation/AddCartBtn";
import { useSelector } from "react-redux";
import ProductList from "../components/ProductList";

const Fruits = () => {
  const { items: cartItem, cartcounter } = useSelector((state) => state.cart);
  const { color } = useTheme();
  const [data, setData] = useState();
  useEffect(() => {
    setData([
      {
        name: "Apple",
        price: "$8.00",
        weight: "dozen",
        img: IMAGES.apple,
        id: "1",
      },
      {
        name: "Pineapple",
        price: "$8.00",
        weight: "dozen",
        img: IMAGES.pineapple,
        id: "2",
      },
      {
        name: "Grapes",
        price: "$8.00",
        weight: "dozen",
        img: IMAGES.grapes,
        id: "3",
      },
      {
        name: "Pomegranate",
        price: "$8.00",
        weight: "dozen",
        img: IMAGES.pomegranate,
        id: "4",
      },
      {
        name: "Avacoda",
        price: "$8.00",
        weight: "dozen",
        img: IMAGES.aocado,
        id: "5",
      },
      {
        name: "B roccoli",
        price: "$8.00",
        weight: "dozen",
        img: IMAGES.broccoli,
        id: "6",
      },
    ]);
  }, []);
  return (
    <View style={styles.container(color)}>
      {/* <Text>{cartcounter}</Text>
      {cartItem?.map((item) => (
        <Text key={item.id}>
          {item.name}={item.qty}
        </Text>
      ))} */}

      <View style={{ flex: 1 }}>
        <FlatList
          keyExtractor={(item) => item.id}
          numColumns={2}
          data={data}
          renderItem={({ item }) => <ProductList item={item} />}
        />
      </View>
    </View>
  );
};

export default Fruits;
const styles = StyleSheet.create({
  container: (color) => ({
    flex: 1,
    backgroundColor: color.bgwhite,
  }),
  Flistcontainer: {
    backgroundColor: "white",
    paddingHorizontal: 15,
    paddingVertical: 10,
    borderRadius: 10,
    alignItems: "center",
    gap: 5,
  },
  Flistimg: {
    width: 100,
    height: 100,
    resizeMode: "contain",
  },
  horizontalLine: {
    width: "100%",
    height: 10,
    borderBottomWidth: 1,
    borderColor: "#aca3a3",
  },
  addcartView: {
    flexDirection: "row",
    alignItems: "center",
    gap: 5,
  },
});
