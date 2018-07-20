import myClock from './components/clock.vue'

const clock = {
	install(Vue, options) {
		Vue.component(myClock.name, myClock)
	}
}

export default clock;
