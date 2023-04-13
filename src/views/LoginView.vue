<template>
    <div class="login">
        <div class="wrap">
            <el-form ref="form" :model="form" :rules="rules" label-width="80px">
                <el-form-item label="用户名" prop="userName">
                    <el-input
                        v-model="form.userName"
                        maxlength="4"
                        minlength="1"
                        placeholder="请输入"
                    ></el-input>
                </el-form-item>
                <el-form-item label="密码" prop="pass">
                    <el-input
                        type="password"
                        v-model="form.password"
                        autocomplete="off"
                        placeholder="请输入"
                        show-password
                    ></el-input>
                </el-form-item>
                <el-form-item>
                    <el-button type="primary" @click="onSubmit()"
                        >立即登录</el-button
                    >
                </el-form-item>
            </el-form>
            <!-- <div>
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
            </div> -->
            <!-- <el-button class="btn-login" type="primary" @click="checkInfo"
                >确定
            </el-button> -->
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
        let validatePass = (rule, value, callback) => {
            if (value === "") {
                callback(new Error("请输入密码"));
            } else {
                callback();
            }
        };
        let validateName = (rule, value, callback) => {
            if (value === "") {
                callback(new Error("请输入中文姓名"));
            } else {
                if (!validZhcn(this.form.userName)) {
                    callback(new Error("必须为真实中文姓名"));
                }
            }
        };
        return {
            form: {
                userName: "",
                password: "",
            },
            rules: {
                userName: [{ validator: validateName, trigger: "blur" }],
                pass: [{ validator: validatePass, trigger: "blur" }],
            },
        };
    },
    methods: {
        onSubmit() {
            this.userInfo.some((item) => {
                if (
                    this.form.userName === item.name &&
                    this.form.password === item.password
                ) {
                    this.$router.push("home");
                }
            });
        },
    },
    computed: {
        ...mapState(["userInfo"]),
    },
    created() {
        console.log(this.userInfo);
    },
    components: {},
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
        .btn-login {
            margin-top: 40px;
            width: 100%;
        }
    }
}
</style>