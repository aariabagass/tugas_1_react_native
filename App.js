/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, StatusBar} from 'react-native';
import MenuBerita from './Component/MenuBerita';
import MenuGames from './Component/MenuGames';
import MenuHits from './Component/MenuHits';
import MenuUtama from './Component/MenuUtama';

const Header = () => {
  return (
    <View>
      <Text>Halaman Header</Text>
    </View>
  );
};

const Footer = () => {
  var bagas = '@bagas';
  return (
    <View>
      <Text>Footer {bagas}</Text>
    </View>
  );
};

export default class App extends Component {
  render() {
    return (
      <View>
        <StatusBar backgroundColor="green" />
        <Header />
        <MenuUtama />
        <MenuGames />
        <MenuBerita />
        <MenuHits />
        <Footer />
      </View>
    );
  }
}
