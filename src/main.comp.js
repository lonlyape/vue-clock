import myClock from './components/clock.vue'

const clock = {
	install(Vue, options) {
		Vue.component(myClock.name, myClock)
	}
}

// if (typeof window !== 'undefined' && window.Vue) {
// 	window.Vue.use(pagination)
// }

export default clock;
