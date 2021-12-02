module.exports = {
  env: {
    es6: true,
    node: true,
    mocha: true,
  },
  extends: "eslint:recommended",
  parserOptions: {
    sourceType: "module",
  },
  rules: {
    indent: ["error", 2, { SwitchCase: 1 }],
    semi: 2,
  },
};
