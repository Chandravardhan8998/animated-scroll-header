# react-native-scroll-header

Animated Header with Flatlist

## Installation

```sh
npm install react-native-scroll-header
```

## Usage

```js
import { HeaderScrollView } from 'react-native-scroll-header';

// ...

<HeaderScrollView
  renderHeaderContent={() => (
    <View
      style={{
        width: '100%',
        height: 80,
        backgroundColor: '#ff000050',
      }}
    ></View>
  )}
  image={{
    uri: 'https://images.pexels.com/photos/214574/pexels-photo-214574.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
  }}
></HeaderScrollView>;
```

## Contributing

See the [contributing guide](CONTRIBUTING.md) to learn how to contribute to the repository and the development workflow.

## License

MIT

---

Made with [create-react-native-library](https://github.com/callstack/react-native-builder-bob)
