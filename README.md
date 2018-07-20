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
| timezone | `Number` | auto | 时区，默认本地时区 |
| [time](#time-时间) | `Object` |  | 时间的配置，具体各个属性意义参考以下 |
| [border](#border-边界) | `Object` |  | 边界的配置，具体各个属性意义参考以下 |
| [background](#background-背景) | `Object` |  | 背景的配置，具体各个属性意义参考以下 |
| [dial](#dial-刻度) | `Object` |  | 刻度的配置，具体各个属性意义参考以下 |
| [number](#number-数字) | `Object` |  | 数字的配置，具体各个属性意义参考以下 |
| [needle](#needle-针) | `Object` |  | 针的配置，具体各个属性意义参考以下 |

### time (时间)

| 属性 | 类型 | 默认值 | 说明 |
|-----|------|-------|------|
| isStatic | `Blean` | false | 是否为静止时间 |
| timestamp | `Number` | 0 | 时钟的时间，只有 isStatic 为 true 时才起作用 |

### border （边界）

| 属性 | 类型 | 默认值 | 说明 |
|-----|------|-------|------|
| type | `String` | circle | 边界类型（圆、四边形）;circle(圆形) 、 rectangle(四边形) |
| width | `Number` | 300 | 时钟的宽度或直径，如果 type==circle ，则为时钟的直径 |
| height | `Number` | 300 | 时钟的高度，只有 type==rectangle 明有效 |
| lineWidth | `Number` | 2 | 边界线的宽度（粗细） |
| color | `String` | #bbb | 边界线的颜色 |

### background （背景）

| 属性 | 类型 | 默认值 | 说明 |
|-----|------|-------|------|
| color | `String` | 空 | 背景颜色 |
| image | `String` | 空 | 背景图片 |

### dial （刻度）

| 属性 | 类型 | 默认值 | 说明 |
|-----|------|-------|------|
| isDial | `Blean` | true | 是否需要刻度 |
| distance | `Number` | 0 | 刻度与边界的距离 |
| maxLength | `Number` | 8 | 长刻度的长度（粗细） |
| minLength | `Number` | 5 | 短刻度的长度（粗细） |
| maxWidth | `Number` | 3 | 长刻度的宽度（粗细） |
| minWidth | `Number` | 2 | 短刻度的宽度（粗细） |
| color | `String` | #888 | 刻度的颜色 |

### number （数字）

| 属性 | 类型 | 默认值 | 说明 |
|-----|------|-------|------|
| isNumber | `Blean` | true | 是否需要数字 |
| type | `String` | arabic | 数字类型，罗马：roman；阿拉伯：arabic |
| color | `String` | #777 | 数字的颜色 |
| fontSize | `String` | 19px | 字体的大小 |
| fontWeight | `String` | normal | 字体的粗细 （与css中font-weight一致）|
| fontFamily | `String` | 微软雅黑 | 字体 |
| radius | `Number` | 125 | 数字圆的半径 |

### needle （针）

| 属性 | 类型 | 默认值 | 说明 |
|-----|------|-------|------|
| second | `Object` |  | 秒针 |
| minute | `Object` |  | 分针 |
| hour | `Object` |  | 时针 |

在 needle 中，secone、minute、hour 分别为一个对象，每个对象中的属性名和代表的意义是一样的

#### needle.second/needle.minute/needle.hour

| 属性 | 类型 | 默认值 | 说明 |
|-----|------|-------|------|
| length | `Number` | second : 100 <br> minute : 110 <br> hour : 70 | 针的长度 |
| lineWidth | `String` | second : 3 <br> minute : 4 <br> hour : 4 | 针的宽度（粗细） |
| longOut | `Number` | second : 0 <br> minute : 0 <br> hour : 0 | 超出圆心的长度 |
| color | `String` | second : #aaa <br> minute : #999 <br> hour : #888 | 针的颜色 |