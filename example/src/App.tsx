/* eslint-disable prettier/prettier */
import * as React from 'react';
import { Dimensions, Image, StyleSheet, Text, View } from 'react-native';
import { HeaderScrollView } from 'react-native-scroll-header';

const headerImage = 'https://c4.wallpaperflare.com/wallpaper/611/838/413/spiderman-hd-4k-superheroes-wallpaper-preview.jpg'
const headerImage2 = 'https://c4.wallpaperflare.com/wallpaper/857/67/782/spider-man-homecoming-2017-wallpaper-preview.jpg'
const headerImage3 = 'https://c4.wallpaperflare.com/wallpaper/576/838/565/spiderman-4k-artwork-hd-wallpaper-preview.jpg'

const _renderHeaderContent = () => <View style={styles.headerContent} >
  <Text
    style={styles._renderHeaderContent}
  >Watch full movie on Disney+Hotstar{'\n'}</Text>
</View>;
const _renderScrollHeader = () => {
  return <View
    style={styles.renderScrollHeader}
  >
    <Text
      style={styles.headerTitle}
    >Spider Man</Text>
  </View>
}
export default function App() {
  return (
    <HeaderScrollView
      renderHeaderContent={_renderHeaderContent}
      image={{
        uri: headerImage
      }}
      renderScrollHeader={_renderScrollHeader}
    >
      <Image
        source={{
          uri: headerImage2
        }}
        style={styles.flexImage}
      />
      <Image
        source={{
          uri: headerImage3
        }}
        style={styles.flexImage}
      />
    </HeaderScrollView>
  );
}
const styles = StyleSheet.create({
  headerContent: {
    width: "100%",
    height: 100,
    backgroundColor: "#e0b02b"
  },
  borderBox: {
    height: 100,
    width: '100%',
    backgroundColor: "#cb3618",
  },
  _renderHeaderContent: {
    fontWeight: "700",
    fontSize: 14,
    color: "#5d6e97",
    padding: 10
  },
  renderScrollHeader: {
    height: 70,
    width: Dimensions.get('screen').width,
    backgroundColor: "#872b2f",
    justifyContent: "center", alignItems: "center"
  },
  headerTitle: {
    fontWeight: "700",
    fontSize: 20,
    color: "#fff"
  },
  flexImage: {
    height: 500,
    width: '100%',
    resizeMode: "cover"
  }
})