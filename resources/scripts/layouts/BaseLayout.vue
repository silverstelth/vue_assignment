<template>
    <div id="page-container" :class="classContainer">
        <base-sidebar></base-sidebar>
        <base-header></base-header>

        <div id="main-container" class="position-relative">
            <router-view v-slot="{ Component }">
                <transition name="fade" mode="out-in">
                    <component :is="Component" />
                </transition>
            </router-view>
        </div>

        <base-footer></base-footer>
    </div>
</template>

<script lang="ts" setup>
import BaseHeader from '@/scripts/layouts/BaseHeader.vue'
import BaseSidebar from '@/scripts/layouts/BaseSidebar.vue'
import BaseFooter from '@/scripts/layouts/BaseFooter.vue'
import { computed } from 'vue'
import { useStore } from 'vuex'

const store = useStore()

const classContainer = computed(() => ({
    "sidebar-o": true,
    "sidebar-mini": store.state.layout.sidebarVisible,
    "page-container-fixed": true
}))
</script>