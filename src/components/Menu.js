import React, {useContext} from 'react';
import {View, Text, Image, StyleSheet} from 'react-native';
import Style from '../styles/style';
import FocusableHighlight from './focusableHighlight';

const Menu = () => {
  function showMenu() {
    const items = ['Home', 'Filmes', 'Séries', 'Canais', 'Infantil'];
    return items.map((item) => {
      const key = 'menu_' + item.toLowerCase();
      const route = item.toLowerCase();
      return (
        <FocusableHighlight
          onPress={() => { }}
          underlayColor={Style.buttonFocusedColor}
          style={styles.menuItem}
          nativeID={key}
          key={key}>
          <Text style={styles.text}>{item}</Text>
        </FocusableHighlight>
      );
    });
  }

  return(
    <View style={styles.left}>
      <Text style={styles.title}>{'React Native TV'}</Text>
      <View style={styles.menu}>{showMenu()}</View>
    </View>
  )
};

export default Menu;

const styles = StyleSheet.create({
  left: {
    backgroundColor: Style.backgroundColor,
    width: Style.px(400),
    height: Style.px(1080),
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  logo: {
    width: Style.px(150),
    height: Style.px(100),
    margin: Style.px(100),
    marginBottom: Style.px(20),
    resizeMode: 'contain',
  },
  title: {
    fontSize: Style.px(30),
    color: 'white',
  },
  menu: {
    width: Style.px(400),
    height: Style.px(800),
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  menuItem: {
    width: Style.px(300),
    height: Style.px(90),
    margin: Style.px(10),
    backgroundColor: Style.buttonUnfocusedColor,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: Style.px(40),
  },
});
