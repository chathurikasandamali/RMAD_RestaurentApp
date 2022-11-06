/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

 import React from 'react';
 import { Text, SafeAreaView, StyleSheet, StatusBar } from 'react-native';
 import Icon from 'react-native-vector-icons/MaterialIcons';
 import Ionicons from 'react-native-vector-icons/Ionicons';
 
 const Sample =() => {
   return (
     <SafeAreaView style={styles.container}>
       <Text style={{fontFamily: 'Ubuntu-Bold', fontSize: 50}}>Home</Text>
       <Icon name='home' size={30} color="#900" />
       <Ionicons name='color-filter-outline' size={30} color='blue' />
     </SafeAreaView>
   );
 };

 const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: StatusBar.currentHeight || 0,
        justifyContent: 'center',
        alignItems: 'center',
    },
  
  });
 
 export default Sample;
 