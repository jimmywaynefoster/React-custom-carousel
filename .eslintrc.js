module.exports = {
  env: {
    worker: true,
    node: true,
    browser: true,
  },
  globals: {
    JSX: true,
  },
  root: true,
  parser: "@typescript-eslint/parser",
  plugins: ["@typescript-eslint", "react-hooks"],
  extends: ["airbnb", "airbnb/hooks", "prettier"],
  rules: {
    "import/extensions": 0,
    "react/jsx-filename-extension": [
      1,
      {
        extensions: [".tsx", ".jsx"],
      },
    ],
    "import/prefer-default-export": 0,
  },
  settings: {
    "import/resolver": {
      node: {
        extensions: [".js", ".jsx", ".ts", ".tsx"],
      },
    },
  },
};
