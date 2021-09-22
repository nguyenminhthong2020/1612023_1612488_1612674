import React from 'react'
import { View, Text, StyleSheet, Button } from 'react-native'
import { useDispatch, useSelector } from 'react-redux'
import { removeUser } from 'store/user';

const Home = () => {
  const dispatch = useDispatch();
  const user = useSelector(state=> state.user);
  const logoutHandler = () => {
    dispatch(removeUser());
  }
  return (
    <View style={styles.container}>
      <Text style={styles.logo}>Home</Text>
      <Text style={styles.text}>{(user.user) && user.user.email}</Text>
      <Button onPress={logoutHandler} title="Logout" />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    color: '#fb5b5a',
    fontSize: 20,
    fontWeight: 'bold',
  },
  logo: {
    fontWeight: 'bold',
    fontSize: 50,
    color: '#fb5b5a',
    marginBottom: 40,
  },
})
export default Home
