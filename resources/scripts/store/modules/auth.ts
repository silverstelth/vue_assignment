import * as types from "../mutation-types"

interface UserState {
    user: object
}

export const state: UserState = {
    user: {}
}

export const getters = {
    user: (state: UserState) => state.user
}

export const mutations = {
    [types.SAVE_USER](state: UserState, payload: { name: string }) {
        state.user = { name: payload.name }
    },
    [types.LEAVE_USER](state: UserState) {
        state.user = {}
    }
}

export const actions = {
    async signin({ commit }: {commit: Function}, payload: { name: string }) {
        commit(types.SAVE_USER, payload)
        return true
    },
    async logout({ commit }: {commit: Function}) {
        commit(types.LEAVE_USER)
        return true
    }
}