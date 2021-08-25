import React, { useState, useRef } from 'react';
import {
  View,
  Text,
  StyleSheet
} from 'react-native';
import Video from 'react-native-video';
import Style from '../styles/style'
import FocusableHighlight from './focusableHighlight';

const Player = props => {
  const [isPaused, setPaused ] = useState(false);
  return (
  <View>
    <Video 
      source={require('../assets/video/sample.mov')} 
      ref={(ref) => {
        this.player = ref
      }}      
      autoplay={true}   
      paused={isPaused}   
      controls={true}                          
      onBuffer={this.onBuffer}                
      onError={this.videoError}               
      style={styles.backgroundVideo} 
    />
    <View style={styles.videoControls}>
      <FocusableHighlight
        nativeID={'play_pause_button'}
        // ref={playPauseButtonRef}
        onPress={(e) => {
          setPaused(!isPaused);
          if (e.eventKeyAction === 0 && e.eventType === 'select') {
            setPaused(!isPaused);
          }
        }}
        style={styles.videoControl}
        hasTVPreferredFocus={true}
        underlayColor={Style.buttonFocusedColor}>
        <Text style={styles.videoControlText}>
          {isPaused ? 'Play' : 'Pause'}
        </Text>
      </FocusableHighlight>
      <FocusableHighlight
        nativeID={'back_button'}
        onPress={(e) => {
          props.changeContent(true);
          if (e.eventKeyAction === 0 && e.eventType === 'select') {
          }
        }}
        style={styles.videoControl}
        underlayColor={Style.buttonFocusedColor}>
        <Text style={styles.videoControlText}>
          {'Voltar '}
        </Text>
      </FocusableHighlight>
    </View>
  </View>
  )
};

export default Player;

const styles = StyleSheet.create({
  backgroundVideo: {
    width: 1920,
    height: 1000,
  },
  videoControls: {
    flexWrap: 'wrap', 
    alignItems: 'flex-start',
    flexDirection:'row',
  },
  videoControlText: {
    fontSize: Style.px(30),
  },
  videoControl: {
    width: Style.px(300),
    height: Style.px(100),
    margin: Style.px(20),
    backgroundColor: Style.buttonUnfocusedColor,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
