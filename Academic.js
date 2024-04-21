// ClearDetails.js

import React, {useEffect, useState} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {BASE_URL} from '../server/ApiUrls';

const AcademicDetails = ({route}) => {
  const {regNo} = route.params;
  const [clearanceData, setClearanceData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchClearanceData = async () => {
      try {
        const response = await fetch(
          BASE_URL + `fetchstudents.php?regNo=${regNo}`,
        );
        if (!response.ok) {
          throw new Error('Failed to fetch clearance data');
        }
        const data = await response.json();
        setClearanceData(data);
        setIsLoading(false);
      } catch (error) {
        setError(error.message);
        setIsLoading(false);
      }
    };

    fetchClearanceData();
  }, [regNo]);

  return (
    <View style={{backgroundColor: '#ffd',marginTop:15}}>
      {isLoading && <Text>Loading clearance data...</Text>}
      {error && <Text>Error: {error}</Text>}
      {clearanceData && (
        <View style={styles.container}>
          <Text style={{color: 'blue', textAlign: 'center', fontSize: 23}}>
            Academic Clearance Data for {clearanceData[0].lastname}
          </Text>
          <View style={styles.flexis}>
            <Text>Faculty:</Text>
            <Text>{clearanceData[0].faculty}</Text>
          </View>
          <View style={styles.flexis}>
            <Text>Department:</Text>
            <Text>{clearanceData[0].course}</Text>
          </View>
          <View style={styles.flexis}>
            <Text>First Name:</Text>
            <Text>{clearanceData[0].firstname}</Text>
          </View>
          <View style={styles.flexis}>
            <Text>Last Name:</Text>
            <Text>{clearanceData[0].lastname}</Text>
          </View>
          <View style={styles.flexis}>
            <Text>Registration Number:</Text>
            <Text>{clearanceData[0].regNo}</Text>
          </View>
          <View style={styles.flexis}>
            <Text>Year Enrolled:</Text>
            <Text>{clearanceData[0].enrolled}</Text>
          </View>
          <View style={styles.flexis}>
            <Text style={{color:"navy"}}>Clearance Status:</Text>
            <Text style={{color: "green", fontSize:15}}>{clearanceData[0].status}</Text>
          </View>
          <View style={styles.flexis}>
            <Text style={{color: 'navy', fontWeight: '600'}}>NB:</Text>
            <Text>
              Endeavour to visit the adiministration for better clearance if the
              data in the application tends to not tally with the your academic data
            </Text>
          </View>
        </View>
      )}
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    backgroundColor: '#ffd',
    alignItems: 'center',
    elevation: 9,
    padding:15
  },
  flexis: {
    flexDirection: 'row',
    gap: 10,
    marginVertical: 12,
  },
  keyName: {
    color: 'navy',
    fontWeight: 'bold',
    fontSize: 23,
  },
});
export default AcademicDetails;
