/* eslint-disable prettier/prettier */
import * as React from 'react';
import { Dimensions, Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { HeaderScrollView } from 'react-native-scroll-header';

const headerImage = 'https://cdn.vox-cdn.com/thumbor/DMXD2zLif49j6IP2i3Avda2Cyl0=/1400x1400/filters:format(jpeg)/cdn.vox-cdn.com/uploads/chorus_asset/file/22312759/rickroll_4k.jpg'
const headerImage2 = 'https://images.squarespace-cdn.com/content/v1/5b788d28697a98e17a6d4c7a/b83f0eab-7dd6-4e9b-83a1-13139ac2a03b/rickroll+cropped.png'
const headerImage3 = 'https://nerdist.com/wp-content/uploads/2021/07/Rick-Astley-Rickroll-featured.jpg'

const _renderHeaderContent = () => <View style={styles.headerContent} >
  <Text
    style={styles._renderHeaderContent}
  >Rick Astly's RickRoll</Text>
</View>;
const _renderScrollHeader = () => {
  return <View
    style={styles.renderScrollHeader}
  >
    <Text
      style={styles.headerTitle}
    >Never gonna give you up.</Text>
  </View>
}

export default function App() {

  const scrollRef = React.useRef<ScrollView>(null)
  const scrollDown = () => {
    scrollRef.current?.scrollTo({
      y: 0, animated: true
    })
  }
  return (
    <React.Fragment>
      <HeaderScrollView
        ref={scrollRef}
        renderImageItem={_renderHeaderContent}
        image={{
          uri: headerImage
        }}
        renderHeader={_renderScrollHeader}
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
      <TouchableOpacity
        onPress={scrollDown}
        style={styles.floatingButton}
      >
        <Image
          source={{ uri: "https://cdn-icons.flaticon.com/png/512/4655/premium/4655143.png?token=exp=1659376323~hmac=e49bfc917a45046225192993b6c409c8" }}
          style={styles.downImage}
        />
      </TouchableOpacity>
    </React.Fragment>
  );
}
const styles = StyleSheet.create({
  headerContent: {
    width: "100%",
    height: 100,
    backgroundColor: "#372f23"
  },
  borderBox: {
    height: 100,
    width: '100%',
    backgroundColor: "#cb3618",
  },
  _renderHeaderContent: {
    fontWeight: "700",
    fontSize: 16,
    color: "#b6bfe1",
    padding: 10,
    textAlign: "center"
  },
  renderScrollHeader: {
    height: 70,
    width: Dimensions.get('screen').width,
    backgroundColor: "#955c46",
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
  },
  floatingButton: { width: 50, height: 50, backgroundColor: "#4b4054", borderRadius: 25, justifyContent: "center", alignItems: "center", position: "absolute", bottom: 50, right: 20 },
  downImage: {
    width: 20, height: 20, tintColor: "#b6bfe1"
  }
})