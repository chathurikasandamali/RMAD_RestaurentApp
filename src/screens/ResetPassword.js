import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  StatusBar,
  Text,
  View,
  Image,
} from 'react-native';
import CommonStyles from '../common/CommonStyles';
import {ActionButton} from '../components/ActionButton';
import {Route} from '../common/Enums';
import {CustomTextInput} from '../components/CustomTextInput';
import {LoginButtonGroup} from '../components/LoginButtonGroup';
import {IconEye} from '../assets/icons/IconEye';
import Assets from '../assets/index';
import { BackIcon } from '../assets/icons/BackIcon';

const Signup = ({navigation}) => {
  const [fullName, setFullName] = React.useState('');
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [showPW, setShowPW] = React.useState(false);

  const showPassword = () => {
    setShowPW(!showPW);
    console.log('Press');
  };

  return (
    <SafeAreaView style={styles.container}>
      <Image style={styles.pageTopDesign} source={Assets.pageTopDesign} />
      <ActionButton
        onPressBtn={() => navigation.navigate(Route.LOGIN)}
        icon={<BackIcon />}
        customStyle={styles.backBtnStyle}
        customTextStyle={styles.skipText}
      />
      <View style={styles.titleContainer}>
        <Text style={styles.title}>Reset Password</Text>
      </View>
      <Text style={styles.textStyle}>
        Please enter your email address to request a password reset
      </Text>
      <CustomTextInput
        title={'Email'}
        onChangeText={text => setEmail(text)}
        value={email}
        keyboardType={'email-address'}
      />

      <ActionButton
        title={'SEND NEW PASSWORD'}
        onPressBtn={() => navigation.navigate(Route.TAB_HOME)}
        customStyle={styles.btnStyle}
        customTextStyle={styles.btnText}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: CommonStyles.colors.white,
  },
  pageTopDesign: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
  },
  image: {
    position: 'absolute',
    height: CommonStyles.height,
    width: CommonStyles.width,
  },
  backBtnStyle: {
    position: 'absolute',
    alignItems: 'center',
    justifyContent: 'center',
    top: 50,
    left: 40,
    backgroundColor: CommonStyles.colors.white,
    borderRadius: 10,
    height: 50,
    width: 30,
  },
  btnStyle: {
    backgroundColor: CommonStyles.colors.primary,
    height: 50,
    width: CommonStyles.width * 0.6,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 28.5,
    marginTop: 22,
  },

  btnText: {
    fontFamily: CommonStyles.fontFamily.bold,
    color: CommonStyles.colors.white,
    fontSize: 18,
  },
  titleContainer: {
    marginTop: 1,
  },
  title: {
    fontFamily: CommonStyles.fontFamily.bold,
    fontSize: 36,
    color: CommonStyles.colors.black,
  },
  footerTextContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginVertical: 10,
  },
  footerText: {
    fontSize: 14,
    color: CommonStyles.colors.grey4,
    fontFamily: CommonStyles.fontFamily.medium,
  },
  textStyle: {
    justifyContent: 'center',
    alignItems: 'center',
    margin: 10,
    color: CommonStyles.colors.grey3,
  },
});

export default Signup;
