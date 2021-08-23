import React from 'react';
import {StyleSheet, View} from 'react-native';
import Style from '../styles/style';
import Home from './Home';
import Player from './Player';

const Content = () => {
  return (
    <View>
        <Home />
        <Player />
    </View>
  );
};

export default Content;

const styles = StyleSheet.create({
  app: {
    width: Style.px(1920),
    height: Style.px(1080),
    flex: 1,
    flexDirection: 'row',
  },
  navigator: {
    width: Style.px(1520),
    height: Style.px(1080),
  },
  navigatorFullscreen: {
    width: Style.px(1920),
  },
});
