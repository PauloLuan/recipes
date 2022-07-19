module.exports = function (api) {
  api.cache(true)
  return {
    presets: ['babel-preset-expo'],
    plugins: [
      'react-native-reanimated/plugin',
      [
        'module-resolver',
        {
          root: '.',
          alias: {
            '@assets': ['./src/assets'],
            '@components': ['./src/components'],
            '@constants': ['./src/constants'],
            '@global': ['./src/global'],
            '@hooks': ['./src/hooks'],
            '@navigation': ['./src/navigation'],
            '@screens': ['./src/screens'],
            '@redux': ['./src/redux'],
            '@types': ['./src/types']
          }
        }
      ]
    ]
  }
}
