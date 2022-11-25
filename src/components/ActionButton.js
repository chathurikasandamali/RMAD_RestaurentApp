import React from 'react';
import {Text, TouchableOpacity} from 'react-native';
import CommonStyles from '../common/CommonStyles';

export const ActionButton = ({
  title,
  customStyle,
  customTextStyle,
  onPressBtn,
  icon,
}) => {
  return (
    <TouchableOpacity style={customStyle} onPress={onPressBtn}>
      {icon}
      <Text
        style={[{fontFamily: CommonStyles.fontFamily.bold}, customTextStyle]}>
        {title}
      </Text>
    </TouchableOpacity>
  );
};
