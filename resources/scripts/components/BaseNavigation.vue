<template>
    <ul :class="classContainer">
        <li
            v-for="(node, index) in nodes"
                :key="index"
                :class="{
                    'nav-main-item': true
                }"
        >
            <router-link
                :to="node.to || '#'"
                class="nav-main-link"
                :active-class="node.to && node.to !== '#' ? 'active' : ''"
                @click.native="linkClicked"
            >
                <i v-if="node.icon"
                    :class="`nav-main-link-icon ${node.icon}`"
                ></i>
                <span v-if="node.name" class="nav-main-link-name">
                    {{ node.name }}
                </span>
            </router-link>
        </li>
    </ul>
</template>

<script lang="ts">
export default {
    name: 'BaseNavigation',
    props: {
        nodes: {
            type: Array<{to: string, icon: string, name: string}>,
            required: true
        }
    },
    computed: {
        classContainer() {
            return {
                "nav-main": true
            }
        }
    },
    setup() {
        return {
            linkClicked() {

            }
        }
    }
}
</script>