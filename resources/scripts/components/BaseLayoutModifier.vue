<template>
    <component
        :is="tag"
        :class="classComponent"
        @click.prevent="layout(action)"
    >
        <slot></slot>
    </component>
</template>

<script lang="ts" setup>
import { computed } from 'vue'
import { useStore } from 'vuex'

const store = useStore()

const props = withDefaults(defineProps<{
    tag?: string,
    variant?: string,
    size?: string
    action: string
}>(), {
    tag: "button",
    variant: "primary",
    size: "md",
})

const classComponent = computed(() => {
    return {
        [`btn btn-${props.variant}`]: props.tag === 'button' && props.variant,
        [`btn-${props.size}`]: props.tag === 'button' && props.size,
    }
})

const layout = (action: string) => {
    const layoutAPI: {
        [n: string]: Function
    } = {
        sidebarOpen: () => store.commit('sidebar', {mode: 'open'}),
        sidebarClose: () => store.commit('sidebar', {mode: 'close'})
    }

    layoutAPI[action]?.()
}
</script>