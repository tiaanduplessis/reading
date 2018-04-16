module.exports = {
  parserOptions: {
    ecmaVersion: 8,
    ecmaFeatures: {
      experimentalObjectRestSpread: true,
      jsx: true
    },
    sourceType: "module"
  },
  env: {
    es6: true,
    browser: true,
    node: true
  },
  plugins: ["import", "promise"],
  globals: {
    document: false,
    navigator: false,
    window: false,
    global: false
  },
  rules: {
    // Arrow functions
    "arrow-body-style": ["error", "as-needed"], // http://eslint.org/docs/rules/arrow-body-style
    "arrow-parens": ["error", "as-needed"], // http://eslint.org/docs/rules/arrow-parens
    "arrow-spacing": ["error", { before: true, after: true }] // https://eslint.org/docs/rules/arrow-spacing
  }
};
