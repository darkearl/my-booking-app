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
      paddingTop: Metrics.baseMargin,
    },
    section: {
      margin: Metrics.section
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
    }
  },
  form:{
    button:{
      marginTop: Metrics.baseMargin,
      alignItems: 'center',
      backgroundColor: Colors.orange,
      paddingVertical: Metrics.marginVertical,
      elevation:10
    },
    buttonText:{
      color: Colors.white,
      fontWeight:'bold'
    },
    buttonDisabled: {
      marginTop: Metrics.baseMargin,
      alignItems: 'center',
      backgroundColor: Colors.buttonBackgroundOpacity,
      paddingVertical: Metrics.marginVertical,
      elevation:10,
    },
    containerTextInput:{
      marginBottom: Metrics.baseMargin
    },
    textInput:{
      color: Colors.textInputColor,
      height: Metrics.textInputHeight,
      backgroundColor: Colors.textInputBackgroundColor,
      paddingHorizontal: Metrics.marginHorizontal
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
