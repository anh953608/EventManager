module.exports = {
  getTransformModulePath() {
    return require.resolve('react-native-typescript-transformer');
  },
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
};
