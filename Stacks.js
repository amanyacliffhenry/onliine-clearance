import  React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Dashboard from './screens/Dashboard';
import RegistrationComponent from './screens/Register';
import Login from './screens/Login';
import ClearanceForm from './screens/Clearance';
import ClearDetails from './screens/CleearDetails';
import LibraryDetails from './screens/LibraryDetails';
import BursarDetails from './screens/BursarDetails';
import FacultyDetails from './screens/FacultyDetails';
import AcademicDetails from './screens/Academic';

const Stack = createNativeStackNavigator();

export default function Stacks() {
  return (
    <NavigationContainer>
      <Stack.Navigator >
        <Stack.Screen name="Login" component={Login} options={{headerShown:false}} />
 
       <Stack.Screen name="Register" component={RegistrationComponent} options={{headerShown:false}} />
       <Stack.Screen name="Dashboard" component={Dashboard} /> 
        <Stack.Screen name="Clearance Form" component={ClearanceForm} options={{title:'My Clearance Form'}} />
        <Stack.Screen name="Details" component={ClearDetails} options={{title:'My Clearance status'}} />
        <Stack.Screen name="ADetails" component={AcademicDetails} options={{title:'Academic'}} />
        <Stack.Screen name="BDetails" component={BursarDetails} options={{title:'Bursar Clearance status'}} />
        <Stack.Screen name="FDetails" component={FacultyDetails} options={{title:'Faculty Clearance status'}} />
        <Stack.Screen name="LibraryDetails" component={LibraryDetails} options={{title:'Library Clearance status'}} />
        
        
      </Stack.Navigator>
    </NavigationContainer>
  );
}