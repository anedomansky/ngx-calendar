export default {
  preset: 'jest-preset-angular',
  setupFilesAfterEnv: ['<rootDir>/setup-jest.ts'],
  testEnvironment: 'jsdom',
  testPathIgnorePatterns: [
    '/node_modules/',
    '/cypress/',
    '/projects/anedomansky/ngx-calendar/src/gen/',
  ],
  coverageDirectory: 'coverage/',
  coveragePathIgnorePatterns: [
    '/node_modules/',
    '/cypress/',
    '/dist/',
    '.html',
  ],
  moduleNameMapper: {
    '@anedomansky/ngx-calendar':
      '<rootDir>/dist/anedomansky/ngx-calendar/fesm2022/anedomansky-ngx-calendar.mjs',
  },
};
