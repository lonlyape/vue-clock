<template>
	<div id="tes_page">
		<div>
			<div class="button">
				<span v-if="border.type=='circle'" v-on:click="setBorder('type','rectangle')">改为方形边框</span>
				<span v-else v-on:click="setBorder('type','circle')">改为圆形边框</span>
				<span v-if="background.image" v-on:click="setBackground('image','')">没有背景</span>
				<span v-else v-on:click="setBackground('image','logo')">图片背景</span>
				<span v-on:click="colorChange()">随机颜色</span>
				<span v-on:click="colorReset()">重置颜色</span>
			</div>
			<clock v-bind:border="border" v-bind:background="background" v-bind:dial="dial" v-bind:number="number" v-bind:needle="needle" ref="clock"></clock>
		</div>
	</div>
</template>
<script>
import Clock from '../components/clock/clock.vue'
import logo from '../assets/logo_center.png'
export default {
	data() {
		return {
			border: {},
			background: {},
			dial: {},
			number: {},
			needle: {},
		}
	},
	created() {
		this.border = {
			type: 'circle',
			color: '#ddd'
		};
		this.$nextTick(() => {
			window.addEventListener('resize', () => {
				this.$refs.clock.setClockBoxStyle();
				this.$refs.clock.draw();
			});
		});
	},
	components: {
		Clock,
	},
	methods: {
		setBorder(type, val) {
			this.border[type] = val;
		},
		setBackground(type, val) {
			if (val == 'logo') {
				val = logo;
			}
			this.$set(this.background, type, val);
		},
		colorChange() {
			var _this = this;
			this.$set(this.dial, 'color', this.getColor());
			this.$set(this.number, 'color', this.getColor());
			this.$set(this.border, 'color', this.getColor());
			this.$set(this, 'needle', {
				second: { color: _this.getColor() },
				minute: { color: _this.getColor() },
				hour: { color: _this.getColor() }
			});
		},
		colorReset() {
			this.$set(this, 'dial', {});
			this.$set(this, 'number', {});
			this.$set(this, 'needle', {});
			this.$set(this.border, 'color', '#ddd');
		},
		getColor() {
			return 'rgb(' + Math.floor(Math.random() * 255) + ',' + Math.floor(Math.random() * 255) + ',' + Math.floor(Math.random() * 255) + ')';
		},
	},
}

</script>
<style scoped lang="less">
#tes_page {
	text-align: center;

	>div {
		max-width: 500px;
		margin: 100px auto;
		border: 1px solid #ccc;

		.button {
			padding: 10px 0;

			span {
				font-size: 16px;
				display: inline-block;
				background: #0e9e63;
				padding: 6px 10px;
				border-radius: 2px;
				color: #fff;
				cursor: pointer;
			}
		}
	}
}

</style>
