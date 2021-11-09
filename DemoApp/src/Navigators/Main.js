/* eslint-disable */
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { ExampleContainer } from '@/Containers'
import FontAwesome from 'react-native-vector-icons/FontAwesome'

const Tab = createBottomTabNavigator()

// @refresh reset
const MainNavigator = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Home" component={ExampleContainer} 
        options={{
          tabBarIcon: ({color, size}) => (
            <FontAwesome name="home" color={color} size={size} />
          ),
        }}
      />
    </Tab.Navigator>
  )
}

export default MainNavigator
