import React, { useRef, useState } from 'react';
import {
  StyleSheet,
  View,
  Image,
  ScrollView,
  SectionList,
  Text,
  Platform,
  findNodeHandle,
  ProgressViewIOSComponent,
} from 'react-native';
import Style from '../styles/style';
import FocusableHighlight from './focusableHighlight';

// const SECTIONS = 15;
// const SECTIONS = ['Novidades da Semana', 'Filmes de Ação', 'Em Alta', 'Recomendados para você', 'Conteúdos exclusivos', 'Filmes para as crianças'];
const SECTIONS_ROWS = 1;
const SECTIONS = [
  { 
    name: 'Novidades da Semana',
    items: [
      {
        title: 'JiuJitsu',
        cover: require('../assets/images/cover0.jpeg')
      },
      {
        title: 'The Good Doctor',
        cover: require('../assets/images/cover1.jpeg')
      },
      {
        title: 'Kong fu',
        cover: require('../assets/images/cover2.jpeg')
      },
      {
        title: 'Rapunzel',
        cover: require('../assets/images/cover3.jpeg')
      },
      {
        title: 'Rapunzel',
        cover: require('../assets/images/cover4.jpeg')
      },
      {
        title: 'Rapunzel',
        cover: require('../assets/images/cover5.jpeg')
      },
      {
        title: 'Rapunzel',
        cover: require('../assets/images/cover6.jpeg')
      },
      {
        title: 'Rapunzel',
        cover: require('../assets/images/cover7.jpeg')
      },
      {
        title: 'Rapunzel',
        cover: require('../assets/images/cover8.jpeg')
      }
    ]
  },
  { 
    name: 'Filmes de Ação',
    items: [
      {
        title: 'Kong fu',
        cover: require('../assets/images/cover9.jpeg')
      },
      {
        title: 'Rapunzel',
        cover: require('../assets/images/cover10.jpeg')
      },
      {
        title: 'Kong fu',
        cover: require('../assets/images/cover11.jpeg')
      },
      {
        title: 'Rapunzel',
        cover: require('../assets/images/cover12.jpeg')
      },      {
        title: 'Kong fu',
        cover: require('../assets/images/cover13.jpeg')
      },
      {
        title: 'Rapunzel',
        cover: require('../assets/images/cover14.jpeg')
      },
      {
        title: 'Rapunzel',
        cover: require('../assets/images/cover15.jpeg')
      },      {
        title: 'Kong fu',
        cover: require('../assets/images/cover16.jpeg')
      },
      {
        title: 'Rapunzel',
        cover: require('../assets/images/cover17.jpeg')
      }
    ]
  },
  { 
    name: 'Em Alta',
    items: [
      {
        title: 'JiuJitsu',
        cover: require('../assets/images/cover18.jpeg')
      },
      {
        title: 'The Good Doctor',
        cover: require('../assets/images/cover19.jpeg')
      },
      {
        title: 'JiuJitsu',
        cover: require('../assets/images/cover20.jpeg')
      },
      {
        title: 'The Good Doctor',
        cover: require('../assets/images/cover21.jpeg')
      },
      {
        title: 'JiuJitsu',
        cover: require('../assets/images/cover22.jpeg')
      },
      {
        title: 'The Good Doctor',
        cover: require('../assets/images/cover23.jpeg')
      },{
        title: 'JiuJitsu',
        cover: require('../assets/images/cover24.jpeg')
      },
      {
        title: 'The Good Doctor',
        cover: require('../assets/images/cover25.jpeg')
      }
    ]
  },
  { 
    name: 'Recomendados para você',
    items: [
      {
        title: 'JiuJitsu',
        cover: require('../assets/images/cover26.jpeg')
      },
      {
        title: 'The Good Doctor',
        cover: require('../assets/images/cover27.jpeg')
      },
      {
        title: 'JiuJitsu',
        cover: require('../assets/images/cover28.jpeg')
      },
      {
        title: 'The Good Doctor',
        cover: require('../assets/images/cover29.jpeg')
      },{
        title: 'JiuJitsu',
        cover: require('../assets/images/cover30.jpeg')
      },
      {
        title: 'The Good Doctor',
        cover: require('../assets/images/cover31.jpeg')
      },{
        title: 'JiuJitsu',
        cover: require('../assets/images/cover32.jpeg')
      },
      {
        title: 'The Good Doctor',
        cover: require('../assets/images/cover33.jpeg')
      },{
        title: 'JiuJitsu',
        cover: require('../assets/images/cover34.jpeg')
      },
      {
        title: 'The Good Doctor',
        cover: require('../assets/images/cover35.jpeg')
      }
    ]
  },
  { 
    name: 'Conteúdos exclusivos',
    items: [
      {
        title: 'JiuJitsu',
        cover: require('../assets/images/cover36.jpeg')
      },
      {
        title: 'The Good Doctor',
        cover: require('../assets/images/cover37.jpeg')
      },
      {
        title: 'JiuJitsu',
        cover: require('../assets/images/cover38.jpeg')
      },
      {
        title: 'The Good Doctor',
        cover: require('../assets/images/cover39.jpeg')
      },
      {
        title: 'JiuJitsu',
        cover: require('../assets/images/cover40.jpeg')
      },
      {
        title: 'The Good Doctor',
        cover: require('../assets/images/cover41.jpeg')
      },
      {
        title: 'JiuJitsu',
        cover: require('../assets/images/cover42.jpeg')
      },
      {
        title: 'The Good Doctor',
        cover: require('../assets/images/cover43.jpeg')
      },
      {
        title: 'JiuJitsu',
        cover: require('../assets/images/cover44.jpeg')
      },
      {
        title: 'The Good Doctor',
        cover: require('../assets/images/cover45.jpeg')
      }
    ]
  },
  { 
    name: 'Filmes para as crianças',
    items: [
      {
        title: 'JiuJitsu',
        cover: require('../assets/images/cover46.jpeg')
      },
      {
        title: 'The Good Doctor',
        cover: require('../assets/images/cover47.jpeg')
      },
      {
        title: 'JiuJitsu',
        cover: require('../assets/images/cover48.jpeg')
      },
      {
        title: 'The Good Doctor',
        cover: require('../assets/images/cover49.jpeg')
      },
      {
        title: 'JiuJitsu',
        cover: require('../assets/images/cover50.jpeg')
      },
      {
        title: 'The Good Doctor',
        cover: require('../assets/images/cover51.jpeg')
      },
      {
        title: 'The Good Doctor',
        cover: require('../assets/images/cover52.jpeg')
      },
      {
        title: 'JiuJitsu',
        cover: require('../assets/images/cover53.jpeg')
      },
      {
        title: 'The Good Doctor',
        cover: require('../assets/images/cover54.jpeg')
      }
    ] 
  }
];

