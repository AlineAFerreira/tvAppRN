import React from 'react';
import Menu from './components/Menu';
import Content from './components/Content';
import ReactNative, {
  StyleSheet,
  View,
} from 'react-native';

const App = () => {
  return (
    <View style={styles.app}>
      <Menu />
      <Content />
    </View>
  );
};

const styles = StyleSheet.create({
  app: {
    width: 1920,
    height: 1080,
    flex: 1,
    flexDirection: 'row',
    backgroundColor: '#161819',
  }
});

export default App;
