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
| width | `String` | auto | canvas 画布的宽度，默认为画布容器的宽度 |
| height | `String` | auto | canvas 画布的高度，默认与画布的宽度一致 |
| time | `Object` |  | 时间的配置，具体各个属性意义参考以下 |
| border | `Object` |  | 边界的配置，具体各个属性意义参考以下 |
| background | `Object` |  | 背景的配置，具体各个属性意义参考以下 |
| dial | `Object` |  | 刻度的配置，具体各个属性意义参考以下 |
| number | `Object` |  | 数字的配置，具体各个属性意义参考以下 |
| needle | `Object` |  | 针的配置，具体各个属性意义参考以下 |

### time

| 属性 | 类型 | 默认值 | 说明 |
| isStatic | 'Blean' | false | 是否为静止时间 |
| timestamp | 'Number' | 0 | 时钟的时间，只有 isStatic 为 true 时才起作用 |

### border

| 属性 | 类型 | 默认值 | 说明 |
| type | 'String' | circle | 边界类型（圆、四边形）;circle(圆形) 、 rectangle(四边形) |
| width | 'Number' | 300 | 时钟的宽度或直径，如果 type==circle ，则为时钟的直径 |
| height | 'Number' | 300 | 时钟的高度，只有 type==rectangle 明有效 |
| lineWidth | 'Number' | 2 | 边界线的宽度（粗细） |
| color | 'String' | #bbb | 边界线的宽度（粗细） |