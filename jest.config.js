module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'jsdom',
  transform: {
    '^.+\\.svg$': '@mistweaverco/jest-svg-transformer'
  }
}
