import React, {useState} from 'react';
import {
  View,
  Text,
  TextInput,
  Alert,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {loginUrl} from '../server/ApiUrls';

const Login = ({navigation}) => {
  const [regNo, setRegNo] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async () => {
    try {
      // Send login credentials to PHP API
      const response = await fetch(loginUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          regNo: regNo,
          password: password,
        }),
      });

      const data = await response.json();

      if (data.success) {
        // Store user data in AsyncStorage
        await AsyncStorage.setItem(
          'userData',
          JSON.stringify({
            regNo: data.regNo,
            lastname: data.lastname,
            faculty: data.faculty,
          }),
        );

        // Navigate to dashboard
        navigation.navigate('Dashboard');
      } else {
        Alert.alert(
          'Error',
          'Invalid credentials check your student number or password',
        );
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <>
   
      <View style={stylo.container}>
      <View style={stylo.dezine}>
      <Text style={{color:"navy",fontSize:20,fontWeight:"600"}}>OUCMS</Text>
    </View>
    <Text>Online MUST clearance management system</Text>
        <Text style={{color: 'navy', fontSize: 23,marginTop:2}}>Log in</Text>
        <TextInput
          style={stylo.input}
          placeholder="Enter your student number"
          placeholderTextColor="navy"
          value={regNo}
          onChangeText={text => setRegNo(text)}
        />
        <TextInput
          style={stylo.input}
          placeholder=" Enter your password"
          placeholderTextColor="navy"
          secureTextEntry={true}
          value={password}
          onChangeText={text => setPassword(text)}
        />
        <TouchableOpacity style={stylo.btn} onPress={handleLogin}>
          <Text style={{color: 'white', textAlign: 'center'}}>Login</Text>
        </TouchableOpacity>
        <TouchableOpacity style={{marginTop: 20}} onPress={()=>navigation.navigate("Register")}>
          <Text style={{color: 'navy'}}>
            Don't have an account Register here
          </Text>
        </TouchableOpacity>
      </View>
    </>
  );
};
const stylo = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#ffd',
  },
  dezine:{
    backgroundColor:"#ffd",
    padding:29,
    alignItems:"center",
    borderRadius:70,
    width:140,
  },
  input: {
    borderWidth: 1,
    borderColor: 'green',
    borderRadius: 4,
    width: '90%',
    marginVertical: 12,
  },
  btn: {
    backgroundColor: 'green',
    padding: 10,
    width: 320,
    borderRadius: 12,
    marginTop: 12,
  },
});

export default Login;
