import { StyleSheet } from 'react-native';
import { Colors, Metrics, ApplicationStyles } from '../../assets/themes';

export default StyleSheet.create({
  ...ApplicationStyles.screen,
  ...ApplicationStyles.form,
  section:{
    margin: Metrics.section,
  },
  containerInput: {
    backgroundColor: Colors.backgroundColorOpacity,
    padding: Metrics.baseMargin,
    borderColor: Colors.white
  }
})