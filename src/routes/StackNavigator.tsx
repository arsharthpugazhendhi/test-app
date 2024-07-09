import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import { StyleSheet } from 'react-native';
import Cart from '../screens/Cart';
import ProductDetail from '../screens/ProductDetail';
import { ROUTE_KEYS } from '../utils/routeKeys';
import { STRINGS } from '../utils/String';
import BottomTabNavigator from './BottomTabNavigator';

const Stack = createNativeStackNavigator();

const StackNavigator = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name={ROUTE_KEYS.BottomTabBar} component={BottomTabNavigator} />
      <Stack.Screen name={ROUTE_KEYS.ProductDetail} component={ProductDetail} options={{
        headerShown: true,
        headerTitle: STRINGS.label.productDetail
      }} />
      <Stack.Screen name={ROUTE_KEYS.Cart} component={Cart} />
    </Stack.Navigator>
  )
}

export default StackNavigator

const styles = StyleSheet.create({})