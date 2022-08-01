# react-native-scroll-header

Animated Header with Image & ScrollView

## Installation

```sh
npm install react-native-scroll-header
```

### [examples/src](https://github.com/Chandravardhan8998/animated-scroll-heade/blob/master/example/src)

![](https://github.com/Chandravardhan8998/animated-scroll-header/blob/master/example/example.gif?raw=true)

## Usage

```js
import { HeaderScrollView } from 'react-native-scroll-header';

// ...
const _renderHeaderContent = () => (
  <View style={styles.headerContent}>{/*child here*/}</View>
);

const _renderScrollHeader = () => {
  return <View style={styles.renderHeader}>{/*child here*/}</View>;
};
//...
<HeaderScrollView
  renderImageItem={_renderHeaderContent}
  image={{
    uri: headerImage,
  }}
  renderHeader={_renderScrollHeader}
>
  //...
</HeaderScrollView>;
```

## Props

| Prop            | Type               | Required | Description                                                 |
| --------------- | ------------------ | -------- | ----------------------------------------------------------- |
| image           | `image` or `uri`   | true     | image to render over header                                 |
| imageStyle      | image style object | false    | style object for image                                      |
| containerStyle  | image style object | false    | style object for render header container                    |
| renderImageItem | function           | false    | render item over header image                               |
| renderHeader    | function           | false    | render header over scrollview with animated sticky behavior |

## Contributing

See the [contributing guide](CONTRIBUTING.md) to learn how to contribute to the repository and the development workflow.

## License

MIT

---

Made with [create-react-native-library](https://github.com/callstack/react-native-builder-bob)
