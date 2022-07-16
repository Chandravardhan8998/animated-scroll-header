/* eslint-disable prettier/prettier */
import * as React from 'react';
import { StyleSheet, View } from 'react-native';
import { HeaderScrollView } from 'react-native-scroll-header';

const _renderHeaderContent = () => <View style={styles.headerContent} />;
export default function App() {
  return (
    <HeaderScrollView
      renderHeaderContent={_renderHeaderContent}
      image={{
        uri: "https://images.pexels.com/photos/214574/pexels-photo-214574.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
      }}
    >
      {[...new Array(20)].map((_, i) => {
        return <View
          key={i}
          style={styles.borderBox}
        />
      })}
    </HeaderScrollView>
  );
}
const styles = StyleSheet.create({
  headerContent: {
    width: "100%",
    height: 80,
    backgroundColor: "#ff000050"
  },
  borderBox: {
    height: 100,
    width: '100%',
    backgroundColor: "#171717",
    borderBottomWidth: 2,
    borderBottomColor: '#fff'
  }
})