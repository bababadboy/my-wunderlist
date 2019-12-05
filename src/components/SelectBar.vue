<template>
    <div>
        <div class="user-activity-filter bs fs16 fw5">
            <div :class="['user-filter-item',selectStatus[index]?'active':'']"
                 v-for="(item,index) in list" :key="index" @click="choose(index)">
                {{item}}
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "SelectBar",
        props:{
            list:{
                type:Array,
                default:function () {
                    return ['动态','点赞','关注','粉丝']
                }
            },
            // selectStatus:{
            //     type:Array,
            //     default:function () {
            //         return [true,false,false,false]
            //     }
            // }
        },
        data(){
            return {
                selectStatus:[false,false,false,false],
            }
        },
        mounted(){
            this.initSelectStatus()
        },
        methods: {
            initSelectStatus(){
                // 根据路由决定selectBar的状态
                switch (this.$route.name) {
                    case 'userMoment':this.choose(0);break;
                    case 'userThumbUp':this.choose(1);break;
                    case 'userFollowing':this.choose(2);break;
                    case 'userFollower':this.choose(3);break;
                    default:this.choose(0);
                }
            },

            choose(index) {
                for (let i = 0; i < this.selectStatus.length; i++) {
                    this.selectStatus.splice(i,1,false)
                }
                this.selectStatus.splice(index,1,true)
                this.$emit('choose',{'index':index})
            }
        }
    }
</script>

<style scoped>
    .user-activity-filter {
        width: 100%;
        height: 45px;
        margin-bottom: 2px;
        background-color: #fff;
        display: flex;
        justify-content: flex-start;
    }

    .user-filter-item {
        /*display: inline-block;*/
        cursor: pointer;
        width: 70px;
        height: 45px;
        margin: 0 30px;
        text-align: center;
        line-height: 45px;
    }

    .active {
        color:#0084ff;
        border-bottom: solid 2px #0084ff;
    }



</style>
<style src="../assets/css/common.css"></style>