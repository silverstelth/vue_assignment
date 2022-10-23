<template>
    <div class="tw-p-8">
        <b-container :toast="{root: true}" fluid="sm" position="position-fixed" id="toastr-container"></b-container>
        <h1 class="tw-text-4xl tw-font-medium">Profile</h1>
        <div class="tw-grid tw-mt-6 tw-gap-6">
            <div class="tw-bg-white tw-rounded tw-p-5">
                <h2 class="tw-text-xl tw-font-medium tw-py-5">Update Profile</h2>
                <b-form 
                    class="needs-validation"
                    @submit="onSubmit"
                    @reset="onReset"
                >
                    <b-form-group
                        label="Name"
                        label-for="name"
                    >
                        <b-form-input
                            id="name"
                            v-model="form.name"
                            :state="validateName"
                        ></b-form-input>
                        <b-form-invalid-feedback :state="validateName" v-if="validateName !== null">
                            Your name must be more 2 characters long.
                        </b-form-invalid-feedback>
                    </b-form-group>
                    <b-form-group
                        label="Gender"
                        label-for="gender"
                    >
                        <b-form-select
                            id="gender"
                            v-model="form.gender"
                            :options="genderOptions"
                        ></b-form-select>
                    </b-form-group>
                    <b-form-group
                        label="DateOfBirth"
                        label-for="dateofbirth"
                    >
                        <datepicker
                            :state="validateDateOfBirth"
                            id="dateofbirth"
                            v-model="form.dateofbirth"
                            :class="`form-control ${validateDateOfBirth === null ? '' : (validateDateOfBirth ? 'is-valid' : 'is-invalid')}`"
                        ></datepicker>
                        <b-form-invalid-feedback :state="validateDateOfBirth" v-if="validateDateOfBirth !== null">
                            Your birthday must be larger than before 18 years.
                        </b-form-invalid-feedback>
                    </b-form-group>
                    <div class="tw-text-right">
                        <b-button
                            type="submit"
                            variant="primary"
                        >
                            Update
                        </b-button>
                    </div>
                </b-form>
            </div>
        </div>
    </div>
</template>

<style scoped>
    button.btn-primary {
        background-color: var(--bs-btn-bg);
    }
</style>

<script lang="ts" setup>
import { onMounted, reactive, ref } from 'vue'
import { genderOptions } from "@/scripts/data/constant"
import Datepicker from "vue3-datepicker"
import { useStore } from 'vuex'
import { useToast } from 'bootstrap-vue-3'
import { computed } from '@vue/reactivity'
import moment from 'moment'

const store = useStore()
const toast = useToast()
const submitted = ref(false)

onMounted(() => {
    submitted.value = false
})

onMounted(() => {
    const user = store.getters['auth/user']

    form.name = user.name
    form.gender = user.gender || 1
    form.dateofbirth = user.dateofbirth ? new Date(user.dateofbirth) : new Date()
})

const form = reactive({
    name: '',
    gender: 1,
    dateofbirth: new Date(),
    password_current: '',
    password: '',
    password_confirmation: '',
})

const validateName = computed(() => submitted.value ? (form.name.length > 2) : null)
const validateDateOfBirth = computed(() => submitted.value ? moment(form.dateofbirth).isBefore(moment().subtract(18, 'years')) : null)

const onSubmit = () => {
    submitted.value = true

    if (!validateName.value ||
        !validateDateOfBirth.value)
        return
    
    store.dispatch('auth/save', {
        name: form.name,
        gender: form.gender,
        dateofbirth: form.dateofbirth.toISOString()
    }).then((res) => {
        if (res) {
            toast?.success({body: 'Updated Success'})
        }
    })
}

const onReset = () => {
    const user = store.getters['auth/user']
    form.name = user.name
    form.gender = user.gender
    form.dateofbirth = new Date(user.dateofbirth)
}
</script>