import React, {Component, PropTypes} from 'react';
import {ScrollView, View, Text, Image} from 'react-native';
import { Images } from '../../assets/themes';
import styles from './styles';
export default class LaunchScreen extends Component {
  render() {
    return (
      <View style={styles.mainContainer}>
        <ScrollView style={styles.container}>
          <View style={styles.centered}>
            <Image source={Images.logo} style={styles.logo} />
          </View>
          <View style={styles.section}>
            <Text style={styles.sectionText}>Launch screen</Text>
          </View>
        </ScrollView>
      </View>
    )
  }
}