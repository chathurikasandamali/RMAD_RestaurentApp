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

const VerificationCode = ({navigation}) => {
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');

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
        <Text style={styles.title}>Verification Code</Text>
      </View>
      <View style={styles.inputContainer}>
        <CustomTextInput
          onChangeText={text => setEmail(text)}
          value={email}
          keyboardType={'numeric'}
          customInputStyle={styles.inputStyle}
        />
        <CustomTextInput
          onChangeText={text => setEmail(text)}
          value={email}
          keyboardType={'numeric'}
          customInputStyle={styles.inputStyle}
        />
        <CustomTextInput
          onChangeText={text => setEmail(text)}
          value={email}
          keyboardType={'numeric'}
          customInputStyle={styles.inputStyle}
        />
        <CustomTextInput
          onChangeText={text => setEmail(text)}
          value={email}
          keyboardType={'numeric'}
          customInputStyle={styles.inputStyle}
        /> 
      </View>
      <View style={styles.footerTextContainer}>
        <Text style={styles.footerText}>I don't receive a code! </Text>
        <ActionButton
          title={'Please resend'}
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
    marginTop: 0,
  },
  title: {
    fontFamily: CommonStyles.fontFamily.bold,
    fontSize: 36,
    color: CommonStyles.colors.black,
  },
  inputContainer: {
    flexDirection: 'row'
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
  inputStyle: {
    width: CommonStyles.width * 0.2,
    margin: 10,
    marginTop: 90,
  },
});

export default VerificationCode;
