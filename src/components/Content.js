import React, { useState } from 'react';
import {ProgressViewIOSComponent, StyleSheet, View} from 'react-native';
import Home from './Home';
import Player from './Player';
import Style from '../styles/style';

const Content = props => {
  const [ homeVisible, setHomeVisible ] = useState(true);

  const changeContent = bool => {
    setHomeVisible(bool)

    !bool ? props.hideMenu(true) : props.hideMenu(false);
  }

  return (
    <View style={styles.navigator}>
      { homeVisible ? 
        <Home changeContent={changeContent}/>:
        <Player changeContent={changeContent}/>
      }
    </View>
  );
};

export default Content;

const styles = StyleSheet.create({
  navigator: {
    width: 1950,
    backgroundColor: '#161819'
  }
});
