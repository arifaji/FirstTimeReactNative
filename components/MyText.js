import * as React from 'react';
import { Text, View, StyleSheet, Image } from 'react-native';

export default class MyText extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.paragraph}>
          Jadilah seperti mata air yang jernih 
          - Luqni 2k18
        </Text>
        <Image style={styles.logo} source={{uri: 'https://luqni.github.io/img/profile.jpg'}} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    padding: 24,
  },
  paragraph: {
    margin: 24,
    marginTop: 0,
    fontSize: 14,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  logo: {
    height: 300,
    width: 300,
  }
});
