import Vue from 'vue'
import Router from 'vue-router'
import ClockPage from '../page/clocks.page.vue'
import TextPage from '../page/test.vue'

Vue.use(Router)

export default new Router({
	routes: [{
		path: '/',
		redirect: '/clock'
	}, {
		path: '/clock',
		component: ClockPage,
	}, {
		path: '/test',
		component: TextPage,
	}]
})
