# vue-clock

> vue 的时钟组件

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
```

For a detailed explanation on how things work, check out the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).

# 参数

| 属性 | 类型 | 默认值 | 说明 |
|-----|------|-------|------|
| width | `string` | auto | canvas 画布的宽度，默认为画布容器的宽度 |
| height | `string` | auto | canvas 画布的高度，默认与画布的宽度一致 |
| time | `object` |  | 时间的配置，具体各个属性意义参考以下 |
| border | `object` |  | 边界的配置，具体各个属性意义参考以下 |
| background | `object` |  | 背景的配置，具体各个属性意义参考以下 |
| dial | `object` |  | 刻度的配置，具体各个属性意义参考以下 |
| number | `object` |  | 数字的配置，具体各个属性意义参考以下 |
| needle | `object` |  | 针的配置，具体各个属性意义参考以下 |