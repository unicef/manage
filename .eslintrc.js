module.exports = {
    parser: '@typescript-eslint/parser',
    extends: [
        'plugin:@typescript-eslint/recommended',
        './config/eslint.react.js',
        'prettier',
        'prettier/@typescript-eslint'
    ],
    plugins: ['@typescript-eslint', 'babel', 'react-hooks', 'prettier', 'cypress'],
    rules: {
        '@typescript-eslint/no-unused-vars': 'error',
        'no-unused-vars': 'off', // duplicate of @typescript-eslint/no-unused-vars
        'no-console': 'warn',
        '@typescript-eslint/camelcase': 'off',
        '@typescript-eslint/explicit-function-return-type': 'off',
        '@typescript-eslint/no-var-requires': 'off', // dev purposes
        '@typescript-eslint/no-use-before-define': 'off'
    },
    env: {
        'cypress/globals': true
    },
    overrides: [
        {
            files: ['test/**/*.ts'],
            rules: {
                '@typescript-eslint/explicit-function-return-type': 'off'
            }
        }
    ]
};
