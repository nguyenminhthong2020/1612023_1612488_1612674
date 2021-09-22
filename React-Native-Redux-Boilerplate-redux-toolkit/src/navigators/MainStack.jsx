
import { Home } from 'components/Home'
import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import { useSelector } from 'react-redux'
import { Login, Register } from 'components/auth'
const authScreens = {
  Login: Login,
  Register: Register,
}

const userScreens = {
  Home: Home,
}
const Stack = createStackNavigator()
const MainStack = () => {
  const user = useSelector((state) => state.user)
  return (
    <Stack.Navigator>
      {Object.entries({
        // Use some screens conditionally based on some condition
        ...(user.loggedIn ? userScreens : authScreens),
      }).map(([name, component]) => (
        <Stack.Screen key={name} name={name} component={component} />
      ))}
    </Stack.Navigator>
  )
}

export default MainStack
