import Vue from 'vue';
import Vuex from 'vuex';
Vue.use(Vuex);

const state={
    // loginStatus:false,
    Authorization: localStorage.getItem('Authorization') ? localStorage.getItem('Authorization') : '',
    profile: localStorage.getItem('userInfo') ? localStorage.getItem('userInfo') : '{}'
};

const getters = {
    getUserAuth: (state)=>{
        return state.Authorization;
    },
    // getUserLoginStatus: (state)=>{
    //     return state.loginStatus;
    // }
    // 登录的装填，有Authorization，登录成功
    authStatus(state) {
        return state.Authorization?true:false;
    },
    profile(state){
        let pf = JSON.parse(state.profile)
        return  pf;
    }

};

const mutations = {
    // changeLoginStatus(state,status){
    //     state.loginStatus = status;
    // }
    setAuth(state,auth){
        state.Authorization = auth.Authorization;
        localStorage.setItem('Authorization',state.Authorization);
    },
    setProfile(state,user){
        state.profile = JSON.stringify(user);
        // 字符串化存储user对象
        localStorage.setItem('userInfo',JSON.stringify(user));
    },
    removeAuth(state){
        localStorage.removeItem('Authorization');
        localStorage.removeItem('userInfo');
        state.Authorization = '';
        state.userProfile = '{}';
    }
};

const actions ={
    // setLoginStatus(context){
    //     context.commit('changeLoginStatus')
    // }
    setAuthorization(context,auth){
        context.commit('setAuth',auth)
    },
    setProfile(context,user){
        context.commit('setProfile',user);
    },
    removeAuth(context){
        context.commit('removeAuth')
    }
};

const store = new Vuex.Store({
    state,
    getters,
    mutations,
    actions
});

export default store;