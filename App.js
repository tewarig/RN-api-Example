import { StatusBar } from 'expo-status-bar';
import React  from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Axios from 'axios';
import {Button } from 'native-base';
import { useState } from 'react';


export default function App() {
  const [details,setDetails] = useState(null);
  const fetchDetails = async () => {
    try{
     const {data} = await  Axios.get('https://randomuser.me/api/') ;
     const details = data.results[0];
     setDetails(details);
    } catch(error){
         console.warn(error);
    }
  };
  return (
    <>
    <StatusBar hidden={false} />

    <View style={styles.container}>
      <Text>Open up App.js to start working on your app!</Text>
      <StatusBar style="auto" />
    </View>
    </>
  );
}

  const styles = StyleSheet.create({
    card: {
      width: '90%',
      justifyContent: 'flex-start',
      alignItems: 'center',
      backgroundColor: '#4f8a8b',
      borderColor: '#4f8a8b',
      borderWidth: 2,
    },
    cardItem: {
      backgroundColor: '#4f8a8b',
    },
    image: {
      width: 150,
      height: 150,
      borderRadius: 150 / 2,
      overflow: 'hidden',
      borderWidth: 3,
      borderColor: '#fbd46d',
      marginTop: -50,
    },
    text: {
      color: '#eeeeee',
    },
  });
