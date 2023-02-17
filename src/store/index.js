import Vue from "vue";
import Vuex from "vuex"

Vue.use(Vuex)

const store = new Vuex.Store({
    state: {
        userInfo: [
            {
                id: 1,
                name: "zs",
                password: "zs"
            },
        ]
    },
})

export default store