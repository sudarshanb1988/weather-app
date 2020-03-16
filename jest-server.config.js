module.exports = {
  verbose: true,
  testEnvironment: 'node',
  collectCoverage: true,
  moduleNameMapper: {
    fixtures: '<rootDir>/server/test/fixtures/'
  },
  setupFilesAfterEnv: [
    '<rootDir>/server/test/testSetup.js'
  ]
};
