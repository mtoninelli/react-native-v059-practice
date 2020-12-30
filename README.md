## INSTALL REACT NATIVE 0.59

`npx react-native-cli init rnEge05910 --version 0.59.10`

https://reactnavigation.org/docs/3.x/getting-started
`yarn add react-navigation@^3.0.0`
`yarn add react-native-gesture-handler react-native-reanimated`
`react-native link react-native-reanimated`
`react-native link react-native-gesture-handler`

`yarn add react-native-screens`

## TESTING

https://github.com/callstack/react-native-testing-library (limitations for v<0.60)
https://testing-library.com/docs/react-native-testing-library/intro/
`yarn add --dev @testing-library/react-native`

Interesting articles:
https://kentcdodds.com/blog/testing-implementation-details

## CLEAR CACHE

`npx react-native start --reset-cache`

1. Clear watchman watches: `watchman watch-del-all`.
2. Delete the `node_modules` folder: `rm -rf node_modules && npm install`.
3. Reset Metro Bundler cache: `rm -rf /tmp/metro-bundler-cache-*` or `npm start -- --reset-cache`.
4. Remove haste cache: `rm -rf /tmp/haste-map-react-native-packager-*`.
