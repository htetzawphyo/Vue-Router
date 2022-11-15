import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '@/views/Home'
import ProductHome from '@/views/ProductHome'
import ProductDetail from '@/views/ProductDetail'
import Login from '@/views/Login'
import Profile from '@/views/Profile'
import About from '@/views/About'

Vue.use(VueRouter)

const routes = [
    { path: '/', component: Home },
    { path: '/product', component: ProductHome },
    { path: '/product/:id', component: ProductDetail },
    { path: '/login', component: Login },
    { path: '/profile', component: Profile },
    { path: '/about', component: About }
]

const router = new VueRouter({
    mode: 'history',
    routes
})

router.beforeEach((to, from, next) => {
    if (to.path === "/profile" || to.path === "/product") {
        let auth = localStorage.getItem("auth");
        if (auth) {
            next();
        } else {
            next("/login")
        }
    } else {
        next();
    }
})

export default router;