module.exports = {
  extends: ['@commitlint/config-conventional'],
  rules: {
    'type-enum': [
      // type关键字必须是其中之一
      2,
      'always',
      [
        'feat', // feat(jira-xxx【开发中】): {xxx功能未开发完成，提交保存}
        'fix', // fix(bug-xxx【修复完成】): (问题描述)【xxx原因】,【解决方式是xxx】,{xxx功能问题修复完成}
        'improvement', // improvement(update): {xxx功能代码写法复杂，进行优化}
        'docs', // docs: {xxx文档进行了修改}
        'style', // style: {xxx代码格式不规范，优化修改}
        'refactor', // refactor: {xxx类、方法块耦合，重写}
        'test', // test: {xxx功能点提交到环境进行测试验证}
        'merge', // merge: {1,提交了xxx,2,提交了xxx}
      ],
    ],
    'type-case': [2, 'always', 'lowerCase'], // type小写
    'type-empty': [0],
    // 'scope-empty': [0],
    // 'scope-case': [0],
    // 'subject-full-stop': [0, 'never'],
    // 'subject-case': [0, 'never'],
    // 'header-max-length': [0, 'always', 72],
  },
};
