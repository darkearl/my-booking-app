import { StyleSheet } from 'react-native';
import { Colors, Metrics, ApplicationStyles } from '../../assets/themes';

export default StyleSheet.create({
  ...ApplicationStyles.screen,
  ...ApplicationStyles.form,
  section: {
    marginTop: Metrics.section,
    marginLeft: Metrics.section,
    marginRight: Metrics.section,
    flexGrow:1,
    justifyContent: 'space-between'
  },
  containerInput: {
  },
  text:{
    color: Colors.white,
    textAlign: 'center',
    marginTop: Metrics.baseMargin
  },
})