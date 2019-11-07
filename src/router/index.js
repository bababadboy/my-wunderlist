import Vue from 'vue';
import Router from 'vue-router';
import Index from "../pages/Index";
import User from "../pages/User";
import UserMomentList from "../pages/user/UserMomentList";
import UserThumbUpList from "../pages/user/UserThumbUpList";

Vue.use(Router);

const router = new Router({
    routes: [
        {
            path: '/user',
            name: 'user',
            component:User,
            children: [
                // 当 /user/:id 匹配成功，
                // UserHome 会被渲染在 User 的 <router-view> 中
                //     {
                //         path: '/user', name:'userMoment',component: UserMomentList,props:true
                //     },
                    { path: '/moments',name:'userMoment', component: UserMomentList ,props:true},
                    { path: '/thumbup',name:'userThumbUp' ,component: UserThumbUpList ,props:true}
                ]
        },
        {
            path: '/',
            name: 'index',
            component: Index
        },


        // {
        //     path: '/home',
        //     name: 'home',
        //     component: home
        // }
    ]
});

// 导航守卫
// 使用 router.beforeEach 注册一个全局前置守卫，判断用户是否登陆
// router.beforeEach((to, from, next) => {
//     if (to.path === '/login') {
//         next();
//     } else {
//         let token = localStorage.getItem('Authorization');
//
//         if (token === 'null' || token === '') {
//             next('/login');
//         } else {
//             next();
//         }
//     }
// });

export default router;