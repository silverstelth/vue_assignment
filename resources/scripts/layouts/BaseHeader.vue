<template>
    <header id="page-header">
        <slot>
            <div class="tw-h-16 tw-px-5 tw-flex tw-flex-row-reverse">
				<div class="tw-flex tw-items-center">
					<b-dropdown
						size="sm"
						right
						no-caret
						ref="oneDropdownDefaultUser"
						toggle-class="tw-bg-gray-500"
					>
						<template #button-content>
							<div class="tw-flex tw-items-center tw-text-base">
								<img
									class="tw-rounded-full"
									src="/img/avatars/avatar0.jpg"
									alt="Header Avatar"
									style="width: 21px"
								/>
								<span
									class="tw-ml-2"
									v-text="user.name"
								></span>
								<i
									class="
										fa fa-fw fa-angle-down
										tw-ml-1
										tw-mt-1
									"
								></i>
							</div>
						</template>
						<b-dropdown-group
							header-class="tw-bg-gray-600 tw-text-center"
							class="tw-p-2 tw-font-medium"
						>
							<template #header>
								<img
									class="
										tw-w-12 tw-h-12 tw-rounded-full tw-mx-auto
									"
									src="/img/avatars/avatar0.jpg"
									alt="Avatar"
								/>
								<p
									class="tw-mt-2 tw-text-white"
									v-text="user.name"
								></p>
							</template>
							<b-dropdown-item 
								:to="{path: '/profile'}"
								link-class="tw-font-medium tw-px-3 tw-py-2"
							>
								<i class="far fa-user-circle tw-mr-2"></i>Profile
							</b-dropdown-item>
							<b-dropdown-item 
								:to="{path: '/payment'}"
								link-class="tw-font-medium tw-px-3 tw-py-2"
							>
								<i class="far fa-credit-card tw-mr-2"></i>Payment
							</b-dropdown-item>
							<b-dropdown-divider></b-dropdown-divider>
							<b-dropdown-item-button
								@click="logout"
								link-class="tw-font-medium tw-px-3 tw-py-2"
							>
								<i class="fa fa-power-off tw-mr-2"></i>Log out
							</b-dropdown-item-button>
						</b-dropdown-group>
					</b-dropdown>
				</div>
			</div>
        </slot>
    </header>
</template>

<script lang="ts">
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import { mapGetters, useStore } from 'vuex';

export default {
    name: "BaseHeader",
	computed: {
		...mapGetters({
			user: 'auth/user',
		})
	},
	setup() {
		const store = useStore()
		const router = useRouter()
		const oneDropdownDefaultUser = ref()

		return {
			oneDropdownDefaultUser,
			logout() {
				store.dispatch('auth/logout')
					.then(res => {
						if (res) {
							router.push('login')
						}
					})
			}
		}
	}
}
</script>