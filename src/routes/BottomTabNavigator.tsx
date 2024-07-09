import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import React from 'react';
import BarCodeScanner from '../screens/BarCodeScanner';
import ProductList from '../screens/ProductList';
import { ROUTE_KEYS } from '../utils/routeKeys';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Profile from '../screens/Profile';
import { STRINGS } from '../utils/String';
import ProductBarCodeList from '../screens/ProductBarCodeList';

const Tab = createBottomTabNavigator();

const BottomTabNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={() => ({
        headerShown: false,
        tabBarActiveTintColor: "tomato",
        tabBarInactiveTintColor: "gray",
        tabBarStyle: [
          {
            display: "flex"
          },
          null
        ]
      })}
    >
      <Tab.Screen name={ROUTE_KEYS.ProductList} component={ProductList} options={{
        tabBarLabel: STRINGS.label.ProductLabel,
        tabBarIcon: ({ color, size }) => (
          <MaterialCommunityIcons name="home" color={color} size={size} />
        ),
        headerShown: true,
        headerTitle: STRINGS.label.ProductLabel
      }} />
      <Tab.Screen name={ROUTE_KEYS.ProductBarCodeList} component={ProductBarCodeList} options={{
        tabBarLabel: STRINGS.label.BarCodes,
        tabBarIcon: ({ color, size }) => (
          <MaterialCommunityIcons name="barcode" color={color} size={size} />
        ),
        headerShown: true,
        headerTitle: STRINGS.label.BarCodes
      }} />
      <Tab.Screen name={ROUTE_KEYS.BarCodeScanner} component={BarCodeScanner} options={{
        tabBarLabel: STRINGS.label.BarCodeLabel,
        tabBarIcon: ({ color, size }) => (
          <MaterialCommunityIcons name="barcode-scan" color={color} size={size} />
        ),
        headerShown: true,
        headerTitle: STRINGS.label.BarCodeLabel
      }} />
      <Tab.Screen name={ROUTE_KEYS.Profile} component={Profile} options={{
        tabBarLabel: STRINGS.label.ProfileLabel,
        tabBarIcon: ({ color, size }) => (
          <MaterialCommunityIcons name="account" color={color} size={size} />
        ),
        headerShown: true,
        headerTitle: STRINGS.label.ProfileLabel
      }} />
    </Tab.Navigator>
  )
}

export default BottomTabNavigator