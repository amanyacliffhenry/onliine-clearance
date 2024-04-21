import React, {useState, useEffect} from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Dashboard = ({navigation}) => {
  const [userData, setUserData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const storedUserData = await AsyncStorage.getItem('userData');
        if (storedUserData) {
          setUserData(JSON.parse(storedUserData));
          setIsLoading(false);
        } else {
          setError('User data not found');
          setIsLoading(false);
        }
      } catch (error) {
        setError(error.message);
        setIsLoading(false);
      }
    };

    fetchUserData();
  }, []);

  return (
    <View style={styles.container}>
      {isLoading && <Text>Loading...</Text>}
      {error && <Text>Error: {error}</Text>}
      {userData && (
        <>
          <View style={{flexDirection: 'row'}}>
            <Text style={{color: 'navy', fontSize: 25}}>
              Welcome, {userData.lastname}!
            </Text>

            <Text
              style={{
                backgroundColor: 'green',
                padding: 12,
                borderRadius: 20,
                marginLeft: 20,
                marginRight:2,
                color: 'white',
              }}>
              {userData.faculty}
            </Text>
            <TouchableOpacity
              style={{
                backgroundColor: 'red',
                marginTop: 2,
                borderRadius: 12,
                marginLeft: 15,
                height: 35,
              }}
              onPress={() => navigation.navigate('Login')}>
              <Text
                style={{
                  color: 'white',
                  alignItems: 'center',
                  padding: 10,
                  fontSize: 10,
                  alignItems: 'center',
                  justifyContent: 'center',
                }}>
                Logout
              </Text>
            </TouchableOpacity>
          </View>
          <View style={{flexDirection: 'row'}}>
            <Text style={{color: 'red'}}>Student Number:</Text>
            <Text style={{color: 'navy'}}>{userData.regNo}</Text>
          </View>
          <View style={{paddingTop: 15}}>
            <Text style={{fontSize: 17, color: 'green'}}>
              First and far most thanks upon finishing your studies with this
              institution and you are now job ready but first go through this
              institution clearance to meet the graduation requirements |
              Endeavour to fill the clearance form for the best operations if
              you miss then you wont be considered a valid graduand and appear
              on the list thank you !
            </Text>
          </View>
          <View
            style={{
              flexDirection: 'row',
              padding: 10,
              marginRight: 33,
              width: 328,
              height: 95,
              marginTop: 15,
            }}>
            <TouchableOpacity
              style={{
                backgroundColor: 'white',
                padding: 25,
                marginHorizontal: 12,
                width: 141,
                elevation: 8,
                borderRadius:5
              }} onPress={()=>navigation.navigate("Clearance Form")}>
              <Text style={{color: 'navy', fontSize: 16}}>New Form +</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={{
                backgroundColor: 'navy',
                padding: 30,
                borderRadius:5,
                marginHorizontal: 12,
                elevation: 8,
              }} onPress={()=>navigation.navigate("Details" ,{ regNo: userData.regNo })}>
              <Text style={{color: 'white',alignItems:"center"}}>My Clearance</Text>
            </TouchableOpacity>
          </View>
          <View
            style={{
              flexDirection: 'row',
              padding: 10,
              marginRight: 33,
              width: 328,
              height: 95,
              marginTop: 15,
            }}>
            <TouchableOpacity
              style={{
                backgroundColor: 'navy',
                padding: 25,
                marginHorizontal: 10,
                width: 141,
                elevation: 8,
                borderRadius:5
              } }onPress={()=>navigation.navigate("LibraryDetails" ,{ regNo: userData.regNo })}>
              <Text style={{color: 'white', fontSize: 18}}>Library</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={{
                backgroundColor: 'white',
                padding: 25,
                marginHorizontal: 12,
                elevation: 8,
                width:141,
                borderRadius:5
              }} onPress={()=>navigation.navigate("BDetails" ,{ regNo: userData.regNo })}>
              <Text style={{color: 'navy',fontSize:18}}>Bursar's</Text>
            </TouchableOpacity>
          </View>
          <View
            style={{
              flexDirection: 'row',
              padding: 10,
              marginRight: 33,
              width: 328,
              height: 95,
              marginTop: 15,
            }}>
            <TouchableOpacity
              style={{
                backgroundColor: 'white',
                padding: 25,
                marginHorizontal: 10,
                width: 141,
                elevation: 8,
                borderRadius:5
              }}onPress={()=>navigation.navigate("ADetails" ,{ regNo: userData.regNo })}>
              <Text style={{color: 'navy', fontSize: 18}}>Academic</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={{
                backgroundColor: 'navy',
                padding: 20,
                marginHorizontal: 12,
                elevation: 8,
                borderRadius:5,
                width:141
              }} onPress={()=>navigation.navigate("FDetails" ,{ regNo: userData.regNo })}>
              <Text style={{color: 'white'}}>Faculty Details </Text>
            </TouchableOpacity>
          </View>
        </>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor:"#ffd"
  },
});

export default Dashboard;
