import { StyleSheet } from 'react-native';
import { Colors, Metrics, ApplicationStyles } from '../../assets/themes';

export default StyleSheet.create({
  container:{
    height: Metrics.icons.small *2,
    borderRadius: Metrics.icons.small,
    width: Metrics.icons.small *2 ,
    backgroundColor: 'transparent',
    justifyContent:'center'
  },
  icon: {
    backgroundColor: Colors.transparent,
    alignSelf:'center',
  }
})