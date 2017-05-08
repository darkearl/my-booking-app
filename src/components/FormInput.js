import React from 'react';
import { Container, Item, Input, Text, Label, Icon } from 'native-base';
import { View } from 'react-native';

export default ({ input: { ...inputProps }, meta: { touched, error, warning }, style={}, icon, hint='', last, ...props }) => {
  const hasError =  Boolean(error || warning);
  var itemOption = {
    error: hasError,
    success: !hasError
  };
  itemOption = touched && itemOption || {} //don't show nothing if touched = false
  const extOption ={
    floatingLabel: true
  };
  itemOption = Object.assign(itemOption,extOption,{last});
  return (
    <View>
      <Item {...itemOption} style={style} >
        {icon && <Icon name={icon} />}
        {hint && <Label>{hint}</Label>}
        <Input {...inputProps} {...props} />
      </Item>
      {touched && hasError && <Text>{error}</Text>}
    </View>
  )
}