module.exports = {
  testMatch: [
    '<rootDir>/src/**/*.test.ts',
  ],
  collectCoverageFrom: [
    '<rootDir>/src/domain/data/**/.ts',
  ],
  transform: { '\\.ts$': ['ts-jest'] },
  setupFiles: ['<rootDir>/scripts/loadReflectMetadata.ts'],
};
