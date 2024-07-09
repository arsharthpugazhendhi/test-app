import { Dimensions, Image, Pressable, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { colors } from '../../utils/colors'
import { STRINGS } from '../../utils/String'
import CartButton from '../Cart/CartButton'
import { useNavigation } from '@react-navigation/native'
import { ROUTE_KEYS } from '../../utils/routeKeys'
import Barcode from '@kichiyaki/react-native-barcode-generator'

const ProductCard = ({ data, isBarCode = false }: any) => {
    const navigation: any = useNavigation();

    const onPressCard = (item: any) => {
        if (!isBarCode) {
            navigation.navigate(ROUTE_KEYS.ProductDetail, { productData: item });
        }
    }

    return (
        <Pressable style={styles.container} onPress={() => onPressCard(data)}>
            {isBarCode ? (
                <>
                    <Barcode
                        format="CODE128B"
                        value={data?.gtin}
                        text={data?.gtin}
                        maxWidth={(Dimensions.get('window').width * 2) / 3}
                        style={{ marginVertical: 40, justifyContent: "center", alignItems: "center" }}
                        textStyle={{ color: colors.black, marginTop: 10 }}
                    />
                    {/* Product Name Container */}
                    <View style={styles.productNameContainer}>
                        <Text style={styles.productNameStyle}>{data?.name}</Text>
                    </View>
                    {/* Price Container */}
                    <View style={styles.priceContainer}>
                        <Text style={styles.priceText}>{STRINGS.price}</Text>
                        <Text style={styles.mrpText}>{STRINGS.rupees}{" "}{data?.mrp?.mrp}</Text>
                    </View>
                </>
            ) : (
                <>
                    {/* Image Container */}
                    <View>
                        <Image source={{ uri: "https://picsum.photos/200/300" }} resizeMode='cover' style={styles.imageStyle} />
                    </View>
                    {/* Product Name Container */}
                    <View style={styles.productNameContainer}>
                        <Text style={styles.productNameStyle}>{data?.name}</Text>
                    </View>
                    {/* Price Container */}
                    <View style={styles.priceContainer}>
                        <Text style={styles.priceText}>{STRINGS.price}</Text>
                        <Text style={styles.mrpText}>{STRINGS.rupees}{" "}{data?.mrp?.mrp}</Text>
                    </View>
                    {/* Cart Add Button */}
                    <View style={styles.cartButtonContainer}>
                        <CartButton productData={data} />
                    </View>
                </>
            )}
        </Pressable>
    )
}

export default ProductCard

const styles = StyleSheet.create({
    container: {
        width: 320,
        height: 320,
        backgroundColor: colors.white,
        margin: 8,
        borderRadius: 10,
        paddingBottom: 12
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