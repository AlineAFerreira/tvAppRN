import React, { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import Home from './Home';
import Player from './Player';

const Content = props => {
  const [ homeVisible, setHomeVisible ] = useState(true);

  const changeContent = bool => {
    setHomeVisible(bool)
    !bool ? props.hideMenu(true) : props.hideMenu(false);
  }

  return (
    <View style={styles.navigator}>
      { homeVisible ? 
        <Home page={props.page} changeContent={changeContent}/>:
        <Player changeContent={changeContent}/>
      }
    </View>
  );
};

export default Content;

const styles = StyleSheet.create({
  navigator: {
    width: 1520,
  }
});
