module.exports = {
    parser: 'vue-eslint-parser',
    // rules: {
    //     '@typescript-eslint/no-var-requires': 0
    // },
    extends: [
        'eslint:recommended',
        'plugin:vue/base',
        'plugin:vue/vue3-recommended',
        'plugin:@typescript-eslint/recommended'
    ],
    parserOptions: {
        'ecmaVersion': 12,
        'sourceType': 'module',
        'parser': '@typescript-eslint/parser'
    },
    plugins: [
        'vue',
        '@typescript-eslint'
    ],
    rules: {
        'vue/no-parsing-error': [0],
        'linebreak-style': [0],
        'vue/max-attributes-per-line': [0],
        'vue/html-self-closing': [0],
        'vue/html-closing-bracket-newline': [0],
        'vue/html-indent': [0],
        'vue/first-attribute-linebreak':[0],
        'vue/no-reserved-props':[0],
        'vue/require-default-prop':[0],
        'eslintvue/multi-word-component-names':[0],
        'vue/singleline-html-element-content-newline':[0],
        'vue/multi-word-component-names':[0]
    }
}