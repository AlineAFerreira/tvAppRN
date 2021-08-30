import React, { useRef } from 'react';
import _ from 'lodash';
import {
  StyleSheet,
  View,
  ScrollView,
  SectionList,
  Text,
  Image,
  Platform,
  findNodeHandle,
} from 'react-native';
import Style from '../styles/style';
import FocusableHighlight from './focusableHighlight';

const SECTIONS = ['Novidades da Semana', 'Filmes de Ação', 'Em Alta', 'Recomendados para você', 'Conteúdos exclusivos', 'Filmes para as crianças'];
const SECTIONS_ROWS = 1;
const ITEMS = 6;

const ARRAY_IMAGES = [
  'https://d37wmy56xprd2c.cloudfront.net/fit-in/170x255/NWYyYTA3N2ExOWJmMzEwMDA4MWI5MTg5_11032_COVER_VERTICAL_1000x1500.jpeg',
  'https://d37wmy56xprd2c.cloudfront.net/fit-in/170x255/dGhpc193YXlfdXBfc2VyaWU_11032_COVER_VERTICAL_300x450.jpeg',
  'https://d37wmy56xprd2c.cloudfront.net/fit-in/170x255/NWEyYTg1NmU4Y2U4OGQwMDAxODRhYjE3_11001_COVER_VERTICAL_1000x1500.jpeg',
  'https://d37wmy56xprd2c.cloudfront.net/fit-in/170x255/NWEyZTk1ZmE4MWQ0ZTMwMDAxMmMyOTQ2_11001_COVER_VERTICAL_1000x1500.jpeg',
  'https://d37wmy56xprd2c.cloudfront.net/fit-in/170x255/NWNlYmQyZjAxZGFmM2E4MTE1ODFjNjU1X3Nlcmll_11001_COVER_VERTICAL_1000x1500.jpeg',
  'https://d37wmy56xprd2c.cloudfront.net/fit-in/170x255/NWU5OWE2MGM5NDY2MTgwNmYyMjEyMTJk_11032_COVER_VERTICAL_1000x1500.jpeg',
  'https://d37wmy56xprd2c.cloudfront.net/fit-in/170x255/NWEyZTk1ZjMwNGI3YTMwMDAxNWU2NWVh_11001_COVER_VERTICAL_1000x1500.jpeg',
  'https://d37wmy56xprd2c.cloudfront.net/fit-in/170x255/NWU5OWE2MGM5NDY2MTgwNmYyMjEyMTJk_11032_COVER_VERTICAL_1000x1500.jpeg',
  'https://d37wmy56xprd2c.cloudfront.net/fit-in/170x255/NjExNTM0NTVmMWI0MDIwMDBkMDkyYjI5_11032_COVER_VERTICAL_1000x1500.jpeg',
  'https://d37wmy56xprd2c.cloudfront.net/fit-in/170x255/c3RhdGlvbl8xOV9zZXJpZQ_11032_COVER_VERTICAL_300x450.jpeg',
  'https://d37wmy56xprd2c.cloudfront.net/fit-in/170x255/ZGVzYWZpb19zb2JfZm9nb19zZXJpZQ_11032_COVER_VERTICAL_300x450.jpeg',
  'https://d37wmy56xprd2c.cloudfront.net/fit-in/170x255/NWE1MzBlMGRiM2Y4N2UwMDAxZTBjOGJk_11001_COVER_VERTICAL_800x1200.jpeg',
  'https://d37wmy56xprd2c.cloudfront.net/fit-in/170x255/NWE3NTU0OWE2NDRlMTEwMDAxZDcyNzVm_11032_COVER_VERTICAL_1000x1500.jpeg',
  'https://d37wmy56xprd2c.cloudfront.net/fit-in/170x255/NjAyMzQwZGY0OWFjZjcwMDA4YjI4MDJh_11032_COVER_VERTICAL_1000x1500.jpeg',
  'https://d37wmy56xprd2c.cloudfront.net/fit-in/170x255/NWFmZTJhMmUwYTY0OWUzZDc0ZWRkN2Ix_11032_COVER_VERTICAL_800x1200.jpeg',
  'https://d37wmy56xprd2c.cloudfront.net/fit-in/170x255/NWJhYTE4YmUyYWRlNDM4YmM1M2UyNWM2_11032_COVER_VERTICAL_1280x1931.jpeg',
  'https://d37wmy56xprd2c.cloudfront.net/fit-in/170x255/NWQyMTg2Nzc3YmQ1OWRhYjkyOTQ5ZTlj_11032_COVER_VERTICAL_1000x1500.jpeg'
];

