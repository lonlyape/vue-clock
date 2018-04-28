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
			canvas: {}
		}
	},
	props: {
		width: {
			default: ''
		},
		height: {
			default: ''
		}
	},
	computed: {},
	created() {
		this.setClockBoxStyle();

	},
	methods: {
		setClockBoxStyle() {
			var obj = {}
			if (this.width !== '' && !/%$/.test(this.width)) {
				obj.width = Number(this.width) + 'px';
			} else {
				obj.width = this.width;
			}
			if (this.height === '') {
				if (this.width === '' || /%$/.test(this.width)) {
					this.$nextTick(() => {
						obj.height = this.$el.offsetWidth + 'px';
						this.clockBoxStyle = obj;
					});
				} else {
					obj.height = this.width;
				}
			}
		}
	},
}

</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
#clock {
	width: 100%;
	canvas {
		width: 100%;
		height: 100%;
	}
}

</style>
