module.exports = {
  env: {
    browser: true,
    es6: true
  },
  extends: ["plugin:jest/recommended", "airbnb"],
  globals: {
    Atomics: "readonly",
    SharedArrayBuffer: "readonly"
  },
  parserOptions: {
    ecmaFeatures: {
      jsx: true
    },
    ecmaVersion: 2018,
    sourceType: "module"
  },
  plugins: ["react", "jest"],
  rules: {
    "react/jsx-filename-extension": [1, { extensions: [".js", ".jsx"] }],
    "jest/no-disabled-tests": "warn",
    "jest/no-focused-tests": "error",
    "jest/no-identical-title": "error",
    "jest/prefer-to-have-length": "warn",
    "jest/valid-expect": "error",
    "react/jsx-filename-extension": [1, { extensions: [".js", ".jsx"] }]
  },
  settings: {
    "import/resolver": {
      node: {
        paths: ["src"]
      }
    }
  }
};
