import Vue from "vue";
import Vuex from "vuex"

Vue.use(Vuex)

const store = new Vuex.Store({
    state: {
        userInfo: [
            { id: 1, name: "zs", password: "zs" },
        ],
        projectInfo: [
            { projectName: "汉江国投看地云", appType: "小程序", discription: "看地小程序" },
        ],
        projectURL: "http://223.75.204.112:808/resources/"
    },
    mutations: {
        addProjectInfo(state, info) {
            state.projectInfo.push(info)
        }
    },
})

export default store