module.exports = {
  root: true,

  parser: '@typescript-eslint/parser',

  env: {
    node: true,
  },

  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: 'tsconfig.json',
    tsconfigRootDir: __dirname,
  },

  plugins: ['@typescript-eslint/eslint-plugin'],

  extends: [
    'plugin:@typescript-eslint/recommended',
    // 'plugin:prettier/recommended',
  ],

  ignorePatterns: ['dist', '.eslintrc.js'],

  rules: {
    'no-var': 'warn',
    '@typescript-eslint/no-explicit-any': 'warn',
    '@typescript-eslint/no-unused-vars': 'warn', 
    // '@typescript-eslint/explicit-module-boundary-types': 'warn',
    '@typescript-eslint/interface-name-prefix': 'off',
    '@typescript-eslint/explicit-function-return-type': 'off',
  },
};
