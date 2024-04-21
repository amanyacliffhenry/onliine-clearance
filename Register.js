import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, TouchableOpacity } from 'react-native';
import { registerUrl } from '../server/ApiUrls';

const Register = ({navigation}) => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [registrationNumber, setRegistrationNumber] = useState('');
  const [enrolled, setEnrolled] = useState('');
  const [faculty, setFaculty] = useState('');
  const [course, setCourse] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = () => {
    const data = {
      firstName: firstName,
      lastName: lastName,
      regNo: registrationNumber,
      enrolled: enrolled,
      faculty: faculty,
      course: course,
      password: password,
    };

    fetch(registerUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    })
    .then(response => response.json())
    .then(data => {
      console.log('Success:', data);
      // Handle success response
      navigation.navigate("Login");
    })
    .catch((error) => {
      console.error('Error:', error);
      // Handle error
    });
    
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Student Registration</Text>
      <TextInput
        style={styles.input}
        placeholder="Enter your first name"
        placeholderTextColor="navy"
        onChangeText={setFirstName}
        value={firstName}
      />
      <TextInput
        style={styles.input}
        placeholder="Enter your last name"
        placeholderTextColor="navy"
        onChangeText={setLastName}
        value={lastName}
      />
      <TextInput
        style={styles.input}
        placeholder="Enter your registration number"
        placeholderTextColor="navy"
        onChangeText={setRegistrationNumber}
        value={registrationNumber}
      />
      <TextInput
        style={styles.input}
        placeholder="Enter the year you enrolled"
        placeholderTextColor="navy"
        onChangeText={setEnrolled}
        value={enrolled}
      />
      <TextInput
        style={styles.input}
        placeholder="Faculty"
        placeholderTextColor="navy"
        onChangeText={setFaculty}
        value={faculty}
      />
      <TextInput
        style={styles.input}
        placeholder="Course"
        placeholderTextColor="navy"
        onChangeText={setCourse}
        value={course}
      />
      <TextInput
        style={styles.input}
        placeholder="Password"
        placeholderTextColor="navy"
        onChangeText={setPassword}
        value={password}
        secureTextEntry
      />
      <TouchableOpacity onPress={handleSubmit} style={styles.button}>
        <Text style={{ color: '#fff', alignItems: 'center', textAlign: 'center', borderRadius: 5 }}>
          Register
        </Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
    marginTop: 23,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
    marginLeft:65,
    alignItems:"center"
  },
  input: {
    padding: 10,
    marginBottom: 13,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
  },
  button: {
    backgroundColor: 'green',
    marginTop: 10,
    color: '#fff',
    padding: 12,
  },
});

export default Register;
