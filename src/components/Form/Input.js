import React,{Component} from 'react';
import {View, TextInput, Text} from 'react-native';
import Styles from './styles';
import { Colors } from '../../assets/themes';



export default class FormInput extends Component {

  render() {
    const { input: { ...inputProps }, meta: { touched, error, warning },refName,style, icon, hint='', last, ...props }= this.props
    const hasError =  Boolean(error || warning);

    let itemOptions = {
      autoCapitalize:'none',
      autoCorrect: false,
      underlineColorAndroid: 'transparent',
      placeholderTextColor: Colors.placeholderTextColor,
      style: [Styles.textInput,style],
      returnKeyType: last ? 'go' : 'next'
    }

    itemOptions = Object.assign(itemOptions,inputProps,props);
    return (
      <View style={last ? '' : Styles.containerTextInput} >
        <TextInput ref={refName} {...itemOptions}/>
        {touched && hasError && <Text style={Styles.errorText}>{error}</Text>}
      </View>
    )
  }
}

// export default ({ input: { ...inputProps }, meta: { touched, error, warning },  icon, hint='', last, ...props }) => {
// const hasError =  Boolean(error || warning);
// var itemOption = {
//   error: hasError,
//   success: !hasError
// };
// itemOption = touched && itemOption || {} //don't show nothing if touched = false
// const extOption ={
//   floatingLabel: true
// };
// itemOption = Object.assign(itemOption,extOption,{last});
/* return (
 <View>
 <TextInput {...inputProps} {...props} withRef/>
 </View>
 )
 }*/
{/*
 <View>
 <Item {...itemOption} style={style} >
 {icon && <Icon name={icon} />}
 {hint && <Label>{hint}</Label>}
 <Input {...inputProps} {...props} />
 </Item>
 {touched && hasError && <Text>{error}</Text>}
 </View>*/}
