<template>
	<div>
		<vue-clock timezone="8"></vue-clock>
		<my-clock></my-clock>
	</div>
</template>
<script>
import { vueClock } from 'vue-clock-lonlyape'
export default {
	components: {
		myClock: vueClock
	},
	created() {
		console.log(vueClock);
	},
}

</script>
