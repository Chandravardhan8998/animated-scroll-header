# react-native-scroll-header

Animated Header with ScrollView

## Installation

```sh
npm install react-native-scroll-header
```

## Usage

```js
import { HeaderScrollView } from 'react-native-scroll-header';

// ...
const _renderHeaderContent = () => <View style={styles.headerContent} />;

<HeaderScrollView
  renderHeaderContent={_renderHeaderContent}
  image={{
    uri: 'https://images.pexels.com/photos/214574/pexels-photo-214574.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
  }}
>
  // render child here
</HeaderScrollView>;
```

## Contributing

See the [contributing guide](CONTRIBUTING.md) to learn how to contribute to the repository and the development workflow.

## License

MIT

---

Made with [create-react-native-library](https://github.com/callstack/react-native-builder-bob)
