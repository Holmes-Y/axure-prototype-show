<template>
    <el-container class="card">
        <el-form ref="form" :model="form" :rules="rules" :label-position="labelPosition" size="small">
            <label>Username</label>
            <el-form-item size="small" prop="name">
                <el-input class="form-input" v-model="form.name"></el-input>
            </el-form-item>
            <label>Password</label>
            <el-form-item prop="password" size="small">
                <el-input class="form-input" v-model="form.password" type="password"  autocomplete="off"></el-input>
            </el-form-item>
            <el-form-item>
                <el-button class="form-button" type="primary" size="small" @click="submitForm('form')">Submit</el-button>
            </el-form-item>
        </el-form>
    </el-container>
</template>

<script>
    export default {
        name: "LoginPage",
        data () {
            let validateName = (rule, value, callback) => {
                if (value === '') {
                    callback(new Error('Please input valid username'));
                } else {
                    if (this.form.name !== '') {
                        this.$refs.form.validateField('name');
                    }
                    callback();
                }
            };
            let validatePassword = (rule, value, callback) => {
                if (value === '') {
                    callback(new Error('Please input valid password'));
                } else {
                    if (this.form.password !== '') {
                        this.$refs.form.validateField('password');
                    }
                    callback();
                }
            };
            return {
                labelPosition: 'top',
                form: {
                    name: '',
                    password: '',
                },
                rules: {
                    name: [
                        { validator: validateName, trigger: 'blur' },
                        { min: 2, max: 15, message: 'Length should be between 2 to 15', trigger: 'blur' }
                    ],
                    password: [
                        { validator: validatePassword, trigger: 'blur' }
                    ]
                }
            }
        },
        methods: {
            submitForm(formName) {
                this.$refs[formName].validate((valid) => {
                    if (valid) {
                        alert('yes');
                    } else {
                        return false;
                    }
                });
            }
        }
    }
</script>