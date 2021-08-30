import React, { useState, useRef } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Dimensions
} from 'react-native';
import VideoPlayer from 'react-native-video-player';
import Style from '../styles/style'
import FocusableHighlight from './focusableHighlight';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

const Player = props => {
  const [isPaused, setPaused ] = useState(false);
  console.log('isPaused', isPaused)
  return (
  <View style={styles.playerContainer}>
    <VideoPlayer
      video={{ uri: 'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4' }}
      autoplay={true}
      resizeMode={'contain'}
      paused={isPaused}
      customStyles={
        {
          controlIcon: {display: 'none'},
          seekBar: {display: 'none'},
          seekBarBackground: {backgroundColor: 'transparent'}
        }
      }
      style={{
        aspectRatio: Dimensions.get('window').width/Dimensions.get('window').height,
      }}
  />

      <FocusableHighlight
        nativeID={'back_button'}
        onPress={(e) => {
          setPaused(false);
          props.changeContent(true);
          if (e.eventKeyAction === 0 && e.eventType === 'select') {
          }
        }}
        style={[styles.videoControl, styles.videoControlBack]}
        underlayColor={Style.buttonFocusedColor}>
          <View>
          <FontAwesome name="chevron-left" size={15} />
          </View>
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
          {isPaused ? <FontAwesome name="play" size={15} /> : <FontAwesome name="pause" size={15} />}
        </Text>
      </FocusableHighlight>
  
  </View>
  )
};

export default Player;

const styles = StyleSheet.create({
  playerContainer: {
    width: Dimensions.get('window').width,
    height: 1080,
    backgroundColor: '#161819' 
  },
  videoControls: {
    position: 'absolute',
    height: Dimensions.get('window').height,
    justifyContent: 'space-between',

  },
  videoControlText: {
    fontSize: Style.px(50),
  },
  videoControl: {
    width: Style.px(100),
    height: Style.px(100),
    margin: Style.px(20),
    backgroundColor: Style.buttonUnfocusedColor,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 50
  },
  videoControlBack : {
    position: 'absolute'
  },
  videoControlPlay : {
    position: 'absolute',
    top: Dimensions.get('window').height - 120
  }
});
