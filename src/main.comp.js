import myClock from './components/clock.vue'

const clock = {
	install(Vue, options) {
		if (typeof window !== 'undefined' && window.Vue) {
			Vue = window.Vue
		}
		Vue.component(myClock.name, myClock)
	}
}

export default clock;
