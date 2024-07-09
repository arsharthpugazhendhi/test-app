import { Pressable, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { useSelector } from 'react-redux';
import { getTotalPrice, validateArray } from '../../utils/helper';
import { colors } from '../../utils/colors';
import { STRINGS } from '../../utils/String';
import { useNavigation } from '@react-navigation/native';
import { ROUTE_KEYS } from '../../utils/routeKeys';

const CheckoutBar = ({ isCart = true }) => {
    const cartItems = useSelector((state) => state?.cart?.cartItems);
    const totalPrice = getTotalPrice(cartItems);
    const navigation: any = useNavigation();

    if (validateArray(cartItems))
        return (
            <View style={styles.billContainer}>
                <View style={styles.itemTextContainer}>
                <Text style={styles.cartItemText}>{cartItems?.length + " " + "Items"}</Text>
                <Pressable onPress={() => isCart ? navigation.navigate(ROUTE_KEYS.Cart) : {}}>
                    <Text style={[styles.cartItemText, { textDecorationLine: "underline" }]}>{isCart ? STRINGS.goToCart : ""}</Text>
                </Pressable>
                </View>
                <View style={styles.priceContainer}>
                    <Text style={styles.totalPriceText}>{STRINGS.total}</Text>
                    <Text style={styles.priceText}>{STRINGS.rupees + (parseFloat((totalPrice?.toFixed(2))).toLocaleString() || 0)}</Text>
                </View>
            </View>
        )
}

export default CheckoutBar

const styles = StyleSheet.create({
    billContainer: {
        width: 359,
        height: 80,
        backgroundColor: colors.PRIMARY_LIGHT_BLUE,
        alignSelf: "center",
        marginTop: 100,
        borderTopStartRadius: 30,
        borderTopEndRadius: 30,
        paddingTop: 17,
        paddingHorizontal: 36,
        position: "absolute",
        bottom: 0,
    },
    totalPriceText: {
        fontSize: 14,
        fontWeight: "400",
        color: colors.white
    },
    priceText: {
        fontSize: 14,
        fontWeight: "500",
        color: colors.white
    },
    cartItemText: {
        fontSize: 14,
        color: colors.white,
        fontWeight: "bold",
    },
    priceContainer: {
        flexDirection: "row",
        justifyContent: "space-between",
        marginTop: 10
    },
    itemTextContainer: {
        flexDirection: "row",
        justifyContent: "space-between"
    },
})