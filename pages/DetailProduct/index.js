import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function DetailProduct({ route }) {
    const product = route.params;
    return (
        <View style={style.container}>
            <Text style={style.title}>{product.Nama}</Text>
            <Text>Harga : Rp. {product.harga}</Text>
        </View>
    )
}

const style = StyleSheet.create({
    container: {
        marginTop: 20,
        marginHorizontal: 30,
    },
    title: {
        fontWeight: 'bold',
        fontSize: 20
    }
})