module.exports = {
  extends: ["eslint:recommended", "plugin:@typescript-eslint/recommended"],
  parser: "@typescript-eslint/parser",
  plugins: ["@typescript-eslint"],
  root: true,
  "env": {
    "browser": true,
    "es2021": true,
    "node": true
  },
  "rules": {
    "semi": ["error", "always"],
    "quotes": ["error", "double"],
    "eqeqeq": 0,
    "curly": "error",
    "@typescript-eslint/no-var-requires": 0,
    "@typescript-eslint/no-explicit-any": 0
  }

};