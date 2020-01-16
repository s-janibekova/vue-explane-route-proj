import Vue from 'vue';
import App from './App.vue';
import VueRouter from 'vue-router';

import User from '@/components/user/User.vue';
import UserPosts from '@/components/user/UserPosts.vue';
import UserProfile from '@/components/user/UserProfile.vue';
import UserMessages from '@/components/user/UserMessages.vue';
import Home from './components/Home.vue';
import Blog from './components/Blog.vue';
import ProductsList from './components/product/ProductList.vue';
// import ProductDetails from '@/components/ProductDetails.vue';
import ProductForm from '@/components/product/ProductForm.vue';


import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

Vue.config.productionTip = false;

//register vue-router
Vue.use(VueRouter);

const router = new VueRouter({
	mode: 'history',
	base: __dirname,
	routes: [
		{ 
			path: "/", 
			component: Home, 
			name: "home"},
		{ 
			path:"/blog", 
			component: Blog,
			name:"blog" },
		// { 
		// 	path: "/products/:id",
		// 	component: ProductDetails, 
		// 	name:"product-detail" },

		{
			path: "/user/:id", 
			component: User,
			name: "user" ,
			children: [
				{
					path: "profile",
					component: UserProfile,
					name: 'profile'
				},
				{
					path: "posts",
					component: UserPosts,
					name: 'posts'
				},
				{
					path: "messages",
					components: UserMessages,
					name: 'messages'
				},
			]
		},

		{ 
			path: "/products", 
			component: ProductsList, 
			name:"products" 
		},
		{	
			path: "/products/new",
			component: ProductForm

		}
	]
})

new Vue({
	router,
	render: h => h(App)
}).$mount('#app');
