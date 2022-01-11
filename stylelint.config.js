module.exports = {
  extends: [
    'stylelint-config-standard',
    'stylelint-config-recommended-vue',
    'stylelint-config-recess-order',
  ],
  rules: {
    indentation: 2,
    'selector-pseudo-class-no-unknown': [
      true,
      {
        ignorePseudoClasses: ['deep'], // 解决:deep(.selector)报错
      },
    ],
    'string-quotes': ['single', { avoidEscape: true }],
    'no-empty-source': null,
  },
  overrides: [
    {
      files: ['*.less', '**/*.less'],
      customSyntax: require('postcss-less'),
      rules: {},
    },
  ],
};
