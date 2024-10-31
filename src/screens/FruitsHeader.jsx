import { useNavigation } from "@react-navigation/native";
import React from "react";
import { StyleSheet, View } from "react-native";
import { Appbar, Badge, useTheme } from "react-native-paper";
import { useSelector } from "react-redux";

const FruitsHeader = () => {
  const navigation = useNavigation();
  const { color } = useTheme();
  const { cartcounter } = useSelector((state) => state?.cart);
  // console.log("cartCounter:", cartcounter);

  return (
    <Appbar.Header>
      <Appbar.BackAction
        onPress={() => {
          navigation.goBack();
        }}
      />
      <Appbar.Content title="Fruits" style={{ alignItems: "center" }} />
      <View>
        <Appbar.Action
          // color="blue"

          icon="cart"
          onPress={() => {
            navigation.navigate("FruitsCart");
          }}
          style={{ position: "relative" }}
        />
        {cartcounter > 0 ? (
          <Badge style={styles.badge}>{cartcounter}</Badge>
        ) : null}
      </View>
    </Appbar.Header>
  );
};

export default FruitsHeader;
const styles = StyleSheet.create({
  badge: {
    position: "absolute",
  },
});
