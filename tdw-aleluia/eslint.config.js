import js from '@eslint/js';
import pluginReact from 'eslint-plugin-react';

export default [
  js.configs.recommended,
  {
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