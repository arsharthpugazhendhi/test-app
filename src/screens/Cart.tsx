import { FlatList, Pressable, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { validateArray } from '../utils/helper';
import CartButton from '../components/Cart/CartButton';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigation } from '@react-navigation/native';
import CheckoutBar from '../components/Cart/CheckoutBar';
import { colors } from '../utils/colors';
import { STRINGS } from '../utils/String';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { removeFromCart } from '../redux/reducers/cartReducer';

const Cart = () => {
  const cartItems = useSelector((state) => state?.cart?.cartItems);
  const navigation: any = useNavigation();
  const dispatch = useDispatch();

  function onPressGoBack() {
    navigation?.goBack();
  };

  function onPressDeleteProduct (item: any) {
    dispatch(removeFromCart(item));
  }

  function renderCartItem({ item }: { item: any }) {
    return (
      <View key={item?.sku_code} style={styles.cartItemSubContainer}>
        <View style={styles.imageAndPriceContainer}>
          <View style={styles.priceAndTitleContainer}>
            <Text style={styles.titleText}>{item?.name || ""}</Text>
            <Text style={styles.priceText}>{STRINGS.rupees + item?.mrp?.mrp || ""}</Text>
          </View>
        </View>
        <Pressable style={{ marginRight: 10 }} onPress={() => onPressDeleteProduct(item)}>
          <MaterialCommunityIcons name="delete" color={colors.black} size={28} />
        </Pressable>
        <CartButton productData={item} />
      </View>
    )
  }

  return (
    <View style={styles.container}>
      {/* Icon and Title Container */}
      <Pressable style={styles.iconAndTitleContainer} onPress={onPressGoBack}>
        <MaterialCommunityIcons name="keyboard-backspace" color={colors.black} size={28} />
        <Text style={styles.shoppingCartLabelText}>{"Total Items" + " " + `(${cartItems?.length})`}</Text>
      </Pressable>
      {/* CartItems Container */}
      <FlatList
        data={cartItems}
        keyExtractor={(_, index) => index.toString()}
        renderItem={renderCartItem}
        contentContainerStyle={styles.cartItemContainer}
      />
      {/* Bill Detail Container */}
      <CheckoutBar isCart={false} />
    </View>
  )
}

export default Cart

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
    paddingTop: 45,
    flexGrow: 1,
  },
  iconAndTitleContainer: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 16
  },
  shoppingCartLabelText: {
    marginLeft: 20,
    fontSize: 16,
    fontWeight: "400",
    color: colors.GREY_SCALE_BLACK
  },
  cartItemContainer: {
    paddingRight: 10,
    paddingTop: 30,
    paddingBottom: 150
  },
  cartItemSubContainer: {
    marginVertical: 16,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between"
  },
  titleText: {
    fontSize: 14,
    fontWeight: "500",
    color: colors.GREY_SCALE_BLACK,
    width: 150
  },
  priceText: {
    fontSize: 14,
    fontWeight: "400",
    color: colors.GREY_SCALE_BLACK
  },
  productImageStyle: {
    width: 30,
    height: 30,
    borderRadius: 8
  },
  imageAndPriceContainer: {
    flexDirection: "row",
  },
  priceAndTitleContainer: {
    marginLeft: 12
  },
  cartStyle: {
    position: "absolute",
    top: 0,
    zIndex: 0,
    right: -14,
  },
})