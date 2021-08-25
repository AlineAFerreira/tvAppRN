import React, { useState } from 'react';
import Menu from './components/Menu';
import Content from './components/Content';
import Style from './styles/style';
import ReactNative, {
  StyleSheet,
  View,
} from 'react-native';

const App = () => {
  const [ menuHide, setMenuHide ] = useState(false);
  const [ page, setPage ] = useState('Home')
  return (
    <View style={styles.app}>
      { !menuHide &&
        <Menu changePage={setPage} />
      }
      <Content page={page} hideMenu={setMenuHide}/>
    </View>
  );
};

const styles = StyleSheet.create({
  app: {
    width: Style.px(1920),
    height: Style.px(1080),
    flex: 1,
    flexDirection: 'row',
    backgroundColor: '#161819'
  }
});

export default App;
