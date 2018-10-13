import Vue from 'vue'
import App from './App'
import router from './router'
import vueClock from 'vue-clock-lonlyape'

Vue.use(vueClock);

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
	el: '#app',
	router,
	components: { App },
	template: '<App/>'
})
