# vue3-vant-h5

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).

### 命名规范
- 中划线命名：user-name （文件夹名称、vue以外的文件名称、less变量名）
- 小驼峰命名：userName （js变量名）
- 大驼峰命名：UserName （类名、vue文件名称）
- 大写加下划线命名：USER_NAME （常量）
- bem命名： block-name__element-name--modifier-name，也就是模块名 + 元素名 + 修饰器名

### 添加husky
- 初始化项目时
  - 先初始化git, 执行git init 
  - 再执行 sh git-commitlint.sh
- git clone项目后
  - 执行sh git-commitlint.sh
