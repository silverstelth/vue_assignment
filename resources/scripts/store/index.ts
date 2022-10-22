import { ModuleNamespace } from "vite/types/hot"
import { createStore } from "vuex"
import { State } from "../@types/store"

const files: Record<string, ModuleNamespace> = import.meta.glob("./modules/*.ts", { eager: true })

const modules = {}
for (const file in files) {
    Object.assign(modules, {
        [file.replace(/(\.\/modules\/|\.ts)/g, "")]: { ...files[file], namespaced: true }
    })
}

const helpers = {
    getWindowWidth() {
        return (
            window.innerWidth ||
            document.documentElement.clientWidth ||
            document.body.clientWidth
        )
    },
}
  

export default createStore<State>({
    modules,
    state: {
        layout: {
            sidebarVisible: true
        }
    },
    mutations: {
        sidebar(state, payload) {
            if (payload.mode === "open") {
                state.layout.sidebarVisible = true
            } else if (payload.mode === "close") {
                state.layout.sidebarVisible = false
            } else if (payload.mode === "toggle") {
                state.layout.sidebarVisible = !state.layout.sidebarVisible
            }
        }
    }
})