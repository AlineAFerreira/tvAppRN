import React, { useState } from 'react';
import {StyleSheet, View} from 'react-native';
import Home from './Home';
import Player from './Player';

const Content = () => {
  const [ homeVisible, setHomeVisible ] = useState(true);

  const changeContent = bool => {
    setHomeVisible(bool)
  }

  return (
    <View>
      { homeVisible ? 
        <Home changeContent={changeContent}/>:
        <Player changeContent={changeContent}/>
      }
    </View>
  );
};

export default Content;

const styles = StyleSheet.create({

});
