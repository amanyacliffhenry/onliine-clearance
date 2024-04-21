import React, { useState, useEffect } from 'react';
import { View, Text, FlatList, TouchableOpacity } from 'react-native';
import { retrieveClearanceUrl } from '../server/ApiUrls'; // Update the import to the modified API endpoint

const Dummy = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await fetch(retrieveClearanceUrl); // Update to the modified API endpoint
      const json = await response.json();
      setData(json);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  return (
    <>
    <View style={{alignItems:'center',justifyContent:"center",marginTop:10}}><Text>My status</Text></View>
    <View style={{marginTop:28}}>
      <FlatList
        data={data}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => (
          <View style={{ margin: 11,gap:10, borderWidth:1,padding:12,backgroundColor:"#fff",elevation:19,borderRadius:5 }}>
            <Text style={{color:"green",fontSize:18}}>First Name: {item.firstname}</Text>
            <Text>Last Name: {item.lastname}</Text>
            <Text>Student No: {item.regNo}</Text>
            <Text>Year of Study: {item.regY}</Text>
            <View style={{flexDirection:"row",gap:200}}>
            <Text style={{color:"navy",fontSize:23}}>Faculty:</Text>
            <Text style={{color:"navy",fontSize:23}}>{item.fac}</Text>
            </View>
            <View style={{flexDirection:"row",gap:155}}>
            <Text style={{color:"#000",fontSize:23}}>Department:</Text>
            <Text style={{color:"red",fontSize:23}}>{item.course}</Text>
            </View>
            <View style={{flexDirection:"row",gap:205}}>
            <Text style={{color: "navy"}}>Status:</Text>
            <Text style={{color: "green",backgroundColor:"navy",padding:12,borderRadius:5}}>{item.status}</Text>
            </View>
            <TouchableOpacity><Text>Back to Dashboard</Text></TouchableOpacity>
            <TouchableOpacity><Text>Library</Text></TouchableOpacity>
            {/* Add more fields as needed */}
          </View>
        )}
      />
    </View>
    </>
  );
};

export default Dummy;
