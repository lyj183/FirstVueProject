# 使用vue-cli初始化webpack工程
// 参考：https://segmentfault.com/a/1190000015252698
# 安装
npm install -g vue-cli
// 安装完后vue命令就可以使用了。实际上是全局注册了vue、vue-init、vue-list几个命令
// # ubuntu 系统下
// [vue-cli@2.9.3] link /usr/local/bin/vue@ -> /usr/local/lib/node_modules/vue-cli/bin/vue
// [vue-cli@2.9.3] link /usr/local/bin/vue-init@ -> /usr/local/lib/node_modules/vue-cli/bin/vue-init
// [vue-cli@2.9.3] link /usr/local/bin/vue-list@ -> /usr/local/lib/node_modules/vue-cli/bin/vue-list

vue list
// 可以发现有browserify、browserify-simple、pwa、simple、webpack、webpack-simple几种模板可选，这里选用webpack。

// # 使用 vue init
vue init <template-name> <project-name>

// # 例子
vue init webpack first-vue

# first-vue

> first vue project

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report

# run unit tests
npm run unit

# run e2e tests
npm run e2e

# run all tests
npm test
```

For a detailed explanation on how things work, check out the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).

## 页面模版
``` bash
# CommonTemplateView 
页面通用模版
```

## 练习项目
``` bash
# Test001 
组件通讯

# Test002
Slot插件

# Test003
Vuex, Store
参考：https://blog.csdn.net/zjq_1314520/article/details/79539966

# Test004-1
Echarts

# Test004-2
MintUI
参考：https://blog.csdn.net/di315362886/article/details/73920779

# Test005-1
Async-validator

# Test005-2
ElementForm-validator

# Test006-1
Dialog 正确打开弹窗
参考：https://blog.csdn.net/qq_33594380/article/details/79670400

# Test006-2
Tree

# Test007
1、vue-html5-editor
参考：https://www.npmjs.com/package/vue-html5-editor
2、上传
3、下载csv

# Test008
Css 练习
```
