import { StyleSheet } from 'react-native';
import { Colors, Metrics, ApplicationStyles } from '../../assets/themes';

export default StyleSheet.create({
  ...ApplicationStyles.screen,
  containerLogin: {
    paddingBottom: Metrics.baseMargin,
    flexGrow:1,
    justifyContent: 'center',
  },
  logo: {
    height: Metrics.images.logo,
    width: Metrics.images.logo,
    resizeMode: 'contain'
  }
})