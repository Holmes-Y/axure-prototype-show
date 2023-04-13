import Vue from "vue";
import Vuex from "vuex"

Vue.use(Vuex)

const store = new Vuex.Store({
    state: {
        userInfo: [
            { id: 1, name: "杨博文", password: "yangbowen" },
        ],
        projectInfo: [
            { projectName: "汉江国投看地云-小程序", appType: "小程序", discription: "看地小程序" },
        ],
        projectURL: "http://223.75.204.112:808/resources/"
    },
    mutations: {
        // 添加一个项目
        addProjectInfo(state, info) {
            state.projectInfo.push(info)
        }
    },
})

export default store