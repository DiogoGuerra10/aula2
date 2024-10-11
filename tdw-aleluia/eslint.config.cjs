import js from '@eslint/js';
import pluginReact from 'eslint-plugin-react';
import babelParser from '@babel/eslint-parser';

export default [
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
      globals: {
        // Definindo variáveis globais que você está usando
        module: 'readonly',
        test: 'readonly',
        expect: 'readonly',
        // Adicione mais globais aqui conforme necessário
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
