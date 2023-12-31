const path = require("path");

module.exports = {
  extends: path.join(__dirname, "../../../.eslintrc.js"),
  ignorePatterns: ["coverage/**/*", "src/gen/**/*"],
  rules: {
    "@angular-eslint/component-selector": [
      "error",
      {
        prefix: "ngx-calendar",
        style: "kebab-case",
        type: "element",
      },
    ],
    "@angular-eslint/directive-selector": [
      "error",
      {
        prefix: "ngx-calendar",
        style: "camelCase",
        type: "attribute",
      },
    ],
  },
  parserOptions: {
    project: path.join(__dirname, "../../../tsconfig.json"),
  },
};
