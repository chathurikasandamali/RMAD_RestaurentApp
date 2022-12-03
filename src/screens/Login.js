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
import {BackIcon} from '../assets/icons/BackIcon';

const Login = ({navigation}) => {
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
        onPressBtn={() => navigation.navigate(Route.SIGNUP)}
        icon={<BackIcon />}
        customStyle={styles.backBtnStyle}
        customTextStyle={styles.skipText}
      />
      <View style={styles.titleContainer}>
        <Text style={styles.title}>Login</Text>
      </View>
      <CustomTextInput
        title={'Email'}
        onChangeText={text => setEmail(text)}
        value={email}
        keyboardType={'email-address'}
      />
      <CustomTextInput
        title={'Password'}
        onChangeText={text => setPassword(text)}
        value={password}
        secureTextEntry={!showPW}
        onShowPasswordPress={showPassword}
        icon={
          <IconEye
            fill={
              showPW ? CommonStyles.colors.primary : CommonStyles.colors.grey1
            }
          />
        }
      />
      <Text style={styles.forgotText}>Forgot Password?</Text>
      <ActionButton
        title={'LOGIN'}
        onPressBtn={() => navigation.navigate(Route.VERIFICATION_CODE)}
        customStyle={styles.btnStyle}
        customTextStyle={styles.btnText}
      />

      <View style={styles.footerTextContainer}>
        <Text style={styles.footerText}>Don't have an account? </Text>
        <ActionButton
          title={'Signup'}
          onPressBtn={() => navigation.navigate(Route.SIGNUP)}
          customTextStyle={
            ([styles.footerText],
            {
              textDecorationLine: 'underline',
              color: CommonStyles.colors.primary,
            })
          }
        />
      </View>

      <View style={styles.dividerContainer}>
        <View style={styles.divider} />
        <Text style={styles.dividerText}>{'Sign up with'}</Text>
        <View style={styles.divider} />
      </View>
      <LoginButtonGroup />
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
    marginTop: 0,
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
  forgotText: {
    color: CommonStyles.colors.primary,
    fontSize: 14,
    marginTop: 30,
  },
  btnStyle: {
    backgroundColor: CommonStyles.colors.primary,
    height: 50,
    width: CommonStyles.width * 0.5,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 28.5,
    marginTop: 40,
  },

  btnText: {
    fontFamily: CommonStyles.fontFamily.bold,
    color: CommonStyles.colors.white,
    fontSize: 18,
  },
  titleContainer: {
    marginTop: 10,
  },
  title: {
    fontFamily: CommonStyles.fontFamily.bold,
    fontSize: 36,
    color: CommonStyles.colors.black,
  },
  footerTextContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginVertical: 30,
  },
  footerText: {
    fontSize: 14,
    color: CommonStyles.colors.grey4,
    fontFamily: CommonStyles.fontFamily.medium,
  },
  divider: {
    height: 1,
    width: CommonStyles.width * 0.3,
    backgroundColor: CommonStyles.colors.divider,
  },
  dividerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    marginTop: 1,
  },
});

export default Login;
