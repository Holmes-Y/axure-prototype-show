import Vue from "vue";
import Vuex from "vuex"

Vue.use(Vuex)

const store = new Vuex.Store({
    state: {
        userInfo: [
            { id: 1, name: "杨博文", password: "yangbowen" },
        ],
        projectInfo: [],
    },
    mutations: {
        // 同步 json 数据
        updateProjInfo(state, info) {
            state.projectInfo = info
        }
    },
    actions: {
        // 触发更新
        updateProjInfo({commit}){
            commit('updateProjInfo')
        }
    }
})

export default store