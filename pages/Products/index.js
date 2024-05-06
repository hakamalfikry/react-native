import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'

const products = [
    {
        id: 1,
        Nama: "tahu kress",
        harga: 5000
    },
    {
        id: 2,
        Nama: "tempe penyet",
        harga: 7000
    },
    {
        id: 3,
        Nama: "ular cobra",
        harga: 50000
    },
    {
        id: 4,
        Nama: "ayam panggang",
        harga: 22000
    },
    {
        id: 5,
        Nama: "entok terbang",
        harga: 25000
    },    
]
export default function Product() {

    
    const navigation = useNavigation();

return (
        <View style={{ flex: 1, marginTop: 30 }}>
            {products.map((product) => {
                return (
                    <TouchableOpacity 
                        style={style.product} key={product.id} 
                        onPress={() => navigation.navigate
                        ('DetailProduct', product)}
                    >
                        <Text>{product.Nama}</Text>
                        <Text>Rp. {product.harga}</Text>
                    </TouchableOpacity>
                )
            })}
        </View>
    )
}

const style = StyleSheet.create({
    product: {
    marginHorizontal: 30,
    padding: 10,
    marginTop: 10,
    borderWidth: 1,
    backgroundColor: 'white'
} })