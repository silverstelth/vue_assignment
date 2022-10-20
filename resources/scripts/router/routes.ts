import Profile from "@/scripts/views/Profile.vue"
import Signin from "@/scripts/views/Signin.vue"

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
        meta: {
            authOnly: true
        },
        children: [
            {
                path: "/profile",
                name: "profile",
                component: Profile
            }
        ]
    }
];