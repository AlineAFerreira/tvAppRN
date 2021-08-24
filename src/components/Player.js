import React, { useState, useRef } from 'react';
import {
  View,
  Text,
  StyleSheet
} from 'react-native';
import VideoContainer from './VideoContainer';
import Video from 'react-native-video';

const Player = () => {
  return (
  <View>
    <Video 
      source={require('../assets/video/sample.mov')} 
       ref={(ref) => {
         this.player = ref
       }}      
       autoplay={true}   
       paused={false}   
       controls={true}                          
       onBuffer={this.onBuffer}                
       onError={this.videoError}               
       style={styles.backgroundVideo} />
  </View>
  )
};

export default Player;

const styles = StyleSheet.create({
  backgroundVideo: {
    width: 1920,
    height: 1080,
  }
});
