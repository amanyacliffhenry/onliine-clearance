import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { loginUrl } from '../server/ApiUrls';

const ClearanceCard = ({ regNo, password }) => {
  const [clearanceData, setClearanceData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Fetch data from the API
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

        // Check for successful response
        if (data.success) {
          // Check if clearance data exists
          if (data.clearance) {
            setClearanceData(data.clearance);
          } else {
            setError('No clearance data found');
          }
        } else {
          setError(data.message);
        }
        setIsLoading(false);
      } catch (error) {
        setError('Error fetching data');
        setIsLoading(false);
      }
    };

    // Call fetchData function
    fetchData();
  }, [regNo, password]);

  return (
    <View style={styles.container}>
      {isLoading ? (
        <Text>Loading...</Text>
      ) : error ? (
        <Text>Error: {error}</Text>
      ) : clearanceData ? (
        <View>
          <Text>Clearance Information</Text>
          <Text>Student ID: {clearanceData.student_id}</Text>
          <Text>Status: {clearanceData.status}</Text>
          {/* Display additional clearance data fields as needed */}
        </View>
      ) : (
        <Text>No clearance data found</Text>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default ClearanceCard;
