# vue-clock-lonlyape

> vue 的时钟组件
> [vue3 版本](https://github.com/lonlyape/vue-clock-v3)

## use

``` bash
# install
npm install -S vue-clock-lonlyape

# main.js
......
import vueClock from 'vue-clock-lonlyape'
Vue use(vueClock)
......

or
# xxx.vue
......
import {vueClock} from 'vue-clock-lonlyape'
......
components:{
	myClock:vueClock
}
......
```



## 例子
[一个小展示](https://lonlyape.github.io/vue-clock/#/clock)

# 参数

| 属性 | 类型 | 默认值 | 说明 |
|-----|------|-------|------|
| width | `String` | auto | canvas 画布的宽度，默认为画布容器的宽度 |
| height | `String` | auto | canvas 画布的高度，默认与画布的宽度一致 |
| timezone | `Number` | 本地时区 | [时区](http://www.shijian.cc/shiqu/)，如时区为 UTC+8，则 timezone=8|
| adaptive | `Boolean` | true | 自适应，如果容器小于时钟的设定大小，时钟根据容器的大小自行调整 |
| [time](#time-时间) | `Object` |  | 时间的配置，具体各个属性意义参考以下 |
| [border](#border-边界) | `Object` |  | 边界的配置，具体各个属性意义参考以下 |
| [background](#background-背景) | `Object` |  | 背景的配置，具体各个属性意义参考以下 |
| [dial](#dial-刻度) | `Object` |  | 刻度的配置，具体各个属性意义参考以下 |
| [number](#number-数字) | `Object` |  | 数字的配置，具体各个属性意义参考以下 |
| [needle](#needle-针) | `Object` |  | 针的配置，具体各个属性意义参考以下 |

### time (时间)

| 属性 | 类型 | 默认值 | 说明 |
|-----|------|-------|------|
| isStatic | `Boolean` | false | 是否为静止时间 |
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
| isDial | `Boolean` | true | 是否需要刻度 |
| distance | `Number` | 0 | 刻度与边界的距离 |
| maxLength | `Number` | 8 | 长刻度的长度 |
| minLength | `Number` | 5 | 短刻度的长度 |
| maxWidth | `Number` | 3 | 长刻度的宽度（粗细） |
| minWidth | `Number` | 2 | 短刻度的宽度（粗细） |
| color | `String` | #888 | 刻度的颜色 |

### number （数字）

| 属性 | 类型 | 默认值 | 说明 |
|-----|------|-------|------|
| isNumber | `Boolean` | true | 是否需要数字 |
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
| longOut | `Number` | second : 5 <br> minute : 5 <br> hour : 5 | 超出圆心的长度 |
| color | `String` | second : #aaa <br> minute : #999 <br> hour : #888 | 针的颜色 |

# 事件

| 事件名 | 说明 | 参数 |
|-----|------|------|
| timeChange | 一秒触发一次，当 time.isStatic 为 true 时，只触发一次 | 当前时间的 date 对象 |


# 更新日志

### 1.2.0
* 添加 timeChange 事件

### 1.1.0

* 添加自适应功能，以参数 adaptive 控制，如果容器小于时钟设定的大小，时钟将根据容器的大小自行调整
