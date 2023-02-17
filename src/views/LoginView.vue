<template>
    <div class="login">
        <div class="wrap">
            <div>
                用户名：
                <el-input
                    placeholder="请输入您的姓名"
                    v-model="username"
                    prefix-icon="el-icon-user"
                    maxlength="10"
                    @change="checkInput()"
                >
                </el-input>
            </div>
            <div>
                密码：
                <el-input
                    placeholder="请输入密码"
                    v-model="password"
                    prefix-icon="el-icon-user"
                    maxlength="12"
                    show-password
                >
                </el-input>
            </div>
            <el-button
                class="btn-login"
                type="primary"
                @click="checkInfo"
                >确定
            </el-button>
            {{ userInfo }}
        </div>
    </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from "@/components/HelloWorld.vue";
import { mapState } from "vuex";
import { validZhcn } from "../tool/util";

export default {
    name: "LoginView",
    data() {
        return {
            username: "",
            password: "",
            
        };
    },
    methods: {
        checkInfo() {
            // console.log(this.$store.state.userInfo);
            // console.log(this.userInfo);
            this.userInfo.some((item) => {
                if (
                    this.username === item.name &&
                    this.password === item.password
                ) {
                    this.$router.push("home");
                    console.log("ok");
                }
            });
        },
        checkInput() {
            console.log('res', validZhcn(this.username));
            if(validZhcn(this.username)) {
                console.log('keyong');
                return '可用'
            }else{
                console.log('bukeyong');
                return '不可用'
            }
        },
    },
    computed: {
        ...mapState(["userInfo"]),
        
    },
    created() {},
    components: {
        // HelloWorld,
    },
};
</script>

<style lang="less" scoped>
.w240 {
    width: 400px;
}
.login {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    padding: 0 0 80px 0;
    .wrap {
        padding: 40px;
        margin: 0 auto;
        background-color: white;
        border-radius: 4px;
        width: 480px;
        height: 480px;
        box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
        span {
            display: inline-block;
            width: 72px;
        }
        div {
            margin-bottom: 8px;
        }
        .btn-login {
            margin-top: 40px;
            width: 100%;
        }
    }
}
</style>