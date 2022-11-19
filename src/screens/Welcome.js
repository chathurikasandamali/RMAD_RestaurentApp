/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

 import React from 'react';
 import { Text, SafeAreaView, StyleSheet, StatusBar, ImageBackground } from 'react-native';
 import Assets from '../assets/index';
import CommonStyles from '../common/CommonStyles';
 
 const Welcome =() => {
   return (
     <SafeAreaView style={styles.container}>
      <ImageBackground 
        source={Assets.background}
        resizeMode="cover"
        style={styles.image}
      />
      <Text>HELLO</Text>
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
    image: {
      position: 'absolute',
      height: CommonStyles.height,
      width: CommonStyles.width,
    },
  });
 
 export default Welcome;
 