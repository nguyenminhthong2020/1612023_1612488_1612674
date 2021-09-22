import React, { useState } from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { TextInput, TouchableOpacity } from 'react-native-gesture-handler'
import { useDispatch } from 'react-redux';
import { setUser, signin } from 'store/user';

const Login = (props) => {
    const {navigation} = props;
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState('');
  const dispatch = useDispatch();

  const loginHandler = async() => {
      if(!email||!password) return;
      const result = await dispatch(signin({email, password}));
      if(signin.fulfilled.match(result)){
          console.log("Login success!");
      }else {
         setErrors(result.payload.message);
      }
  }
  return (
    <View style={styles.container}>
      <Text style={styles.logo}>Redux App</Text>
      <View style={styles.inputView}>
        <TextInput
          style={styles.inputText}
          placeholder="Email..."
          autoCapitalize="none"
          placeholderTextColor="#003f5c"
          onChangeText={(text) => setEmail(text)}
        />
      </View>
      <View style={styles.inputView}>
        <TextInput
          secureTextEntry
          style={styles.inputText}
          placeholder="Password..."
          placeholderTextColor="#003f5c"
          onChangeText={(text) => setPassword(text)}
        />
      </View>
      <Text style={styles.errors}>{errors && errors}</Text>
      <View style={styles.buttonGroup}>
        <TouchableOpacity onPress={loginHandler} style={styles.loginBtn}>
          <Text style={styles.loginText}>LOGIN</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('Register')}>
          <Text style={styles.signUpText}>Register</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
  },
  logo: {
    fontWeight: 'bold',
    fontSize: 50,
    color: '#fb5b5a',
    marginBottom: 40,
  },
  inputView: {
    width: '80%',
    backgroundColor: 'lightgray',
    borderRadius: 25,
    height: 50,
    marginBottom: 20,
    justifyContent: 'center',
    padding: 20,
  },
  inputText: {
    height: 50,
    color: 'black',
  },
  errors: {
    color: 'red',
    fontSize: 14,
  },
  buttonGroup: {
      flex: 0.5,
      alignItems: 'center',
  },
  loginBtn: {
    width: 200,
    backgroundColor: '#fb5b5a',
    borderRadius: 25,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 40,
    marginBottom: 10,
  },
  loginText: {
    color: 'white',
  },
  signUpText: {
    color: 'black',
  }
})

export default Login
