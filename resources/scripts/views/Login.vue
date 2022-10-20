<template>
    <div class='grid grid-cols-12'>
        <div class="col-span-4 text-white font-sans font-bold bg-black min-h-screen pl-7">
            <div class="grid grid-rows-6 grid-flow-col min-h-screen items-center justify-items-start">
                <form class="row-span-4 row-start-2 text-4xl" @submit.stop.prevent="onSubmit">
                    Sign In                    
                    <div class="pt-10 pr-20">                        
                        <label class="text-sm font-sans font-medium">
                            Username
                        </label>
                        <input 
                            type="text"
                            name="username" 
                            placeholder="Write your username" 
                            class="w-full bg-black py-3 px-12 border hover: border-gray-500 rounded shadow text-base font-sans"/>                            
                    </div>
                    <div class="pt-2 pr-20">
                        <label class="text-sm font-sans font-medium">
                            Password
                        </label>
                        <input 
                            type="password" 
                            name="password" 
                            placeholder="Write your password" 
                            class=" w-full bg-black py-3 px-12 border hover: border-gray-500 rounded shadow text-base font-sans"/>
                        <a href="" class="text-sm font-sans font-medium text-gray-600 underline">
                            Forgot password?
                        </a>
                    </div>
                    <!-- Button -->
                    <div class="text-sm font-sans font-medium w-full pr-20 pt-14">
                        <button 
                            type="submit"
                            class="text-center w-full py-4 bg-blue-700 hover:bg-blue-400 rounded-md text-white">
                                SIGN IN
                        </button>
                    </div>
                </form>
                <!-- Text -->
                <a href="" class="text-sm font-sans font-medium text-gray-400 underline">
                    Don´t have an account? Sign up
                </a>
            </div>         
        </div>

        <div class="banner col-span-8 text-white font-sans font-bold">
        </div>    
    </div>
</template>

<script lang="ts">
    export default {
        name: "login",
        methods: {
            onSubmit() {
                
            }
        }
    }
</script>

<style>
    .banner {
        background: url( '/img/background/background.jpg' );
        background-repeat: no-repeat;
        background-size: cover        
    }
</style>
