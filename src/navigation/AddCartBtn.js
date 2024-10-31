import { useCallback, useEffect, useState } from "react";
import { StyleSheet, TouchableOpacity, View } from "react-native";
import { Icon, Text, useTheme } from "react-native-paper";
import { useDispatch, useSelector } from "react-redux";
import {
  add_to_cart,
  delete_to_cart,
  update_to_cart,
} from "../redux/action/cartAction";

export const AddCartBtn = ({ product }) => {
  const { color } = useTheme();
  const [qty, setQty] = useState(null);
  const dispatch = useDispatch();
  const { items: cartItem } = useSelector((state) => state?.cart);
  // console.warn("cartItem===>", cartItem);

  const handleBtn = () => {
    setQty(1);
  };
  const cartAction = useCallback(() => {
    if (qty > 0) {
      if (cartItem?.filter((item) => item.id === product.id).length) {
        dispatch(update_to_cart(product, qty));
      } else {
        dispatch(add_to_cart(product, qty));
      }
    } else if (qty === 0) {
      dispatch(delete_to_cart(product.id));
    }
  }, [qty, dispatch]);
  const isInCart = () => {
    return cartItem?.filter((cItem) => cItem.id === product.id);
  };
  useEffect(() => {
    // console.log("cartItem===>", cartItem);

    cartAction();
    if (isInCart.length) {
      setQty(isInCart[0].qty);
    } else {
      setQty(qty);
    }
  }, [cartAction]);
  return (
    <View>
      {/* <Text>{JSON.stringify(product)}</Text> */}
      {qty < 1 ? (
        <TouchableOpacity style={styles.addcartView} onPress={handleBtn}>
          <Icon source={"purse"} size={20} color={color.lightTheme.green} />
          <Text variant="labelMedium" style={{ fontWeight: "bold" }}>
            Add to cart
          </Text>
        </TouchableOpacity>
      ) : (
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            paddingHorizontal: 10,
            backgroundColor: color.lightTheme.green,
            paddingVertical: 5,
            borderRadius: 20,
            gap: 10,
            justifyContent: "center",
          }}
        >
          <TouchableOpacity
            style={styles.cartbtnupdate(color)}
            onPress={() => setQty((qty) => qty - 1)}
          >
            <Icon source={"minus"} />
          </TouchableOpacity>
          <Text style={{ color: color.lightTheme.white }}>{qty}</Text>
          <TouchableOpacity
            style={styles.cartbtnupdate(color)}
            onPress={() => setQty((qty) => qty + 1)}
          >
            <Icon source={"plus"} />
          </TouchableOpacity>
        </View>
      )}
    </View>
  );
};
const styles = StyleSheet.create({
  // cartUpdateView: (color) => ({

  // }),
  addcartView: {
    flexDirection: "row",
    alignItems: "center",
    gap: 5,
  },
  cartbtnupdate: (color) => ({
    backgroundColor: color.lightTheme.white,
    padding: 2,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 30,
  }),
});
