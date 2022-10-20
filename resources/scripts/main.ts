// Build something cool. <3
import { createApp } from 'vue'
import App from '@/scripts/App.vue'
import router from './router'

createApp(App)
    .use(router)
    .mount('#app')