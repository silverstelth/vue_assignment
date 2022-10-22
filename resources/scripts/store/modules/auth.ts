import * as types from "../mutation-types"
import { User, UserState } from "@/scripts/@types/store"
import { Commit, Payload } from "vuex"

export const state: UserState = {
    user: {}
}

export const getters = {
    user: (state: UserState) => state.user
}

export const mutations = {
    [types.SAVE_USER](state: UserState, payload: Payload) {
        state.user = payload
    },
    [types.LEAVE_USER](state: UserState) {
        state.user = {}
    }
}

export const actions = {
    async save({ commit }: {commit: Commit}, payload: Payload) {
        commit(types.SAVE_USER, payload)
        return true
    },
    async logout({ commit }: {commit: Commit}) {
        commit(types.LEAVE_USER)
        return true
    }
}