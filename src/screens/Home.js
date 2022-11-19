/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

 import React from 'react';
 import {
   Text,
   SafeAreaView,
   StyleSheet,
   StatusBar,
   ImageBackground,
   TouchableOpacity,
 } from 'react-native';
 import Assets from '../assets/index';
 import CommonStyles from '../common/CommonStyles';
 import {ActionButton} from '../components/ActionButton';
 import {Route} from '../common/Enums';
 
 const Home = ({navigation}) => {
   return (
     <SafeAreaView style={styles.container}>
       <ImageBackground
         source={Assets.background}
         resizeMode="cover"
         style={styles.image}
       />
       {/* <ActionButton
         title={'Home'}
         onPressBtn={() => navigation.navigate(Route.SPLASH)}
         customStyle={styles.btnStyle}
         customTextStyle={styles.btnText}
       /> */}
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
   btnStyle: {
     backgroundColor: CommonStyles.colors.primary,
     height: 60,
     width: CommonStyles.width * 0.5,
     justifyContent: 'center',
     alignItems: 'center',
     borderRadius: 28.5,
   },
   btnText: {
     // fontFamily: CommonStyles.fontFamily.medium,
     color: CommonStyles.colors.white,
     fontSize: 15,
   },
 });
 
 export default Home;
 