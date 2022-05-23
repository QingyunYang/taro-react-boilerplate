/**
 * @type {import('@types/eslint').Linter.BaseConfig}
 */
const config = {
  extends: ['taro/react', 'plugin:prettier/recommended', 'plugin:storybook/recommended'],
  rules: {
    'react/jsx-uses-react': 'off',
    'react/react-in-jsx-scope': 'off',
  },
}

module.exports = config
