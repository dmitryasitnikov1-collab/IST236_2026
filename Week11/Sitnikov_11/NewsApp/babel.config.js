module.exports = function (api) {
  api.cache(true);
  return {
    presets: ['babel-preset-expo'], // Use the babel-preset-expo preset, which includes a set of Babel plugins and configurations optimized for Expo projects. This preset allows you to use modern JavaScript features and React syntax while ensuring compatibility with the Expo environment.
    plugins: ['react-native-reanimated/plugin'], // Include the react-native-reanimated plugin, which is necessary for using the React Native Reanimated library. This plugin enables support for the advanced animation features provided by Reanimated, allowing you to create smooth and performant animations in your React Native app.
  };
};