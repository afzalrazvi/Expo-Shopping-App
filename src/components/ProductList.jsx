import React from "react";
import {
  FlatList,
  Image,
  StyleSheet,
  TouchableOpacity,
  View,
} from "react-native";
import { Divider, Icon, Text, useTheme } from "react-native-paper";
import { AddCartBtn } from "../navigation/AddCartBtn";

const ProductList = ({ item, layout = "grid" }) => {
  return (
    <View
      style={{
        width: "50%",
        paddingHorizontal: 15,
        paddingVertical: 15,
        flexDirection: layout === "grid" ? "column" : "row",
      }}
    >
      <View style={[styles.Flistcontainer]}>
        <TouchableOpacity style={{ alignSelf: "flex-end" }}>
          <Icon source="heart" color="red" size={20} />
        </TouchableOpacity>
        <Image style={styles.Flistimg} source={item.img} />
        <Text variant="titleSmall">{item.price}</Text>
        <Text variant="titleMedium">{item.name}</Text>
        <Text variant="titleSmall" style={{ color: "#8a8888" }}>
          {item.weight}
        </Text>
        {/* <View style={styles.horizontalLine}></View> */}
        <Divider
          style={{
            backgroundColor: "#a5a3a3",
            height: 1,
            width: "100%",
          }}
        />
        <AddCartBtn initial={0} product={item} />
      </View>
    </View>
  );
};

export default ProductList;
const styles = StyleSheet.create({
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
