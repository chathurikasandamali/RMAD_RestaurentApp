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
  View,
} from 'react-native';
import Assets from '../assets/index';
import CommonStyles from '../common/CommonStyles';
import {ActionButton} from '../components/ActionButton';
import {Route} from '../common/Enums';
import LinearGradient from 'react-native-linear-gradient';
import { LoginButtonGroup } from '../components/LoginButtonGroup';

const Welcome = ({navigation}) => {
  const subTitle = 'Your favourite foods delivered \nfast at your door.';
  return (
    <SafeAreaView style={styles.container}>
      <ImageBackground
        source={Assets.background}
        resizeMode="cover"
        style={styles.image}
      />
      <LinearGradient
        colors={['rgba(0, 0, 0, 0)', 'rgba(0, 0, 0, 0.9)']}
        style={styles.screenContainer}>
        <View style={styles.subContainer}>
          <ActionButton
            title={'Skip'}
            onPressBtn={() => navigation.navigate(Route.SPLASH)}
            customStyle={styles.skipBtnStyle}
            customTextStyle={styles.skipText}
          />
          <View style={styles.titleContainer}>
            <Text style={styles.title}>Welcome to</Text>
            <Text style={[styles.title, {color: CommonStyles.colors.primary}]}>
              Food Hub
            </Text>
          </View>

          <Text style={styles.subTitle}>{subTitle}</Text>

          <View style={styles.dividerContainer}>
            <View style={styles.divider} />
            <Text style={styles.dividerText}>{'Sign in with'}</Text>
            <View style={styles.divider} />
          </View>

          {/* <View style={styles.btnContainer}>
            <ActionButton
              title={'FACEBOOK'}
              onPressBtn={() => navigation.navigate(Route.SPLASH)}
              customStyle={styles.btnStyle}
              customTextStyle={styles.btnText}
              icon={<FBLogo />}
            />
            <ActionButton
              title={'GOOGLE'}
              onPressBtn={() => navigation.navigate(Route.SPLASH)}
              customStyle={styles.btnStyle}
              customTextStyle={styles.btnText}
              icon={<GoogleLogo />}
            />
          </View> */}
          <LoginButtonGroup />

          <ActionButton
            title={'Start with email or phone'}
            onPressBtn={() => navigation.navigate(Route.SIGNUP)}
            customStyle={styles.footerBtnStyle}
            customTextStyle={styles.footerBtnText}
          />

          <View style={styles.footerTextContainer}>
            <Text style={styles.footerText}>Already have an account? </Text>
            <ActionButton
              title={'Sign In'}
              onPressBtn={() => navigation.navigate(Route.SPLASH)}
              customTextStyle={
                ([styles.footerText], {textDecorationLine: 'underline'})
              }
            />
          </View>
        </View>
      </LinearGradient>
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
  skipBtnStyle: {
    backgroundColor: CommonStyles.colors.white,
    height: 32,
    width: 55,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 27,
    position: 'absolute',
    top: 10,
    right: 5,
  },
  skipText: {
    fontFamily: CommonStyles.fontFamily.medium,
    color: CommonStyles.colors.primary,
    fontSize: 14,
  },
  linearGradient: {
    flex: 1,
    paddingLeft: 15,
    paddingRight: 15,
    borderRadius: 5,
  },
  buttonText: {
    fontSize: 18,
    fontFamily: 'Gill Sans',
    textAlign: 'center',
    margin: 10,
    color: '#ffffff',
    backgroundColor: 'transparent',
  },
  screenContainer: {
    height: CommonStyles.height,
    width: CommonStyles.width,
    justifyContent: 'center',
    alignItems: 'center',
  },
  subContainer: {
    flex: 1,
    justifyContent: 'center',
    //alignItems: 'center',
    margin: 30,
  },
  titleContainer: {
    marginTop: 1,
  },
  title: {
    fontFamily: CommonStyles.fontFamily.bold,
    fontSize: 53,
    color: CommonStyles.colors.black,
  },
  subTitle: {
    fontFamily: CommonStyles.fontFamily.medium,
    fontSize: 18,
    color: CommonStyles.colors.grey2,
    textAlign: 'left',
  },
  btnContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginVertical: 10
  },
  btnStyle: {
    backgroundColor: CommonStyles.colors.white,
    height: 60,
    width: CommonStyles.width * 0.35,
    justifyContent: 'space-evenly',
    alignItems: 'center',
    borderRadius: 28,
    flexDirection: 'row',
  },

  btnText: {
    fontFamily: CommonStyles.fontFamily.light,
    color: CommonStyles.colors.black,
    fontSize: 14,
    right: 5,
  },
  divider: {
    height: 1,
    width: CommonStyles.width * 0.3,
    backgroundColor: CommonStyles.colors.white,
  },
  dividerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    marginTop: 200,
  },
  dividerText: {
    fontFamily: CommonStyles.fontFamily.light,
    fontSize: 18,
    color: CommonStyles.colors.white,
  },
  footerBtnStyle: {
    backgroundColor: 'rgba(255, 255, 255, 0.21)',
    height: 60,
    width: CommonStyles.width * 0.85,
    justifyContent: 'space-evenly',
    alignItems: 'center',
    borderRadius: 28,
    flexDirection: 'row',
    borderWidth: 1,
    borderColor: CommonStyles.colors.white,
  },

  footerBtnText: {
    fontFamily: CommonStyles.fontFamily.medium,
    color: CommonStyles.colors.white,
    fontSize: 14,
    right: 5,
  },
  footerTextContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginVertical: 10
  },
  footerText: {
    fontSize: 16,
    color: CommonStyles.colors.white,
    fontFamily: CommonStyles.fontFamily.medium,
  },
});

export default Welcome;
