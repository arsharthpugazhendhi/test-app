import { Pressable, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { STRINGS } from '../../utils/String';
import { colors } from '../../utils/colors';
import { addToCart, cartDecrement, cartIncrement } from '../../redux/reducers/cartReducer';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const CartButton = ({ productData }: any) => {

    const dispatch = useDispatch();
    const cartItems = useSelector((state: any) => state.cart.cartItems);

    function onPressAddToCart(item: any) {
        dispatch(addToCart(item));
    }

    function onPressIncrement(item: any) {
        dispatch(cartIncrement(item));
    }

    function onPressDecrement(item: any) {
        dispatch(cartDecrement(item));
    }

    const matchingProduct = (Array.isArray(cartItems) && cartItems?.length > 0) && cartItems?.find((cart) => cart?.sku_code === productData?.sku_code);

    return (
        <View>
            {matchingProduct ? (
                <View style={styles.cartIconContainer}>
                    <Pressable style={styles.minusContainer} onPress={() => onPressDecrement(productData)}>
                        <MaterialCommunityIcons name="minus" color={colors.white} size={20} />
                    </Pressable>
                    <Text style={styles.quantityText}>{matchingProduct?.quantity || productData?.quantity || 0}</Text>
                    <Pressable style={styles.plusIconContainer} onPress={() => onPressIncrement(productData)}>
                        <MaterialCommunityIcons name="plus" color={colors.white} size={20} />
                    </Pressable>
                </View>
            ) : (
                <Pressable style={styles.addButtonContainer} onPress={() => onPressAddToCart(productData)}>
                    <Text style={styles.addText}>{STRINGS.add}</Text>
                </Pressable>
            )}
        </View>
    )
}

export default CartButton

const styles = StyleSheet.create({
    addButtonContainer: {
        width: 120,
        height: 40,
        borderRadius: 6,
        borderWidth: 1,
        justifyContent: "center",
        alignItems: "center"
    },
    addText: {
        color: colors.black
    },
    plusIconContainer: {
        width: 40,
        height: 34,
        backgroundColor: colors.red,
        borderRadius: 4,
        justifyContent: "center",
        alignItems: "center",
    },
    minusContainer: {
        width: 40,
        height: 34,
        backgroundColor: colors.red,
        borderRadius: 4,
        justifyContent: "center",
        alignItems: "center",
    },
    cartIconContainer: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        width: 150,
        height: 34,
        borderWidth: 1,
        borderColor: colors.red,
        borderRadius: 4,
    },
    quantityText: {
        color: colors.red
    }
})