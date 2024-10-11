const js = require('@eslint/js');
const pluginReact = require('eslint-plugin-react');
const babelParser = require('@babel/eslint-parser');

module.exports = [
  js.configs.recommended,
  {
    languageOptions: {
      parser: babelParser,
      parserOptions: {
        ecmaVersion: 2020,
        sourceType: 'module',
        ecmaFeatures: {
          jsx: true, // Habilita a análise de JSX
        },
      },
    },
    files: ['**/*.js', '**/*.jsx'], // Adapte conforme seu projeto
    rules: {
      'no-unused-vars': 'warn',
      'react/react-in-jsx-scope': 'off', // Desativa a necessidade do import de React no JSX (React 17+)
    },
  },
  {
    plugins: {
      react: pluginReact,
    },
  },
];
