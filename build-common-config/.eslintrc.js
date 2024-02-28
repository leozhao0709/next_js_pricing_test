module.exports = {
  root: true,
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint'],
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/eslint-recommended',
    'plugin:@typescript-eslint/recommended',
    'prettier',
    'plugin:import/recommended',
    'plugin:import/typescript',
  ],
  rules: {
    'no-console': 1,
    quotes: [2, 'single', { allowTemplateLiterals: true }],
    '@typescript-eslint/no-explicit-any': 0,
    '@typescript-eslint/no-empty-function': 0,
    '@typescript-eslint/no-var-requires': 0,
    '@typescript-eslint/no-unused-vars': 1,
    'no-undef': 0,
    '@typescript-eslint/no-non-null-assertion': 0,
    '@typescript-eslint/no-empty-interface': 0,
    '@typescript-eslint/explicit-function-return-type': 0,
    '@typescript-eslint/explicit-module-boundary-types': 0,
    'import/no-unresolved': 0,
    'import/no-named-as-default-member': 0,
    'import/namespace': 0,
    'import/no-cycle': [2, { ignoreExternal: true }],
    '@typescript-eslint/strict-boolean-expressions': [
      1,
      { allowNumber: false, allowString: false },
    ],
    '@typescript-eslint/ban-types': [
      'error',
      {
        types: {
          '{}': false,
        },
        extendDefaults: true,
      },
    ],
  },

  ignorePatterns: [
    'node_modules',
    '.DS_Store',
    'dist',
    '.nyc_output',
    'lib',
    'tmp',
    'coverage',
    '.vscode',
    '*-error.log',
    '*-debug.log',
    '.idea',
    '/*.js',
    '/*.ts',
    '/*.mts',
  ],
};
