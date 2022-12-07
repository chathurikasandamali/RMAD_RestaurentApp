import React from 'react';
import {
  Text,
  TextInput,
  View,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import CommonStyles from '../common/CommonStyles';

export const CustomTextInput = ({
  title,
  props,
  icon,
  onChangeText,
  // value,
  // placeholder,
  customInputStyle,
  keyboardType,
  onShowPasswordPress,
  secureTextEntry,
}) => {
  return (
    <>
      <View style={styles.titleTextContainer}>
        <Text style={styles.titleText}>{title}</Text>
      </View>
      <View style={styles.inputContainer}>
        <TextInput
          {...props}
          style={[styles.inputStyles, customInputStyle]}
          onChangeText={onChangeText}
          // value={value}
          // placeholder={placeholder}
          keyboardType={keyboardType}
          secureTextEntry={secureTextEntry}
        />
        <TouchableOpacity onPress={onShowPasswordPress} style={styles.icon}>
          {icon}
        </TouchableOpacity>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  inputContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  titleTextContainer: {
    justifyContent: 'flex-start',
  },
  titleText: {
    color: CommonStyles.colors.grey3,
    fontFamily: CommonStyles.fontFamily.medium,
    marginVertical: 15,
    
  },
  inputStyles: {
    height: 65,
    width: CommonStyles.width * 0.85,
    borderRadius: 10,
    borderColor: 'black',
    borderWidth: 1,
    borderColor: CommonStyles.colors.grey5,
    backgroundColor: CommonStyles.colors.white,
    padding: 20,
  },
  icon: {
    position: 'absolute',
    right: 10,
  },
});
