export default {
  "env": {
    "browser": true,
    "es2021": true,
    "commonjs": true,
    "es6": true,
    "node": true
  },
  "extends": [
    "react-app",
    "eslint:recommended",
    "plugin:react/recommended",
  ],
  "overrides": [
  ],
  "parserOptions": {
    "requireConfigFile": false,
    "ecmaVersion": "latest",
    "sourceType": "module"
  },
  "plugins": [
    "react"
  ],
  "rules": {
    "prettier/prettier": ["error", { "singleQuote": true }]
  },
  "parser": "@babel/eslint-parser",
}