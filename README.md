# react-native-scroll-header

Animated Header with Image & ScrollView

## Installation

```sh
npm install react-native-scroll-header
```

## Usage

```js
import { HeaderScrollView } from 'react-native-scroll-header';

// ...
const _renderHeaderContent = () => (
  <View style={styles.headerContent}>//...</View>
);

const _renderScrollHeader = () => {
  return <View style={styles.renderScrollHeader}>//...</View>;
};
//...
<HeaderScrollView
  renderHeaderContent={_renderHeaderContent}
  image={{
    uri: headerImage,
  }}
  renderScrollHeader={_renderScrollHeader}
>
  //...
</HeaderScrollView>;
```

## Contributing

See the [contributing guide](CONTRIBUTING.md) to learn how to contribute to the repository and the development workflow.

## License

MIT

---

Made with [create-react-native-library](https://github.com/callstack/react-native-builder-bob)
