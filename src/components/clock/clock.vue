<template>
	<div id="clock" v-bind:style="clockBoxStyle">
		<canvas></canvas>
	</div>
</template>
<script>
export default {
	name: 'vueClock',
	data() {
		return {
			clockBoxStyle: {},
			canvas: {},
			context: {},
			timeAngle: {},
			timeInterval: {},
			transitionOption: {}
		}
	},
	props: {
		width: {
			default: ''
		},
		height: {
			default: ''
		},
		//时区
		timezone: {
			default: ''
		},
		//时间
		time: {
			type: Object,
			default () {
				return {
					isStatic: false,
					timestamp: 0,
				}
			}
		},
		//边界
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
		//背景
		background: {
			type: Object,
			default () {
				return {
					color: '',
					image: ''
				}
			}
		},
		//刻度
		dial: {
			type: Object,
			default () {
				return {
					isDial: true, //是否要刻度
					distance: 0, //刻度与边界的距离
					maxLength: 8,
					minLength: 5,
					maxWidth: 3,
					minWidth: 2,
					color: '#888'
				}
			}
		},
		number: {
			type: Object,
			default () {
				return {
					isNumber: true, //是否要数字
					type: 'arabic', //数字类型，罗马：“roman”；阿拉伯：“arabic”（默认）
					color: '#777',
					fontSize: '19px',
					fontWeight: 'normal',
					fontFamily: '微软雅黑',
					radius: 125,
				}
			}
		},
		//针
		needle: {
			type: Object,
			default () {
				return {
					second: {
						length: 100,
						color: '#aaa',
						lineWidth: 3,
						longOut: 5,
					},
					minute: {
						length: 110,
						color: '#999',
						lineWidth: 4,
						longOut: 5,
					},
					hour: {
						length: 70,
						color: '#888',
						lineWidth: 4,
						longOut: 5,
					},
				}
			}
		},
	},
	computed: {
		drawOption() {
			//时间
			var time = {
				isStatic: this.time.isStatic || false,
				timestamp: this.time.isStatic,
			};
			//边界
			var border = {
				type: this.border.type || 'circle',
				width: this.border.width || 300,
				height: this.border.height || this.border.width || 300,
				color: this.border.color || '#bbb',
				lineWidth: this.border.lineWidth || 2,
			};
			//背景
			var background = {
				color: this.background.color || '',
				image: this.background.image || ''
			};
			//刻度
			var dial = {
				isDial: this.dial.isDial || true, //是否要刻度
				distance: this.dial.distance || 0, //刻度与边界的距离
				maxLength: this.dial.maxLength || 8,
				minLength: this.dial.minLength || 5,
				maxWidth: this.dial.maxWidth || 3,
				minWidth: this.dial.minWidth || 2,
				color: this.dial.color || '#888'
			};
			//时钟的数字
			var number = {
				isNumber: this.number.isNumber || true, //是否要数字
				type: this.number.type || 'arabic', //数字类型，罗马：“roman”；阿拉伯：“arabic”（默认）
				color: this.number.color || '#777',
				fontSize: this.number.fontSize || '19px',
				fontWeight: this.number.fontWeight || 'normal',
				fontFamily: this.number.fontFamily || '微软雅黑',
				radius: this.number.radius || 125,
			};
			//针
			var needle = {
				second: {
					length: (this.needle.second && this.needle.second.length) || 100,
					color: (this.needle.second && this.needle.second.color) || '#aaa',
					lineWidth: (this.needle.second && this.needle.second.lineWidth) || 3,
					longOut: (this.needle.second && this.needle.second.longOut) || 0,
				},
				minute: {
					length: (this.needle.minute && this.needle.minute.length) || 110,
					color: (this.needle.minute && this.needle.minute.color) || '#999',
					lineWidth: (this.needle.minute && this.needle.minute.lineWidth) || 4,
					longOut: (this.needle.minute && this.needle.minute.longOut) || 0,
				},
				hour: {
					length: (this.needle.hour && this.needle.hour.length) || 70,
					color: (this.needle.hour && this.needle.hour.color) || '#888',
					lineWidth: (this.needle.hour && this.needle.hour.lineWidth) || 4,
					longOut: (this.needle.hour && this.needle.hour.longOut) || 0,
				},
			};
			return {
				time,
				border,
				background,
				dial,
				number,
				needle,
			}
		}
	},
	watch: {
		drawOption: {
			handler: function(val) {
				if (val.time.isStatic) {
					clearInterval(this.timeInterval);
				}
				this.draw();
				console.log('option change');
			},
			deep: true,
		},
		timeAngle: function() {
			this.draw();
		},
	},
	created() {
		this.$nextTick(() => {
			this.canvas = this.$el.querySelector('canvas');
			this.context = this.canvas.getContext('2d');
			this.setClockBoxStyle();
			this.newData();
			if (!this.time.isStatic) {
				this.timeInterval = setInterval(this.newData, 1000);
			}
			this.draw();
		});
	},
	methods: {
		//画
		draw() {
			this.clear();
			this.drawBackground();
			this.drawBorder();
			this.drawDial();
			this.drawNumber();
			this.drawNeedle();
		},
		//清除
		clear() {
			this.context.clearRect(0, 0, this.canvas.width, this.canvas.width);
		},
		//设置大小
		setClockBoxStyle() {
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
			if (this.drawOption.border.type == 'rectangle') {
				this.context.rect(-this.drawOption.border.width / 2, -this.drawOption.border.height / 2, this.drawOption.border.width, this.drawOption.border.height);
			} else {
				this.context.arc(0, 0, this.drawOption.border.width / 2, 0, Math.PI * 2, true);
			}
			this.context.closePath();
			this.context.strokeStyle = this.drawOption.border.color;
			this.context.lineWidth = this.drawOption.border.lineWidth;
			this.context.stroke();
			this.context.restore();
		},
		//背景图片
		drawBackground() {
			this.context.save();
			this.context.beginPath();
			this.context.translate(this.canvas.width / 2, this.canvas.height / 2);
			var x, y;
			if (this.drawOption.border.type == 'rectangle') {
				this.context.rect(-this.drawOption.border.width / 2, -this.drawOption.border.height / 2, this.drawOption.border.width, this.drawOption.border.height);

				x = -this.drawOption.border.width / 2;
				y = -this.drawOption.border.height / 2;
			} else {
				this.context.arc(0, 0, this.drawOption.border.width / 2, 0, Math.PI * 2, true);
				x = -this.drawOption.border.width / 2;
				y = -this.drawOption.border.width / 2;
			}
			if (this.drawOption.background.color) {
				this.context.fillStyle = this.drawOption.background.color;
				this.context.fill();
			}
			if (this.drawOption.background.image) {
				var image = new Image();

				if (!this.transitionOption.bgImg) {
					var _this = this;
					image.src = this.drawOption.background.image;
					image.onload = function() {
						console.log('img loaded');
						_this.$set(_this.transitionOption, 'bgImg', image);
					}
				} else {
					image = this.transitionOption.bgImg;
				}

				var sx, sy, autow;
				if (image.width >= image.height) {
					sx = (image.width - image.height) / 2;
					sy = 0;
					autow = image.height;
				} else {
					sx = 0;
					sy = (image.height - image.width) / 2;
					autow = image.width;
				}

				this.context.clip();
				this.context.drawImage(image, sx, sy, autow, autow, x, y, -x * 2, -y * 2);
			}
			this.context.closePath();
			this.context.restore();
		},
		//画刻度
		drawDial() {
			if (!this.drawOption.dial.isDial) return;
			var degMinute = Math.PI * 2 / 60;
			var degM = 0;
			var distance = this.drawOption.dial.distance ? this.drawOption.dial.distance + this.drawOption.border.lineWidth / 2 : this.drawOption.border.lineWidth / 2;
			if (this.drawOption.dial.distance == 0) distance = this.drawOption.border.lineWidth / 2;
			var begainPosition = {
				x: 0,
				y: this.drawOption.border.width / 2 - distance
			};
			for (let i = 0; i < 60; i++) {
				degM = degMinute * i;
				this.context.save();
				this.context.translate(this.canvas.width / 2, this.canvas.height / 2);
				if (i % 5 == 0) {
					this.line(begainPosition, degM, this.drawOption.dial.maxLength - begainPosition.y, this.drawOption.dial.color, this.drawOption.dial.maxWidth);
				} else {
					this.line(begainPosition, degM, this.drawOption.dial.minLength - begainPosition.y, this.drawOption.dial.color, this.drawOption.dial.minWidth);
				}
				this.context.restore();
			}
		},
		//画数字
		drawNumber() {
			if (!this.drawOption.number.isNumber) return;
			var num = [];
			for (let i = 1; i < 13; i++) {
				num[i - 1] = i + 3;
				if ((i + 3) > 12) {
					num[i - 1] = 3 - (12 - i);
				}
			}
			if (this.drawOption.number.type == 'roman') {
				for (let i = 0; i < 12; i++) {
					num[i] = this.intToRoman(num[i]);
				}
			}
			var ar = Math.PI / 6;
			this.context.save();
			this.context.fillStyle = this.drawOption.number.color;
			this.context.font = this.drawOption.number.fontWeight + ' ' + this.drawOption.number.fontSize + ' ' + this.drawOption.number.fontFamily;
			this.context.textBaseline = 'middle';
			this.context.textAlign = 'center';
			this.context.translate(this.canvas.width / 2, this.canvas.height / 2);
			for (let i = 0; i < num.length; i++) {
				this.context.fillText(num[i], this.drawOption.number.radius * Math.cos(ar * (i + 1)), this.drawOption.number.radius * Math.sin(ar * (i + 1)));
			}
			this.context.restore();
		},
		//转罗马数字
		intToRoman(num) {
			var roman = ['I', 'V', 'X', 'L', 'C', 'D', 'M'];
			var numArr = num.toString().split('');
			for (let i = 0; i < numArr.length; i++) {
				var n = Number(numArr[numArr.length - 1 - i]);
				numArr[numArr.length - 1 - i] = '';
				if (n >= 5 && n < 9) {
					numArr[numArr.length - 1 - i] = roman[2 * i + 1];
					for (let j = 0; j < n - 5; j++) {
						numArr[numArr.length - 1 - i] += roman[2 * i];
					}
				} else if (n == 9) {
					numArr[numArr.length - 1 - i] = roman[2 * i] + roman[2 * i + 2];
				} else if (n == 4) {
					numArr[numArr.length - 1 - i] = roman[2 * i] + roman[2 * i + 1];
				} else {
					for (let j = 0; j < n; j++) {
						numArr[numArr.length - 1 - i] += roman[2 * i];
					}
				}
			}
			return numArr.join('');
		},
		//画针
		drawNeedle() {
			var h = this.timeAngle.hAngle;
			var m = this.timeAngle.mAngle;
			var s = this.timeAngle.sAngle;
			this.context.save();
			this.context.translate(this.canvas.width / 2, this.canvas.height / 2);

			this.line({
				x: 0,
				y: this.drawOption.needle.hour.longOut
			}, h, this.drawOption.needle.hour.length, this.drawOption.needle.hour.color, this.drawOption.needle.hour.lineWidth); //时针
			this.line({
				x: 0,
				y: this.drawOption.needle.minute.longOut
			}, m, this.drawOption.needle.minute.length, this.drawOption.needle.minute.color, this.drawOption.needle.minute.lineWidth); //分针
			this.line({
				x: 0,
				y: this.drawOption.needle.second.longOut
			}, s, this.drawOption.needle.second.length, this.drawOption.needle.second.color, this.drawOption.needle.second.lineWidth); //秒针

			this.context.restore();
		},
		//以时区确定时间
		selectTimezone() {
			var d = this.drawOption.time.isStatic ? new Data(this.drawOption.time.timestamp) : new Date();
			//得到1970年一月一日到现在的秒数
			var len = d.getTime();
			//确定时区
			var timezone;
			if (this.timezone === '') {
				timezone = -d.getTimezoneOffset() / 60;
			} else {
				timezone = Number(this.timezone);
			}
			//本地时间与GMT时间的时间偏移差
			var offset = d.getTimezoneOffset() * 60000;
			//得到现在的格林尼治时间
			var utcTime = len + offset;
			return new Date(utcTime + 3600000 * timezone);
		},
		//时间计算
		newData() {
			var nd = this.selectTimezone();
			var hour = nd.getHours();
			var minute = nd.getMinutes();
			var second = nd.getSeconds();
			var sAngle = Math.PI * 2 * (second % 60) / 60;
			var mAngle = Math.PI * 2 * (minute % 60) / 60 + sAngle / 60;
			var hAngle = Math.PI * 2 * (hour % 12) / 12 + mAngle / 12;
			this.timeAngle = {
				sAngle,
				mAngle,
				hAngle
			}

		},
		//画线（公用）
		line(starp, s, len, col, lw) {
			this.context.save();
			this.context.beginPath();
			this.context.rotate(s);
			this.context.moveTo(starp.x, starp.y);
			this.context.lineTo(0, -len);
			this.context.strokeStyle = col;
			this.context.lineWidth = lw;
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
