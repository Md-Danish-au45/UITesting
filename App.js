import { View, Text } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Screen1 from './src/screens/Screen1'
import Screen2 from './src/screens/Screen2'
const  Stack = createNativeStackNavigator()


export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name='Screen1' component={Screen1}  />
        <Stack.Screen name='Screen2' component={Screen2}  />
        {/* <Stack.Screen name='Skills' component={Skills}  /> */}
        {/* <Stack.Screen name='Resume' component={Resume}  /> */}
      </Stack.Navigator>
      </NavigationContainer>
  )
}