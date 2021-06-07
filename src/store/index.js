import Vue from "vue";
import Vuex from "vuex";
Vue.use(Vuex);

import {state,mutations,getters} from "./mutations";
import actions from "./actions";
// import menuManage from "./modules/menuManage";



export default new Vuex.Store({
    state,
    mutations,
    actions,
    getters,
    modules:{
        // menuManage,
    }
});