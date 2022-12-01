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
import CommonStyles from '../common/CommonStyles';
import {ActionButton} from '../components/ActionButton';
import {FBLogo} from '../assets/icons/FBLogo';
import {GoogleLogo} from '../assets/icons/GoogleLogo';

export const LoginButtonGroup = ({}) => {
  return (
    <View style={styles.btnContainer}>
      <ActionButton
        title={'FACEBOOK'}
        customStyle={styles.btnStyle}
        customTextStyle={styles.btnText}
        icon={<FBLogo />}
      />
      <ActionButton
        title={'GOOGLE'}
        customStyle={styles.btnStyle}
        customTextStyle={styles.btnText}
        icon={<GoogleLogo />}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  btnContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginVertical: 10,
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
});
