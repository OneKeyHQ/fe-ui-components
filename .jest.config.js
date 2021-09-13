module.exports = {
  verbose: true,

  testEnvironment: 'jsdom',

  setupFilesAfterEnv: ['./tests/setup.ts'],

  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx'],

  testPathIgnorePatterns: ['/build/'],

  transform: {
    '^.+\\.tsx?$': ['babel-jest', { configFile: './tests/.babelrc.js' }],
  },

  testRegex: '.*\\.test\\.(j|t)sx?$',

  collectCoverageFrom: [
    'src/components/**/*.{ts,tsx}',
    '!src/components/**/*types.{ts,tsx}',
    '!src/stories/*stories.{ts,tsx}',
    '!src/components/Provider/*',
    '!src/components/index.ts',
    '!src/components/utils/**/*',
    '!src/components/web3/**/*',
    '!src/components/Intl/**/*',
    '!src/components/Theme/**/*',
    '!src/components/locales/**/*',
  ],

  moduleNameMapper: {
    'tests/(.*)$': '<rootDir>/tests/$1',
    components: '<rootDir>/src/components/index.ts',
  },
}
