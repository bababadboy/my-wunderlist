import Vue from 'vue';
import Router from 'vue-router';
import Index from "../pages/Index";
import User from "../pages/User";
import UserActivityList from "../pages/user/UserActivityList";
import FollowerList from "../pages/user/FollowerList";
import FollowingList from "../pages/user/FollowingList";
import UserMomentList from "../pages/user/UserMomentList";
import NotificationPage from "../pages/NotificationPage";
import MomentDetails from "../pages/MomentDetails";

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
                    { path: '/user/:uid/activities',name:'userActivity', component: UserActivityList ,props:true},
                    { path: '/user/:uid/moments',name:'userMoment', component: UserMomentList ,props:true},
                    { path: '/user/:uid/following',name:'userFollowing',component: FollowingList ,props:true},
                    { path: '/user/:uid/follower',name:'userFollower',component: FollowerList ,props:true}
                ]
        },
        {
            path: '/',
            name: 'index',
            component: Index
        },


        {
            path: '/notification',
            name: 'notification',
            component: NotificationPage
        },

        {
            path:'/moment/:id',
            name:'moment',
            component:MomentDetails,
            props:true
        }
    ]
});

// 导航守卫
// 使用 router.beforeEach 注册一个全局前置守卫，判断用户是否登陆
// router.beforeEach((to, from, next) => {
//     if (to.path === '/') {
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