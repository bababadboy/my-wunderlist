<template>
    <div>
        <div>
            关注状态：{{item.followState}}
            用户名：{{item.user.nickname}}
            关注他的:{{item.user.followers}}
            他关注的：{{item.user.following}}
            他的动态：{{item.user.moments}}
        </div>
    </div>
</template>

<script>
    export default {
        name: "FollowCard",
        props:{
            item:{
                type:Object,
                // list的中的元素为：
                //followState: 0
                // user: Object
                // avatar: null
                // email: "chendanddd@qq.com"
                // followers: 0
                // following: 1
                // gender: 2
                // moments: 0
                // nickname: "chendan"
                // uid: 10011
                // userType: 1
                // vip: 0
            }
        }
    }
</script>

<style scoped>

</style>