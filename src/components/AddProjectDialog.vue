<template>
    <div class="btn-wrap">
        <el-button type="primary" @click="dialogFormVisible = true"
            >添加项目</el-button
        >
        <div style="margin: 20px"></div>
        <el-dialog title="添加项目" :visible.sync="dialogFormVisible" @close="reset">
            <el-form label-width="80px" :model="formLabelAlign" ref="formInfo">
                <el-form-item label="项目名称" prop="region">
                    <el-input v-model="formLabelAlign.region"></el-input>
                </el-form-item>
                <el-form-item label="应用类型" prop="value">
                    <el-select
                        style="width: 100%"
                        v-model="formLabelAlign.value"
                        placeholder="请选择"
                    >
                        <el-option
                            v-for="item in formLabelAlign.options"
                            :key="item.value"
                            :label="item.label"
                            :value="item.value"
                        >
                        </el-option>
                    </el-select>
                </el-form-item>
                <el-form-item label="项目说明" prop="discription">
                    <el-input v-model="formLabelAlign.discription"></el-input>
                </el-form-item>
            </el-form>
            <div slot="footer" class="dialog-footer">
                <el-button @click="dialogFormVisible = false">取 消</el-button>
                <el-button type="primary" @click="submitForm"
                    >确 定</el-button
                >
            </div>
        </el-dialog>
    </div>
</template>

<script>
export default {
    data() {
        return {
            formLabelAlign: {
                name: "",
                region: "",
                discription: "",
                options: [
                    {
                        value: "小程序",
                        label: "",
                    },
                    {
                        value: "APP",
                        label: "",
                    },
                    {
                        value: "Web",
                        label: "",
                    },
                ],
                value: "",
            },
            dialogFormVisible: false,
            formLabelWidth: "120px",
        };
    },
    methods: {
        reset() {
            // console.log("reset" ,this.$refs["formInfo"]);
            this.$refs["formInfo"].resetFields()
        },
        submitForm() {
            let info = {}
            info.projectName = this.formLabelAlign.region
            info.appType = this.formLabelAlign.value
            info.discription = this.formLabelAlign.discription
            // console.log(info);
            this.$store.commit("addProjectInfo", info)
            this.dialogFormVisible = false
        }
    }
};
</script>

<style>
</style>