<template>
    <nav id="sidebar" aria-label="Main Navigation">
        <slot>
            <div class="content-header">
                <router-link to="/" class="tw-flex tw-items-center">
                    <span class="smini-visible">
                        <i class="fa fa-circle-notch text-primary"></i>
                    </span>
                    <span class="smini-hide">
                        <img src="/img/logo.png" alt="" height="55">
                    </span>
                </router-link>

                <div>
                    <base-layout-modifier
                        variant="secondary"
                        :action="sidebarAction"
                    >
                        <i :class="sidebarHandleIcon"></i>
                    </base-layout-modifier>
                </div>
            </div>

            <simple-bar class="js-sidebar-scroll">
                <div class="content-side">
                    <base-navigation :nodes="navigation"></base-navigation>
                </div>
            </simple-bar>
        </slot>
    </nav>
</template>

<script lang="ts" setup>
import { SimpleBar } from 'simplebar-vue3'
import navigation from '@/scripts/data/menu'
import BaseLayoutModifier from '@/scripts/components/BaseLayoutModifier.vue'
import { useStore } from 'vuex'
import { computed } from 'vue'

const store = useStore()
const sidebarAction = computed(() => store.state.layout.sidebarVisible ? 'sidebarClose' : 'sidebarOpen')
const sidebarHandleIcon = computed(() => store.state.layout.sidebarVisible ? 'fa fa-caret-right' : 'fa fa-caret-left')
</script>