import {Dimensions} from 'react-native';
const {width, height} = Dimensions.get('window');

export default {
  width,
  height,

  colors: {
    //base colors
    primary: '#FE724C', // orange
    secondary: '#25282B', // black
    white: '#FFFFFF',
    black: '#111719',
    grey1: '#D3D1D8',
    grey2: '#30384F',
    grey3: '#9796A1',
    grey4: '#5B5B5E',
    grey5: '#EEEEEE',
    divider: '#B3B3B3',
  },

  fontFamily: {
    bold: 'Ubuntu-Bold',
    medium: 'Ubuntu-Medium',
    light: 'Ubuntu-Light',
  },
};
