# my

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
#项目初始化
1.安装vue-cli
npm install -g vue@cli
2.初始化项目
vue init webpack my
3.进入项目
cd my
4.安装依赖
npm install
5.启动项目
npm run serve
#项目目录结构
index.html ：项目根视图
public ：静态文件目录

#模板语法
vue组件：
    包含三个部分：
        template:视图
        script:逻辑
        style:样式
Mustache:模板
    表现形式：{{ 语法 }}

vue基本指令:
    v-html:渲染文本,能解析标签
    v-text:渲染文本
    v-bind:绑定