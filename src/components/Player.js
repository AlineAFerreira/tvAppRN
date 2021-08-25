import React, { useState, useRef } from 'react';
import {
  View,
  Text,
  StyleSheet
} from 'react-native';
import Video from 'react-native-video';
import Style from '../styles/style'
import FocusableHighlight from './focusableHighlight';
import FontAwesome from 'react-native-vector-icons/dist/FontAwesome';
import IonIcon from 'react-native-vector-icons/Ionicons';
import Icon from 'react-native-vector-icons/MaterialIcons';

const Player = props => {
  const [isPaused, setPaused ] = useState(false);
  return (
  <View style={styles.playerContainer}>
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
      <FocusableHighlight
        nativeID={'play_pause_button'}
        // ref={playPauseButtonRef}
        onPress={(e) => {
          setPaused(!isPaused);
          if (e.eventKeyAction === 0 && e.eventType === 'select') {
            setPaused(!isPaused);
          }
        }}
        style={[styles.videoControl, styles.videoControlPlay]}
        hasTVPreferredFocus={true}
        underlayColor={Style.buttonFocusedColor}>
        <Text style={styles.videoControlText}>
          {isPaused ? 'Play' : 'Pause'}
        </Text>
      </FocusableHighlight>
    </View>
  </View>
  )
};

export default Player;

const styles = StyleSheet.create({
  playerContainer: {
    width: 1950,
    height: 1080,
    backgroundColor: '#161819' 
  },
  backgroundVideo: {
    width: 1920,
    height: 1080,
  },
  videoControls: {
    position: 'absolute',
    height: '100%',
    justifyContent: 'space-between',
  },
  videoControlText: {
    fontSize: Style.px(50),
  },
  videoControl: {
    width: Style.px(300),
    height: Style.px(100),
    margin: Style.px(20),
    backgroundColor: Style.buttonUnfocusedColor,
    justifyContent: 'center',
    alignItems: 'center',
  },
  videoControlPlay: {
    borderRadius: 50
  }
});
