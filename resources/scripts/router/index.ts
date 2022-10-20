import { createWebHistory, createRouter, RouteLocationNormalized, NavigationGuardNext } from "vue-router"
import store from "../store"
import routes from "./routes"

const router = createRouter({
    history: createWebHistory(),
    routes
})

router.beforeEach((to: RouteLocationNormalized, from: RouteLocationNormalized, next: NavigationGuardNext) => {
    if (to.fullPath === '/') {
        if (Object.keys(store.getters['auth/user']).length === 0) {
            next({
                path: '/login'
            })
        } else {
            next({
                path: '/dashboard'
            })
        }
    } else if (to.matched.some(record => record.meta.authOnly)) {
        if (Object.keys(store.getters['auth/user']).length === 0) {
            next({
                path: '/login'
            })
        } else {
            next()
        }
    } else {
        next()
    }
})

export default router