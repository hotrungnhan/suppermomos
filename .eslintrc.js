module.exports = {
  env: {
    browser: true,
    node: true,
  },
  globals: {
    React: true,
  },
  ignorePatterns: ['./graphql/**/*', './stories/**/*'],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 2020,
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
    },
  },
  settings: {
    react: {
      version: 'detect',
    },
    'import/resolver': {
      node: {
        paths: ['.'],
        extensions: ['.js', '.jsx', '.ts', '.tsx'],
      },
    },
  },
  extends: [
    'next/core-web-vitals',
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:tailwindcss/recommended',
    'plugin:prettier/recommended',
  ],
  plugins: [
    'react-hooks',
    'import',
    'tailwindcss',
    'simple-import-sort',
    'eslint-plugin-promise',
    'prettier',
    'hooks',
  ],
  rules: {
    'space-before-blocks': 'error',
    'react/react-in-jsx-scope': 'off',
    'react-hooks/rules-of-hooks': 'error',
    'react-hooks/exhaustive-deps': 'warn',
    'import/no-unresolved': 'error',
    'import/named': ['error'],
    'import/namespace': 'error',
    'import/default': 'error',
    'import/export': 'error',
    'import/order': [
      'error',
      {
        groups: ['builtin', 'external', 'parent', 'sibling', 'index'],
        alphabetize: {
          order: 'asc',
        },
      },
    ],
    'import/no-anonymous-default-export': 'off',
    'tailwindcss/classnames-order': 'warn',
    'tailwindcss/enforces-negative-arbitrary-values': 'warn',
    'tailwindcss/enforces-shorthand': 'warn',
    'tailwindcss/no-arbitrary-value': 'off',
    'react/no-unknown-property': [
      'error',
      {
        ignore: ['css', 'tw'],
      },
    ],
    'tailwindcss/no-custom-classname': [
      'warn',
      {
        config: 'tailwind.config.cjs',
        cssFiles: ['./node_modules/tw-elements/dist/css/index.min.css'],
      },
    ],
    'tailwindcss/no-contradicting-classname': 'error',
    'prettier/prettier': 'error',
    'no-unused-vars': 'warn',
    'promise/no-return-wrap': 'error',
    'promise/param-names': 'error',
    'promise/no-native': 'off',
    'promise/no-nesting': 'warn',
    'promise/no-promise-in-callback': 'warn',
    'promise/no-callback-in-promise': 'warn',
    'promise/avoid-new': 'warn',
    'promise/no-new-statics': 'error',
    'promise/no-return-in-finally': 'warn',
    'promise/valid-params': 'warn',
    'hooks/sort': [
      'warn',
      {
        groups: [
          'useReducer',
          'useContext',
          'useState',
          'useRef',
          'useMemo',
          'useAnalytics',
          'useFragment',
          'useDispatch',
          'useCallback',
          'useEffect',
        ],
      },
    ],
  },
}
