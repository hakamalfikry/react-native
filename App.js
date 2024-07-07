// In App.js in a new project
import * as React from 'react';
import { View, Text, TouchableOpacity, ViewComponent } from 'react-native';
import { NavigationContainer, TabActions } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { DetailProduct, Home, Products, Profile }from './pages'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createDrawerNavigator } from '@react-navigation/drawer'
import Ionicons from '@expo/vector-icons/Ionicons'

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();
const Drawer = createDrawerNavigator();


function mainTab(){
  return (
    <Tab.Navigator
      screenOptions={({ route })=>({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          if (route.name === "Home") {
            iconName = "home"
          } else if (route.nama === "Products") {
            iconName ="cart"
          } else {
            iconName = "person"
          }

          return <Ionicons name={iconName} size={size} color={color} />
        },
        tabBarActiveTintColor: 'tomato',
        tabBarInactiveTintColor: 'black',
        tabBarInactiveBackgroundColor:'grey'
      })}>

      <Tab.Screen 
      name="Home" 
      component={Home} 
      options={{ headerShown: false, tabBarBadge: 4 }} 
      />
      <Tab.Screen
       name="Products" 
       component={Products}
       options={{ headerShown: false, tabBarBadge:3 }}
       />
      <Tab.Screen 
      name="Profile" 
      component={Profile}
      options={{ headerShown: false }}  
      />
    </Tab.Navigator>
  )
}

function MainDrawer(){
  return (
    <Drawer.Navigator initialRouteName="Home">
    <Drawer.Screen name="Home" component={Home} />
    <Drawer.Screen name="Products" component={Products} />
    <Drawer.Screen name="Profile" component={Profile} />
  </Drawer.Navigator>
  )
}

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>

      <Stack.Screen 
        name="MainDrawer" 
        component={MainDrawer} 
        options={{ headerShown: false }}
        />
        <Stack.Screen 
        name="DetailProduct" 
        component={DetailProduct} 
        options={({ route }) => ({ title: route.params.nama})}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;