const { FlatCompat } = require('@eslint/eslintrc');
const js = require('@eslint/js');
const join = require('path').join;
const util = require('util');
const nxEslintPlugin = require('@nx/eslint-plugin');
const eslintPluginCypress = require('eslint-plugin-cypress');
const eslintPluginImport = require('eslint-plugin-import');
const eslintPluginJest = require('eslint-plugin-jest');
const rxjs = require('@smarttools/eslint-plugin-rxjs');
const eslintPluginRxjsAngular = require('eslint-plugin-rxjs-angular-updated');
const eslintPluginSortClassMembers = require('eslint-plugin-sort-class-members');
const eslintPluginTypescript = require('@typescript-eslint/eslint-plugin');
const stylisticJs = require('@stylistic/eslint-plugin-js');

const compat = new FlatCompat({
  baseDirectory: __dirname,
  recommendedConfig: js.configs.recommended,
});

module.exports = [
  {
    ignores: ['**/dist'],
  },
  {
    plugins: {
      '@smarttools/rxjs': rxjs,
    },
  },
  ...compat
    .config({
      extends: ['./tools/eslintrc.js'],
    })
    .map((config) => ({
      ...config,
      files: ['**/*.ts'],
      languageOptions: {
        parser: require('@typescript-eslint/parser'),
        parserOptions: {
          project: join(__dirname, './tsconfig.base.json'),
        },
      },
      rules: {
        ...config.rules,
      },
    })),
];
