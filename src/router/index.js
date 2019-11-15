import Vue from 'vue';
import Router from 'vue-router';
import Index from "../pages/Index";
import User from "../pages/User";
import UserMomentList from "../pages/user/UserMomentList";
import UserThumbUpList from "../pages/user/UserThumbUpList";
import FollowerList from "../pages/user/FollowerList";
import FollowingList from "../pages/user/FollowingList";

Vue.use(Router);

const router = new Router({
    routes: [
        {
            path: '/user/:uid',
            name: 'user',
            component:User,
            props:true,
            children: [
                // 当 /user/:id 匹配成功，
                // UserHome 会被渲染在 User 的 <router-view> 中
                //     {
                //         path: '/user', name:'userMoment',component: UserMomentList,props:true
                //     },
                    { path: '/user/:uid/moments',name:'userMoment', component: UserMomentList ,props:true},
                    { path: '/user/:uid/thumbup',name:'userThumbUp' ,component: UserThumbUpList ,props:true},
                    { path: '/user/:uid/following',name:'userFollowing' ,component: FollowingList ,props:true},
                    { path: '/user/:uid/follower',name:'userFollower' ,component: FollowerList ,props:true}
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