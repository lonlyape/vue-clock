import Vue from 'vue'
import Router from 'vue-router'
import Test from '@/page/test'

Vue.use(Router)

export default new Router({
	routes: [{
		path: '/',
		name: 'test',
		component: Test
	}]
})
