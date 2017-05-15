import Fonts from './Fonts'
import Metrics from './Metrics'
import Colors from './Colors'

// This file is for a reusable grouping of Theme items.
// Similar to an XML fragment layout in Android

const ApplicationStyles = {
  screen: {
    mainContainer: {
      flex: 1,
      backgroundColor: Colors.background
    },
    backgroundImage: {
      position: 'absolute',
      top: 0,
      left: 0,
      bottom: 0,
      right: 0,
      width: null,
      height: null,
    },
    container: {
      // paddingTop: Metrics.baseMargin,
    },
    contentContainerStyle:{
      //for scrollview
      flex:1,
      justifyContent:'center',
      paddingBottom: Metrics.doubleBaseMargin
    },
    section: {
      margin: Metrics.section,
    },
    sectionText: {
      ...Fonts.style.normal,
      paddingVertical: Metrics.doubleBaseMargin,
      color: Colors.text,
      marginVertical: Metrics.smallMargin,
      textAlign: 'center'
    },
    subtitle: {
      color: Colors.snow,
      padding: Metrics.smallMargin,
      marginBottom: Metrics.smallMargin,
      marginHorizontal: Metrics.smallMargin
    },
    titleText: {
      ...Fonts.style.h2,
      fontSize: 14,
      color: Colors.text
    },
    centered: {
      alignItems: 'center'
    },
    logoContainer: {
      alignItems: 'center',
      backgroundColor: 'rgba(255,255,255,0.1)',
      justifyContent:'center',
      paddingVertical: Metrics.doubleBaseMargin * 2
    }
  },
  form:{
    button:{
      alignItems: 'center',
      backgroundColor: Colors.buttonColor,
      paddingVertical: Metrics.marginVertical,
      elevation:10
    },
    buttonText:{
      color: Colors.white,
      fontWeight:'bold'
    },
    buttonDisabled: {
      alignItems: 'center',
      backgroundColor: Colors.buttonBackgroundOpacity,
      paddingVertical: Metrics.marginVertical,
    },
    containerTextInput:{
      marginBottom: Metrics.baseMargin,
      flexDirection: 'row',
      alignItems: 'center',
      borderBottomWidth:1,
      borderBottomColor:Colors.inputUnderlineColor,
    },
    iconInput:{
      color: Colors.inputIconColor,
      padding: 10,
    },
    textInput:{
      color: Colors.textInputColor,
      height: Metrics.textInputHeight,
      paddingHorizontal: Metrics.marginHorizontal,
      flex: 1,
    },
    errorText: {
      marginTop: Metrics.baseMargin,
      color: Colors.crimson,
      textAlign:'right'
    }
  },
  darkLabelContainer: {
    padding: Metrics.smallMargin,
    paddingBottom: Metrics.doubleBaseMargin,
    borderBottomColor: Colors.border,
    borderBottomWidth: 1,
    marginBottom: Metrics.baseMargin
  },
  darkLabel: {
    fontFamily: Fonts.type.bold,
    color: Colors.snow
  },
  groupContainer: {
    margin: Metrics.smallMargin,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center'
  }
}

export default ApplicationStyles