const Home = (props) => {
  const sectionListRef = useRef(null);
  const rowRefs = useRef([]);

  function onItemFocus(e, section, row, item) {
    if (!rowRefs.current) {
      return;
    }
    if (section >= 0 && section < rowRefs.current.length) {
      // Check refs
      const rowRef = rowRefs.current[section];
      if (!rowRef || !sectionListRef) {
        return;
      }
      // Get styles
      const rowsStyle = StyleSheet.flatten(styles.rows);
      const rowItemStyle = StyleSheet.flatten(styles.rowItem);
      const sectionHeader = StyleSheet.flatten(styles.sectionHeader);
      // Get rows width / height
      const rowsWidth = rowsStyle.width;
      const rowsHeight = rowsStyle.height;
      // Get item width / height
      const itemWidth = rowItemStyle.width + rowItemStyle.margin * 2;
      const itemHeight =
        rowItemStyle.height +
        rowItemStyle.margin * 2 +
        sectionHeader.fontSize +
        sectionHeader.marginTop;
      // Get horizontal offset for current item in current row
      const itemLeftOffset = itemWidth * item;
      // Get vertical offset for current row in rows
      const itemTopOffset = itemHeight * section;
      // Center item horizontally in row
      const rowsWidthHalf = rowsWidth / 2;
      if (itemLeftOffset >= rowsWidthHalf) {
        const x = itemLeftOffset - rowsWidthHalf + itemWidth / 2;
        rowRef.scrollTo({x: x, animated: true});
      } else {
        rowRef.scrollTo({x: 0, animated: true});
      }
      // Scroll vertically to current row
      const rowsHeightHalf = rowsHeight / 2;
      if (itemTopOffset >= rowsHeightHalf - itemHeight) {
        sectionListRef.current.scrollToLocation({
          sectionIndex: section,
          itemIndex: 0,
          animated: true,
        });
      } else {
        sectionListRef.current.scrollToLocation({
          sectionIndex: 0,
          itemIndex: 0,
          animated: true,
        });
      }
    }
  }

  function showItems(section, row) {
    //const items = Array.from(Array(ITEMS).keys());
    return SECTIONS[section].items.map((item, index) => {
      const key = 'sectionlist_item_' + section + '.' + row + '.' + item;
      return (
        <FocusableHighlight
          onPress={() => { 
            props.changeContent(false);
          }}
          onFocus={(e) => {
            onItemFocus(e, section, row, item);
          }}
          underlayColor={Style.buttonFocusedColor}
          style={styles.rowItem}
          nativeID={key}
          key={key}>
          <Image style={styles.rowItemImage} source={item.cover} />
          {/* <Text style={styles.text}>{item.title}</Text> */}

        </FocusableHighlight>
      );
    });
  }

  function showRow(sectionItem) {
    const item = sectionItem.item;
    const key = 'sectionlist_row_' + item.section + '.' + item.row;
    return (
      <ScrollView
        ref={(ref) => {
          rowRefs.current[item.section] = ref;
          if (Platform.OS === 'web') {
            let node = findNodeHandle(ref);
            if (node) {
              // Set ScrollView spatial navigation action as focus to avoid scroll on up
              node.style.setProperty('--spatial-navigation-action', 'focus');
            }
          }
        }}
        style={styles.row}
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        nativeID={key}
        key={key}>
        {showItems(item.section, item.row)}
      </ScrollView>
    );
  }

  function renderSectionHeader(sectionHeader) {
    const section = sectionHeader.section;
    return <Text style={styles.sectionHeader}>{section.title}</Text>;
  }

  function getSections() {
    // Load data
    let sections = [];
    for (let i = 0; i < SECTIONS.length; i++) {
      let rows = [];
      for (let j = 0; j < SECTIONS_ROWS; j++) {
        rows.push({section: i, row: j});
      }
      sections.push({
        title: SECTIONS[i].name,
        data: rows,
      });
    }
    return sections;
  }

  // Render
  return (
    <View style={Style.styles.content}>
      <View style={styles.headerHome}></View>
      <SectionList
        ref={sectionListRef}
        style={styles.rows}
        nativeID={'sectionlist'}
        sections={getSections()}
        renderItem={showRow}
        renderSectionHeader={renderSectionHeader}
        keyExtractor={(row) => row.row}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  headerHome: {
    height: Style.px(50),
  },
  rows: {
    height: Style.px(780),
  },
  row: {
    width: '100%',
    height: Style.px(620),
  },
  rowItem: {
    width: Style.px(450),
    height: Style.px(600),
    margin: Style.px(15),
    backgroundColor: Style.buttonUnfocusedColor,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5
  },
  rowItemImage: {
    width: '100%',
    height: '100%'
  },
  sectionHeader: {
    marginTop: Style.px(80),
    marginLeft: Style.px(30),
    color: 'white',
    fontSize: Style.px(60),
  },
  text: {
    fontSize: Style.px(40),
  },
});

export default Home;
