// Build something cool. <3
import { createApp } from "vue"
import BootstrapVue3 from "bootstrap-vue-3"
import App from "@/scripts/App.vue"
import router from "./router"
import store from "./store"
import { BToastPlugin } from 'bootstrap-vue-3'
import BaseNavigation from "@/scripts/components/BaseNavigation.vue"
import VueCreditCardValidation from 'vue-credit-card-validation'

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue-3/dist/bootstrap-vue-3.css'

import 'simplebar/dist/simplebar.min.css'


createApp(App)
    .use(router)
    .use(store)
    .use(BootstrapVue3)
    .use(BToastPlugin)
    .use(VueCreditCardValidation)
    .component(BaseNavigation.name, BaseNavigation)
    .mount("#app")