const ARRAY_HIGHLIGTHS = [
  'https://img.comunidades.net/fil/filmesdeherois/batman_cavaleiro_trevas_2008_02.jpg',
  'https://www.etonline.com/sites/default/files/images/2019-08/BLACKWIDOW_LOGO_FINISH_LAYERED.jpg',
  'https://wallpaperaccess.com/full/1512312.jpg',
  'https://hqrock.files.wordpress.com/2011/12/poster-december-01.jpg',
  'https://i.redd.it/ws41k3syqmq31.jpg',
  'https://i.redd.it/prrimgax5fmx.jpg'
]

const SectionListDemo = (props) => {
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

  function urlPaths(num) {
    const type = num === 1 ? ARRAY_IMAGES : ARRAY_HIGHLIGTHS;
    return _.sample(type)
  }

  function showItems(section, row) {
    const items = Array.from(Array(ITEMS).keys());
    return items.map((item) => {
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
          styleFocused={{borderWidth: 2, borderStyle: 'solid', borderColor:'#FFF'}}
          style={styles.rowItem}
          nativeID={key}
          key={key}>
          <Image style={styles.rowItemImage} source={{
          uri: urlPaths(1)}} />
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
        title: SECTIONS[i]
        ,
        data: rows,
      });
    }
    return sections;
  }

  // Render
  return (
    <View style={styles.right}>
      <View style={styles.content}>
        <Text style={styles.headerText}> { props.page }</Text>
        <View style={styles.highlights}>
          <FocusableHighlight
            style={styles.highlightItem}
            onPress={()=>{ props.changeContent(false); }}>
            <Image 
              style={styles.imageHighlight}
              source={{ uri: urlPaths(2)}} 
            />
          </FocusableHighlight>
        </View>
        
        <SectionList
          ref={sectionListRef}
          
          nativeID={'sectionlist'}
          sections={getSections()}
          renderItem={showRow}
          renderSectionHeader={renderSectionHeader}
          keyExtractor={(row) => row.row}
          showsVerticalScrollIndicator={false}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  right: {
    width: 1920,
    height: 1080,  
    backgroundColor: '#161819'  
  },
  content: {
    height: '100%',
    marginLeft: 30
  },
  headerText: {
    fontSize: Style.px(70),
    textAlign: 'left', 
    alignSelf: 'stretch',
    color: '#FFF',
    marginTop: 30,
    fontWeight: 'bold',
    textTransform: 'uppercase'
  },
  highlights: {
    width: 1620,
    height: 200,
    flex: 1,
    flexDirection: 'column',
    flexWrap: 'wrap',
    marginTop: 20
  },
  highlightItem: {
    width: '100%',
    overflow: 'hidden',
    borderWidth: 2,
    borderStyle: 'solid',
    borderRadius: 8
  },
  imageHighlight: {
    height: 200,
    borderRadius: 8
  },
  rows: {
    width: Style.px(3250),
    height: '50%',
    flex: 1,
  },
  row: {
    width: '100%',
    height: Style.px(510),
  },
  rowItem: {
    width: Style.px(300),
    height: Style.px(500),
    margin: Style.px(10),
    backgroundColor: Style.buttonUnfocusedColor,
    borderWidth: 2,
    borderStyle: 'solid',
    borderRadius: 5,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  rowItemImage: {
    width: '100%',
    height: '100%'
  },
  sectionHeader: {
    marginTop: Style.px(80),
    marginLeft: Style.px(10),
    color: 'white',
    fontSize: Style.px(60),
  },
  text: {
    fontSize: Style.px(40),
  },
});

export default SectionListDemo;
