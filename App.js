import { StatusBar } from 'expo-status-bar';
import React  from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Axios from 'axios';
import {Button, Spinner } from 'native-base';
import { useState , useEffect } from 'react';
import User from './comp/user';


export default function App() {
  const [details,setDetails] = useState(null);
  const fetchDetails = async () => {
    try{
     const {data} = await  Axios.get('https://randomuser.me/api/') ;
     const details = data.results[0];
    //  console.log(details);
     setDetails(details);
    } catch(error){
         console.warn(error);
    }
    
  };

  useEffect(()=>{
    fetchDetails();
  }, [] )

  if(!details)
  {
    return(
      <View style={styles.container}> 
       <Spinner/>
      </View>
    )
  }else{
    return (
    <>
    <StatusBar hidden={false} />

    <View style={styles.container}>
     

     
        <User details={details}/>
        <Button rounded 
        style={styles.button} 
        onPress={()=> fetchDetails()}> 
       <Text>New User</Text>
        </Button>
     
    </View>
    </>
  );
    }
}

  const styles = StyleSheet.create({
    container:{
    flex:1,
    justifyContent:"center",
    alignItems:"center",
    backgroundColor:"#222831",

    },
    button:{
     marginTop: 30,
     paddingHorizontal: 30,
     alignSelf: "center"

    },
   
  });
