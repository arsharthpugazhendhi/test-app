import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { ROUTE_KEYS } from '../utils/routeKeys';
import Login from '../screens/Login';
import { STRINGS } from '../utils/String';

const Stack = createNativeStackNavigator();

const AuthNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name={ROUTE_KEYS.Login} component={Login} options={{
        headerTitle: STRINGS.login_title,
      }} />
    </Stack.Navigator>
  )
}

export default AuthNavigator;