import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { useRoute } from '@react-navigation/native'
import { colors } from '../utils/colors';
import CartButton from '../components/Cart/CartButton';
import { STRINGS } from '../utils/String';
import CheckoutBar from '../components/Cart/CheckoutBar';

const ProductDetail = () => {
  const route: any = useRoute();

  return (
    <View style={styles.container}>
      {/* Image Container */}
      <View>
        <Image source={{ uri: "https://picsum.photos/200/300" }} resizeMode='cover' style={styles.imageStyle} />
      </View>
      {/* Product Name Container */}
      <View style={styles.productNameContainer}>
        <Text style={styles.productNameStyle}>{route?.params?.productData?.name}</Text>
      </View>
      {/* Price Container */}
      <View style={styles.priceContainer}>
        <Text style={styles.priceText}>{STRINGS.price}</Text>
        <Text style={styles.mrpText}>{STRINGS.rupees}{" "}{route?.params?.productData?.mrp?.mrp}</Text>
      </View>
      {/* Cart Add Button */}
      <View style={styles.cartButtonContainer}>
        <CartButton productData={route?.params?.productData} />
      </View>
      <CheckoutBar />
    </View>
  )
}

export default ProductDetail

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
    padding: 12,
    borderRadius: 10,
  },
  imageStyle: {
    width: "100%",
    height: 180
  },
  productNameContainer: {
    paddingHorizontal: 16,
    marginTop: 12,
  },
  productNameStyle: {
    color: colors.black,
    fontSize: 14,
    fontWeight: "bold",
    lineHeight: 22
  },
  priceContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 16,
    marginTop: 12,
  },
  priceText: {
    color: colors.black,
    fontWeight: "bold",
    fontFamily: "Helvetica",
    fontSize: 14,
  },
  mrpText: {
    color: colors.black,
    fontWeight: "900",
    fontFamily: "Helvetica",
    fontSize: 14,
  },
  cartButtonContainer: {
    justifyContent: "center",
    alignItems: "center"
  }
})