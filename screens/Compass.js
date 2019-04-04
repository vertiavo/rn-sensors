import React from 'react';
import { ScrollView, StyleSheet } from 'react-native';

export default class Compass extends React.Component {
  static navigationOptions = {
    title: 'Compass',
  };

  render() {
    return (
      <ScrollView style={styles.container}>

      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 15,
    backgroundColor: '#fff',
  },
});
