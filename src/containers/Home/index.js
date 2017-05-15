import React, {Component, PropTypes} from 'react';
import {ScrollView, View, Text, Image} from 'react-native';
import { Images } from '../../assets/themes';
import { connect } from 'react-redux';

// Styles
import styles from './styles'

class Home extends React.Component {

  render() {
    return (
      <View style={styles.mainContainer}>
        <Image source={Images.background} style={styles.backgroundImage}/>
        <ScrollView style={styles.container} contentContainerStyle={{flex:1,justifyContent:'center'}}>
          <View style={styles.centered}>
            <Text>home page</Text>
          </View>
        </ScrollView>
      </View>
    )
  }

}

export default Home