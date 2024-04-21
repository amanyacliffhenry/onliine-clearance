import React, {useState} from 'react';
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  Alert,
  ScrollView,
} from 'react-native';
import RNPickerSelect from 'react-native-picker-select';
import {clearanceUrl} from '../server/ApiUrls';

const ClearanceForm = ({navigation}) => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [registrationNumber, setRegistrationNumber] = useState('');
  const [enrolled, setEnrolled] = useState('');
  const [faculty, setFaculty] = useState('');
  const [course, setCourse] = useState('');
  const handleSubmit = () => {
    const data = {
      firstName,
      lastName,
      regNo: registrationNumber,
      enrolled,
      faculty,
      course,
    };

    fetch(clearanceUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    })
      .then(response => response.json())
      .then(responseData => {
        if (responseData.Error) {
          // Alert for existing user
          Alert.alert('Error', responseData.Error);
        } else if (responseData.Message) {
          // Alert for successful clearance record
          Alert.alert('Success', responseData.Message);
          navigation.navigate("Dashboard");
        } else {
          // Unexpected response
          Alert.alert('Error', 'Unexpected response from server');
        }
      })
      .catch(error => {
        console.error('Error:', error);
        // Handle network error
        Alert.alert('Error', 'Network Error');
      });
  };

  return (
    <ScrollView style={{backgroundColor:"#ffd"}}>
    <View style={styles.container}>
      <Text style={styles.title}>Clearance Form</Text>
      <Text style={{color: 'navy', fontSize: 14, marginTop: 10}}>
        Fill this form very carefully in order to track your clearance
        information
      </Text>
      <TextInput
        style={styles.input}
        placeholder="Enter your first name"
        onChangeText={setFirstName}
        value={firstName}
      />
      <TextInput
        style={styles.input}
        placeholder="Last Name"
        onChangeText={setLastName}
        value={lastName}
      />
      <TextInput
        style={styles.input}
        placeholder="Enter your registration number"
        onChangeText={setRegistrationNumber}
        value={registrationNumber}
      />
      <TextInput
        style={styles.input}
        placeholder="Enrolled"
        onChangeText={setEnrolled}
        value={enrolled}
      />
      <Text style={styles.label}>Select Faculty</Text>
      <RNPickerSelect
        placeholder={{
          label: 'Select Faculty',
          value: null,
        }}
        onValueChange={value => setFaculty(value)}
        items={[
          {label: 'FCI', value: 'FCI'},
          // Add more items for other faculties
        ]}
        style={pickerSelectStyles}
      />
      <Text style={styles.label}>Select Course</Text>
      <RNPickerSelect
        placeholder={{
          label: 'Select Course',
          value: null,
        }}
        onValueChange={value => setCourse(value)}
        items={[
          {label: 'BIT', value: 'BIT'},
          {label: 'BCS', value: 'BCS'},
          {label: 'BSE', value: 'BSE'},
          // Add more items for other courses
        ]}
        style={pickerSelectStyles}
      />
      <TouchableOpacity onPress={handleSubmit} style={styles.button}>
        <Text
          style={{
            color: '#fff',
            alignItems: 'center',
            textAlign: 'center',
            borderRadius: 5,
          }}>
          Submit Clearance
        </Text>
      </TouchableOpacity>
    </View>
    </ScrollView>
  );
};

const pickerSelectStyles = StyleSheet.create({
  inputIOS: {
    fontSize: 16,
    paddingVertical: 12,
    paddingHorizontal: 10,
    borderWidth: 1,
    borderColor: 'gray',
    borderRadius: 5,
    color: 'black',
    paddingRight: 30,
  },
  inputAndroid: {
    fontSize: 16,
    paddingHorizontal: 10,
    paddingVertical: 8,
    borderWidth: 0.5,
    borderColor: 'gray',
    borderRadius: 8,
    color: 'black',
    paddingRight: 30,
  },
});

const styles = StyleSheet.create({
  container: {
    padding: 20,
    marginTop: 25,
    backgroundColor: '#ffd',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  input: {
    padding: 10,
    marginBottom: 10,
    borderBottomWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
  },
  button: {
    backgroundColor: 'navy',
    marginTop: 15,
    color: '#fff',
    padding: 12,
  },
  label: {
    marginBottom: 5,
    fontWeight: 'bold',
  },
});

export default ClearanceForm;
