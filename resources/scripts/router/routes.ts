import Loading from '@/scripts/views/Loading.vue'
import Login from '@/scripts/views/Login.vue'

export default [
    {
        path: '/',
        name: 'home',
        component: Loading
    },
    {
        path: '/login',
        name: 'login',
        component: Login
    }
];