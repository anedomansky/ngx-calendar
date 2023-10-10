import baseConfig from './jest.config';

export default {
  ...baseConfig,
  roots: ['<rootDir>/projects/ngx-calendar-app/src'],
  modulePathIgnorePatterns: ['<rootDir>/projects/anedomansky/ngx-calendar'],
};
