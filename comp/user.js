import React from 'react'; 
import { StyleSheet, Text, View ,Image } from 'react-native';
import Axios from 'axios';
import {Button, Spinner ,Container ,Header ,Content,Card ,CardItem,H1, H3 } from 'native-base';
import { useState , useEffect } from 'react';
import moment from 'moment';


const User = ({details}) => {
 return(
<Card style={styles.Card}>
    <CardItem cardBody style={styles.cardItem}>
        <Image 
        style={styles.image}
        source={{
            //if it exits then it will display it.
        uri : details.picture?.large,
        width: 150,
        height: 150
    
        }} 
        />

    </CardItem>
    <CardItem bordered style={styles.cardItem}>
    <H1 style={styles.text}>
    {details["name"]?.title} {details["name"]?.first}{details["name"]?.last}
    </H1>
    </CardItem>
    <CardItem bordered style={styles.cardItem}>

    <H3 style={styles.text}>
    {details["cell"]}
    </H3>

    </CardItem>
    <CardItem bordered style={styles.cardItem}>

    <H3 style={styles.text}>
     Registed at {moment(details.registered?.text).format('DD-MM-YY')}
    </H3>
    
    </CardItem>

</Card>

 );


};

const styles = StyleSheet.create({
    card: {
        width: '90%',
        justifyContent: "center",
        alignItems: "center",
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
        borderWidth: 3,
        borderColor: '#fbd46d',
        marginTop: -50,
        marginLeft: '20%',
      },
      text: {
        color: '#eeeeee',
      },
    
});
export default User;