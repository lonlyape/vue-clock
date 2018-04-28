<template>
	<div id="tes_page">
		<div>
			<clock></clock>
		</div>
	</div>
</template>
<script>
import Clock from '../components/clock.vue'
export default {
	data() {
		return {}
	},
	components: {
		Clock,
	},
}

</script>
<style scoped lang="less">
#tes_page {
	text-align: center;
	>div {
		width: 500px;
		margin: 100px auto;
		border: 1px solid #ccc;
	}
}

</style>
