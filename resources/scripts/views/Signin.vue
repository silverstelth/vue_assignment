<template>
    <div class='tw-grid tw-grid-cols-12'>
        <div class="tw-col-span-4 tw-text-white tw-font-sans tw-font-bold tw-bg-black tw-min-h-screen tw-pl-7">
            <div class="tw-grid tw-grid-rows-6 tw-grid-flow-col tw-min-h-screen tw-items-center tw-justify-items-start">
                <form class="tw-row-span-4 tw-row-start-2 tw-text-4xl" @submit.stop.prevent="onSubmit">
                    Sign In                    
                    <div class="pt-10 tw-pr-20">                        
                        <label class="tw-text-sm tw-font-sans tw-font-medium">
                            Username
                        </label>
                        <input 
                            type="text"
                            name="username" 
                            placeholder="Write your username" 
                            class="tw-w-full tw-bg-black tw-py-3 tw-px-12 tw-border tw-hover:tw-border-gray-500 tw-rounded tw-shadow tw-text-base tw-font-sans"
                            ref="username"
                        />
                    </div>
                    <div class="tw-pt-2 tw-pr-20">
                        <label class="tw-text-sm tw-font-sans tw-font-medium">
                            Password
                        </label>
                        <input 
                            type="password" 
                            name="password" 
                            placeholder="Write your password" 
                            class=" tw-w-full tw-bg-black tw-py-3 tw-px-12 tw-border tw-hover:tw-border-gray-500 tw-rounded tw-shadow tw-text-base tw-font-sans"
                        />
                        <a href="" class="tw-text-sm tw-font-sans tw-font-medium tw-text-gray-600 tw-underline">
                            Forgot password?
                        </a>
                    </div>
                    <!-- Button -->
                    <div class="tw-text-sm tw-font-sans tw-font-medium tw-w-full tw-pr-20 tw-pt-14">
                        <button 
                            type="submit"
                            class="tw-text-center tw-w-full tw-py-4 tw-bg-blue-700 tw-hover:tw-bg-blue-400 tw-rounded-md tw-text-white">
                                SIGN IN
                        </button>
                    </div>
                </form>
                <!-- Text -->
                <a href="" class="tw-text-sm tw-font-sans tw-font-medium tw-text-gray-400 tw-underline">
                    Don´t have an account? Sign up
                </a>
            </div>         
        </div>

        <div class="banner tw-col-span-8 tw-text-white tw-font-sans tw-font-bold">
        </div>    
    </div>
</template>

<script lang="ts">
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import { useStore } from 'vuex'

export default {
    name: "Signin",

    setup() {
        const store = useStore()
        const router = useRouter()
        const username = ref<HTMLInputElement | null>(null)

        return {
            username,
            onSubmit() {
                store.dispatch('auth/signin', { name: username.value?.value })
                .then((res) => {
                    if (res) {
                        router.push("profile")
                    }
                })
            }
        }
    }
}
</script>

<style>
    .banner {
        background: url( '/img/background/background.jpg' );
        background-repeat: no-repeat;
        background-size: cover; 
    }
</style>
