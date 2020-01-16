import Vue from 'vue';
import App from './App.vue';
import VueRouter from 'vue-router';

import Home from './components/Home.vue';
import Blog from './components/Blog.vue';
import Products from './components/Products.vue';

import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

Vue.config.productionTip = false;

//register vue-router
Vue.use(VueRouter);

const router = new VueRouter({
	mode: 'history',
	base: __dirname,
	routes: [
		{ path: "/", component: Home, name: "home"},
		{ path:"/blog", component: Blog, name:"blog" },
		{ path: "/products", component: Products, name:"products"}
	]
})

new Vue({
	router,
	render: h => h(App)
}).$mount('#app');
