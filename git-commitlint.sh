#!/bin/sh
# 需要先初始化git仓库
npx husky install
npx husky add .husky/pre-commit "npx lint-staged"
npx husky add .husky/commit-msg "npx --no-install commitlint --edit $1"
