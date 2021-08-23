
import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import Style from '../styles/style';

const Home = () => {
    return (
    <View style={Style.styles.header}>
        <Text style={styles.headerText}>{'Home'}</Text>
    </View>
    );
};

const styles = StyleSheet.create({
    headerText: {
      color: 'black'
    }
  });
  
export default Home;