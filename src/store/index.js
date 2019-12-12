import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

const state={
    // loginStatus:false,
    Authorization: localStorage.getItem('Authorization') ? localStorage.getItem('Authorization') : '',
    profile: localStorage.getItem('userInfo') ? localStorage.getItem('userInfo') : '{}',
    navItemState: [false,false,false],
};

const getters = {
    getUserAuth: (state)=>{
        return state.Authorization;
    },
    // 登录的装填，有Authorization，登录成功
    authStatus(state) {
        return state.Authorization?true:false;
    },
    profile(state){
        let pf = JSON.parse(state.profile)
        return  pf;
    },
    navItemState (state) {
        return state.navItemState
    },


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
    // 删除认证信息和登录信息
    removeAuth(state){
        localStorage.removeItem('Authorization');
        localStorage.removeItem('userInfo');
        state.Authorization = '';
        state.userProfile = '{}';
    },
    changeNavItemState(state,newState){
        for (let i = 0; i < state.navItemState.length; i++) {
            state.navItemState.splice(i,1,newState[i])
        }
    }
};

const actions ={

    setAuthorization(context,auth){
        context.commit('setAuth',auth)
    },
    setProfile(context,user){
        context.commit('setProfile',user);
    },
    removeAuth(context){
        context.commit('removeAuth')
    },
    changeNavItemState(context) {
        context.commit('changeNavItemState')
    }

};

const store = new Vuex.Store({
    state,
    getters,
    mutations,
    actions
});

export default store;