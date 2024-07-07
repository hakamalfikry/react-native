import { StyleSheet, Text, View } from "react-native";
import React from 'react'
import {
    DrawerContentScrollView,
    DrawerItemList,
} from '@react-navigation/drawer';
import { ColorProperties } from "react-native-reanimated/lib/typescript/reanimated2/Colors";

function ItemMenu({ item }) {
    const focused = item.navigation.isFocused();
    return (
        <TouchableOpacity
            style={styles.item(focused)}
            onPress={() => item.navigation.navigate(item.route.name)}
        >
            <Text style={styles.text(focused)}>{item.options.title ? item.options.title : item.route.name}</Text>
        </TouchableOpacity>
    )
}

export default function CustomDrawerContent(props) {
    const listMenu = Object.values(props.descriptors)

    return (
        <DrawerContentScrollView {...props}>
            {listMenu.map((item, index) => {
                return <ItemMenu item={item} key={index}/>
            })}
          <DrawerItemList {...props} />
        </DrawerContentScrollView>
      );
}

const styles = StyleSheet.create({})
    item: (focused) => ({
        paddingVertical: 15,
        paddingHorizontal: 20,
        backgroundColor: focused ? '#F0EDF7' : '#fff'
    })
    text: (focused) => ({
        fontSize: 15,
        fontWeight: focused ? 'bold' : 'normal'
    })