module.exports = {
  testMatch: ['<rootDir>/src/tests/jest/**/*.test.{js,ts,jsx,tsx}'],
  testEnvironment: 'jsdom',
  moduleNameMapper: {
    '^@components/(.*)$': '<rootDir>/src/components/$1',
  },
  moduleFileExtensions: ['js', 'jsx', 'ts', 'tsx', 'json', 'node'],
};
