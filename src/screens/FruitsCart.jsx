import React from "react";
import { FlatList, View } from "react-native";
import { Text } from "react-native-paper";
import { useSelector } from "react-redux";
import ProductList from "../components/ProductList";

const FruitsCart = () => {
  const { items: cartItem } = useSelector((state) => state?.cart);
  // console.log('items: ', cartItem);

  return (
    <View style={{ flex: 1 }}>
      <FlatList
        data={cartItem}
        numColumns={2}
        renderItem={({ item }) => <ProductList item={item} layout="list" />}
        keyExtractor={(_, key) => key}
      />
    </View>
  );
};

export default FruitsCart;
