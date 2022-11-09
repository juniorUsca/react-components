module.exports = {
  "env": {
    "browser": true,
    "es6": true,
    "node": true
  },
  "parserOptions": {
    "ecmaVersion": 2020,
    "sourceType": "module"
  },
  "ignorePatterns": [
    ".eslintrc.js"
  ],
  "plugins": [
    "simple-import-sort"
  ],
  "overrides": [],
  "extends": [
    "eslint:recommended",
    "plugin:import/recommended"
  ],
  "rules": {
    "simple-import-sort/exports": "error",
    "simple-import-sort/imports": "error"
  },
  "settings": {}
};