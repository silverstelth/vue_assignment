import BaseLayout from "@/scripts/layouts/BaseLayout.vue"
import Profile from "@/scripts/views/Profile.vue"
import Signin from "@/scripts/views/Signin.vue"
import Payment from "@/scripts/views/Payment.vue"

export default [
    {
        path: "/",
        meta: {
            guestOnly: true
        },
        children: [
            {
                path: "/login",
                name: "login",
                component: Signin,
            }
        ]
    },
    {
        path: "/",
        component: BaseLayout,
        meta: {
            authOnly: true
        },
        children: [
            {
                path: "/profile",
                name: "profile",
                component: Profile
            },
            {
                path: "/payment",
                name: "payment",
                component: Payment
            }
        ]
    },
];