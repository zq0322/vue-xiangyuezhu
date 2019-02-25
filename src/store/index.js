import Vue from "vue"
import Vuex from "vuex"
Vue.use(Vuex)
const state = {
    lists: {},
    data: {},
    cont:0,
   
}
const mutations = {
    updata(state, payload) {
        state.lists = {...payload}
    },
    add(state, payload) {
        state.data = { ...payload }
    },
    cont(state, payload){
        state.cont=payload
    }

}
export default new Vuex.Store({
    state, mutations
})
