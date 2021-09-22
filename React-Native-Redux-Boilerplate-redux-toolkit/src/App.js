import { StatusBar } from 'expo-status-bar'
import React from 'react'
import 'react-native-gesture-handler'

import { registerRootComponent } from 'expo'

import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/lib/integration/react'
import { store, persistor } from 'store/configureStore'
import './translations'

import { NavigationContainer } from '@react-navigation/native'
import { MainStack } from 'navigators'
const App = () => {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        {/* Put navigation here */}
        <NavigationContainer>
          <MainStack />
        </NavigationContainer>
        <StatusBar style="auto" />
      </PersistGate>
    </Provider>
  )
}

export default App



registerRootComponent(App)
