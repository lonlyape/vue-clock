<template>
	<div>
		<vue-clock></vue-clock>
		<my-clock></my-clock>
	</div>
</template>
<script>
import { vueClock } from '../../dist/index.js'
export default {
	components: {
		myClock: vueClock
	},
	created() {
		console.log(vueClock);
	},
}

</script>
