<template>
    <div id="page-container" :class="classContainer">
        <base-sidebar></base-sidebar>
        <base-header></base-header>
        <base-footer></base-footer>
    </div>
</template>

<script lang="ts">
import BaseHeader from '@/scripts/layouts/BaseHeader.vue'
import BaseSidebar from '@/scripts/layouts/BaseSidebar.vue'
import BaseFooter from '@/scripts/layouts/BaseFooter.vue'

export default {
    name: "BaseLayout",
    components: {
        BaseHeader,
        BaseSidebar,
        BaseFooter
    },
    computed: {
        classContainer() {
            return {

            }
        }
    }
}
</script>