<template>
    <div class="edit-container">
       <div class="edit-card bs">
           <div class="edit-avatar">

<!--               <div class="avatar-mask" @click="alertText('1')"></div>-->
               <div class="avatar-edit-hint">
                   <span class="hint-text">修改我的图像</span>
               </div>
               <img src="../assets/images/jay.png" alt="avatar" class="avatar-img" @click="alertText('3')">
               <label>
                   <input type="file" accept="image/jpeg,image/png" class="input-file-btn cp" @click="alertText('2')">
               </label>

           </div>


           <div class="edit-box">
               <h3 class="edit-label">用户名</h3>
               <div v-if="!textInputShown.name" class="edit-content">
                   <span>{{$store.getters.profile.nickname}}</span>
                   <span class="modify-btn cp" @click="modify('name')">修改</span>
               </div>
               <div v-if="textInputShown.name" class="edit-content">
                   <text-input :value="name" @input="handleInputName($event)"></text-input>
               </div>
               <div v-if="textInputShown.name"  class="action-btn">
                   <x-button text="保存" bg_color="#0084ff" width="60" height="35" class="save-btn ib" @click="saveName()"></x-button>
                   <x-button text="取消" bg_color="#fff" font_color="#8590a6" width="60" height="35" class="cancel-btn ib" @click="cancelName()"></x-button>
               </div>
           </div>
           <div class="edit-box">
               <h3 class="edit-label">性别</h3>
               <div class="edit-content">
                   <span>{{gender}}</span>
                   <span class="modify-btn cp" @click="modify()">修改</span>
               </div>
           </div>
           <div class="edit-box">
               <h3 class="edit-label">简介</h3>
               <div v-if="!textInputShown.selfIntro" class="edit-content">
                   <span>{{selfIntro}}</span>
                   <span class="modify-btn cp" @click="modify('selfIntro')">修改</span>
               </div>
               <div v-if="textInputShown.selfIntro" class="edit-content">
                   <text-input :value="selfIntro" @input="handleInputSelfIntro($event)"></text-input>
               </div>
               <div v-if="textInputShown.selfIntro"  class="action-btn">
                   <x-button text="保存" bg_color="#0084ff" width="60" height="35" class="ib" @click="saveSelfIntro()"></x-button>
                   <x-button text="取消" bg_color="#fff" font_color="#8590a6" width="60" height="35" class="cancel-btn ib" @click="cancelSelfIntro()"></x-button>
               </div>
           </div>
       </div>
    </div>

</template>

<script>
    import TextInput from '../components/common/TextInput'
    import XButton from '../components/common/Button'
    export default {
        name: "ProfileEdit",
        components:{
            TextInput,
            XButton
        },
        data() {
            return {
                textInputShown:{
                    name:false,
                    gender:false,
                    selfIntro:false
                },
                name:this.$store.getters.profile.nickname,
                selfIntro:'我什么也没有介绍',
                gender:'男'
            }
        },
        methods:{
            alertText(n){
                alert(n)
            },
            modify(key){
                this.textInputShown[key] = true;
            }
            ,handleInputName($event){
                this.name = $event
            },
            saveName(){
                // todo 发送请求
                this.textInputShown.name =false;
            },
            cancelName() {
                this.textInputShown.name =false;
            },
            cancelSelfIntro(){
                this.textInputShown.selfIntro =false;

            },
            saveSelfIntro(){
                // todo 发送请求
                this.textInputShown.selfIntro =false;

            }
        }

    }
</script>

<style scoped>
    .edit-container {
        width: 900px;
        height: 600px;
        margin: 20px auto;
        color: #1a1a1a;

    }

    .edit-card {
        width: 100%;
        height: 100%;
        background-color: #fff;
        position: relative;
    }

    .edit-box {
        width: 630px;
        margin: 0 0 0 210px;
        padding: 25px 0;
        border-bottom: 1px solid rgba(230,230,231,.5);
    }

    .edit-box:hover .modify-btn{
        display: inline-block;
    }

    .edit-avatar {
        width: 160px;
        height: 160px;
        border-radius: 8px;
        border: #fff 4px solid;
        position: absolute;
        left: 25px;
        top: -25px;
        /*background-image: url("../assets/images/jay.png");*/
        background-repeat: round;
    }

    .edit-avatar:hover {

    }



    .avatar-mask {
        width: 100%;
        height: 100%;
        background-color: #1a1a1a;
        opacity: 0.4;
        z-index: 1;
        position: absolute;

    }

    .edit-label {
        font-size: 15px;
        font-weight: 600;
        position: absolute;
        line-height: 36px;
    }

    .edit-content {
        width: 500px;
        padding: 0 64px 0 140px;
        line-height: 36px;
        font-size: 15px;
    }

    .modify-btn {
        padding: 0 0 0 20px;
        color: #175199;
        display: none;
    }


    .modify-input {
    }

    .cancel-btn {
        border: 1px solid #8590a6;
        margin-left: 20px;
    }


    .action-btn {
        margin: 20px 0 0 140px;
    }

    .save-btn {
        border:1px solid #0084ff;
    }

    .input-file-btn {
        width: 100%;
        height: 100%;
        opacity: 0;
        z-index: 50;
    }

    .avatar-img {
        position: absolute;
        height: 160px;
        width: 160px;
        border-radius: 4px;
        left: 0;
        opacity: 1;
        z-index: 0;
    }

    .avatar-edit-hint {
        position: absolute;
        top: 50%;
        left: 38px;
        z-index: 1;
    }

    .hint-text {
        color: #fff;
        z-index: 10;
        font-size: 15px;
    }
</style>
<style src="../assets/css/common.css"></style>