module.exports = {
  preset: 'jest-expo',
  verbose: true,
  setupFilesAfterEnv: ['./src/setup.ts'],
  testMatch: ['<rootDir>/src/__tests__/**/**.test.js'],
  transformIgnorePatterns: [
    'node_modules/(?!(.*(jest-)?react-native|.*@react-native(-community)?)|.*expo|.*@react-navigation/.*|.*react-native-svg)'
  ]
}
