<template>
    <div id="clock" v-bind:style="clockBoxStyle">
        <canvas></canvas>
    </div>
</template>
<script>
export default {
    name: 'clock',
    data() {
        return {
            clockBoxStyle: {},
            canvas: {},
            context: {},
        }
    },
    props: {
        width: {
            default: ''
        },
        height: {
            default: ''
        },
        border: {
            type: Object,
            default () {
                return {
                    type: 'circle', //边界类型（圆、四边形）;circle(圆形) 、 rectangle(四边形)
                    width: 300,
                    height: 300,
                    lineWidth: 2,
                    color: '#bbb'
                }
            }
        },
    },
    computed: {},
    created() {
        this.$nextTick(() => {
            this.canvas = this.$el.querySelector('canvas');
            this.context = this.canvas.getContext('2d');
            this.setClockBoxStyle();
            this.drawBorder();
        });
    },
    methods: {
        //设置大小
        setClockBoxStyle() {
            console.log(this.$el.clientWidth);
            var obj = {}
            if (this.width !== '' && !/%$/.test(this.width)) {
                obj.width = Number(this.width) + 'px';
            } else {
                obj.width = this.width;
            }
            if (this.height === '') {
                if (this.width === '' || /%$/.test(this.width)) {
                    obj.height = this.$el.clientWidth + 'px';
                    this.clockBoxStyle = obj;
                } else {
                    obj.height = this.width;
                }
            }
            this.canvas.width = this.$el.clientWidth;
            this.canvas.height = Number(obj.height.split('px')[0]);
        },
        //画边框
        drawBorder() {
            this.context.save();
            this.context.translate(this.canvas.width / 2, this.canvas.height / 2);
            this.context.beginPath();
            if (this.border.type == 'rectangle') {
                this.context.rect(-this.border.width / 2, -this.border.height / 2, this.border.width, this.border.height);
            } else {
                this.context.arc(0, 0, this.border.width / 2, 0, Math.PI * 2, true);
            }
            this.context.closePath();
            this.context.strokeStyle = this.border.color;
            this.context.lineWidth = this.border.lineWidth;
            this.context.stroke();
            this.context.restore();
        },
    },
}

</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
#clock {
    width: 100%;
}

</style>
