
import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import Style from '../styles/style';

const Player = () => {
    return (
    <View style={Style.styles.header}>
        <Text style={styles.headerText}>{'Player'}</Text>
    </View>
    );
};

const styles = StyleSheet.create({
    headerText: {
      color: 'black'
    }
  });
  
export default Player;