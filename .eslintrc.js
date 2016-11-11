module.exports = {
  "env": {
    "node": true,
    "browser": true,
    "commonjs": true,
    "es6": true,
    "jest": true,
  },
  "extends": [
    "eslint:recommended",
    "plugin:import/errors",
    "plugin:react/recommended",
  ],
  "parserOptions": {
    "ecmaFeatures": {
      "experimentalObjectRestSpread": true,
      "jsx": true
    },
    "sourceType": "module"
  },
  "plugins": [
    "react",
  ],
  "settings": {
    "import/resolver": "webpack",
    "react": {
      "createClass": "createClass",
      "pragma": "React",
      "version": "15.0",
    }
  },
  "rules": {
    "comma-dangle": ["error", "always-multiline"],
    "indent": ["error", 2],
    "object-curly-spacing": ["error", "always"],
    "quotes": ["error", "single"],
    "semi": ["error", "never"],
    // React plugin rules
    "react/jsx-boolean-value": ["error", "always"],
    "react/jsx-closing-bracket-location": ["error", {
      "selfClosing": "after-props",
    }],
    "react/jsx-curly-spacing": [2, "always"],
    "react/jsx-first-prop-new-line": ["error", "multiline"],
    "react/jsx-indent": ["error", 2],
    "react/jsx-indent-props": ["error", 2],
    "react/jsx-no-literals": 1,
    "react/jsx-sort-props": 2,
    "react/jsx-space-before-closing": ["error", "always"],
  }
};
