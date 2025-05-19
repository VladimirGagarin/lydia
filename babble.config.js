// babel.config.js
module.exports = function (api) {
  api.cache(true);
  return {
    presets: ['babel-preset-expo'], // or ['module:metro-react-native-babel-preset'] for bare RN
    plugins: ['react-native-reanimated/plugin'],
  };
};
