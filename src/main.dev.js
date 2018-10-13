import Vue from 'vue'
import App from './App'
import router from './router'
import install from '../dist/index.js'

Vue.use(install);

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
	el: '#app',
	router,
	components: { App },
	template: '<App/>'
})
