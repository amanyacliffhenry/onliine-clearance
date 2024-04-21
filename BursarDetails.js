// ClearDetails.js

import React, {useEffect, useState} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {BASE_URL} from '../server/ApiUrls';

const BursarDetails = ({route}) => {
  const {regNo} = route.params;
  const [clearanceData, setClearanceData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchClearanceData = async () => {
      try {
        const response = await fetch(BASE_URL + `bursar.php?regNo=${regNo}`);
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
    <View style={{backgroundColor: '#ffd'}}>
      {isLoading && <Text>Loading clearance data...</Text>}
      {error && <Text>Error: {error}</Text>}
      {clearanceData && (
        <View style={styles.container}>
          <Text style={{color: 'blue', textAlign: 'center', fontSize: 23}}>
            Bursar's Clearance status for {regNo}:
          </Text>
          <View style={styles.flexis}>
            <Text style={{marginLeft: 6, color: 'blue'}}>Faculty:</Text>
            <Text
              style={{
                color: 'white',
                fontSize: 16,
                backgroundColor: 'navy',
                padding: 8,
                borderRadius: 5,
              }}>
              {clearanceData[0].faculty}
            </Text>
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
            <Text>Balance:</Text>
            <Text>{clearanceData[0].balance}</Text>
          </View>
          <View style={styles.flexis}>
            <Text>Clearance Status:</Text>
            <Text style={{color: 'red'}}>{clearanceData[0].status}</Text>
          </View>
          <View style={{flexDirection: 'row', gap: 10}}>
            <Text style={{color: 'navy', fontWeight: '600', paddingLeft: 10}}>
              NB:
            </Text>
            <Text style={{color: 'gray', padding: 10}}>
              Endeavour to meet the bursar department for bursar clarification
              upon having an issue with the bursar department details being
              displayed above currently !, Happy graduation after a successful
              clearance
            </Text>
          </View>
        </View>
      )}
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    marginTop: 62,
    backgroundColor: '#ffd',
    alignItems: 'center',
    justifyContent: 'center',
    elevation: 9,
    padding: 10,
  },
  flexis: {
    flexDirection: 'row',
    gap: 40,
    marginVertical: 12,
  },
  keyName: {
    color: 'navy',
    fontWeight: 'bold',
    fontSize: 23,
  },
});
export default BursarDetails;
