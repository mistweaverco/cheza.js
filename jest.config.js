module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'jsdom',
  testPathIgnorePatterns: ['dist'],
  coveragePathIgnorePatterns: ['dist'],
  modulePathIgnorePatterns: ['dist'],
  testRegex: '.*\\.test\\.ts$',
  setupFilesAfterEnv: ['<rootDir>/jest.setup.ts'],
  moduleNameMapper: {
    '^(.+\\.hbs)\\?raw$': '$1',
    '^.+\\.scss$': '@mistweaverco/jest-svg-transformer'
  },
  transform: {
    '^.+\\.svg$': '@mistweaverco/jest-svg-transformer',
    '^.+\\.hbs$': '@mistweaverco/jest-vite-raw-transformer',
    '^.+\\.mjs$': 'babel-jest'
  }
}
