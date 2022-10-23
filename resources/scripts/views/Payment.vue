<template>
    <div class="tw-p-8">
        <b-container :toast="{root: true}" fluid="sm" position="position-fixed" id="toastr-container"></b-container>
        <h1 class="tw-text-4xl tw-font-medium">Payment</h1>
        <div class="tw-grid tw-mt-6 tw-gap-6">
            <div class="tw-bg-white tw-rounded tw-p-5">
                <h2 class="tw-text-xl tw-font-medium tw-py-5 tw-flex tw-justify-between">
                    Pay with card
                    <div class="tw-flex">
                        <img src="/icons/mastercard-curved-32px.png" alt="">
                        <img src="/icons/visa-curved-32px.png" alt="">
                    </div>
                </h2>
                <b-form 
                    class="needs-validation"
                    @submit="onSubmit"
                >
                    <b-form-group
                        label="Email"
                        label-for="email"
                    >
                        <b-form-input
                            id="email"
                            :state="validateEmail"
                            v-model="form.email"
                        ></b-form-input>
                    </b-form-group>
                    <b-form-group
                        label="Card Number"
                        label-for="card_number"
                    >
                        <b-input-group>
                            <b-form-input 
                                id="card_number"
                                placeholder="4242 4242 4242 4242"
                                class="form-control"
                                :state="validateCardNumber"
                                v-model="form.card_number"
                                v-cardformat:formatCardNumber
                            ></b-form-input>
                            <b-input-group-text>
                                <i class="fa-brands fa-cc-visa"></i>
                            </b-input-group-text>
                        </b-input-group>
                    </b-form-group>
                    <b-form-group
                        label="Expiry/CVC"
                        label-for="expiry"
                    >
                        <b-input-group>
                            <b-form-input
                                id="expiry"
                                placeholder="12/2022"
                                :state="validateExpiry"
                                v-model="form.expiry"
                                v-cardformat:formatCardExpiry
                            ></b-form-input>
                            <b-form-input
                                id="cvc"
                                placeholder="123"
                                :state="validateCVC"
                                v-model="form.cvc"
                                v-cardformat:formatCardCVC
                            ></b-form-input>
                            <b-input-group-text>
                                <i class="far fa-credit-card"></i>
                            </b-input-group-text>
                        </b-input-group>
                    </b-form-group>
                    <b-form-group
                        label="Name on card(Optional)"
                        label-for="name_on_card"
                    >
                        <b-form-input
                            id="email"
                            v-model="form.name_on_card"
                        ></b-form-input>
                    </b-form-group>
                    <b-form-group
                        label="Country"
                        label-for="country"
                    >
                        <b-form-select
                            id="country"
                            v-model="form.country"
                            :options="countryOptions"
                        ></b-form-select>
                    </b-form-group>
                    <div class="tw-text-right">
                        <b-button
                            type="submit"
                            variant="primary"
                        >
                            Pay Now
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
import { computed, onMounted, reactive, ref } from 'vue'
import { countryOptions } from '@/scripts/data/constant'
import { useToast } from 'bootstrap-vue-3'

const toast = useToast()
const submitted = ref(false)

onMounted(() => {
    submitted.value = false
})

const form = reactive({
    email: '',
    card_number: '',
    expiry: '',
    cvc: '',
    name_on_card: '',
    country: 'usa'
})

const validateEmail = computed(() => submitted.value ? (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(form.email)) : null)
const validateCardNumber = computed(() => submitted.value ? /^(\d{4}\s*){4}$/.test(form.card_number) : null)
const validateExpiry = computed(() => submitted.value ? /^\d{2} \/ \d{4}$/.test(form.expiry) : null)
const validateCVC = computed(() => {
    if (form.cvc.length > 4) {
        form.cvc = form.cvc.substring(0, 4)
    }
    return submitted.value ? /^\d{4}$/.test(form.cvc) : null
})

const onSubmit = () => {
    submitted.value = true
    if (!validateEmail.value ||
        !validateCardNumber.value ||
        !validateExpiry.value ||
        !validateCVC.value
    )
        return

    toast?.success({body: 'Paid Successfully'})
}
</script>
