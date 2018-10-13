import vueClock from './components/clock/'

const components = [vueClock];

const install = function(Vue, options) {
	components.map(component => {
		Vue.component(component.name, component);
	})
}

/* 支持使用标签的方式引入 */
if (typeof window !== 'undefined' && window.Vue) {
	install(window.Vue);
}

export {
	install,
	vueClock
};
