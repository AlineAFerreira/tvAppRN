import React from 'react';
import type {Node} from 'react';
import Style from './styles/style';
import Content from './components/Content';
import ReactNative, {
  Platform,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';



const App: () => Node = () => {
  const isDarkMode = useColorScheme() === 'dark';


  return (

      <View style={styles.app}>
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
  }
});

export default App;
