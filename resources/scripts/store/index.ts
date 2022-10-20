import { ModuleNamespace } from "vite/types/hot"
import { createStore } from "vuex"

const files: Record<string, ModuleNamespace> = import.meta.glob("./modules/*.ts", { eager: true })

const modules = {}
for (const file in files) {
    Object.assign(modules, {
        [file.replace(/(\.\/modules\/|\.ts)/g, "")]: { ...files[file], namespaced: true }
    })
}

export default createStore({
    modules
})