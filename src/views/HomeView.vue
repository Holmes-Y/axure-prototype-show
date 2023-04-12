<template>
    <el-container>
        <el-aside width="200px">Aside</el-aside>
        <el-container>
            <el-header>Header</el-header>
            <el-main>
                <div class="btn-wrap">
                    <el-button type="primary" @click="open">添加项目</el-button>
                    <div style="margin: 20px"></div>
                    <el-form label-width="80px" :model="formLabelAlign">
                        <el-form-item label="项目名称">
                            <el-input
                                v-model="formLabelAlign.region"
                            ></el-input>
                        </el-form-item>
                        <el-form-item label="应用类型">
                            <el-select
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
                        <el-form-item label="项目说明">
                            <el-input v-model="formLabelAlign.type"></el-input>
                        </el-form-item>
                    </el-form>
                </div>
                <ProjectsItem></ProjectsItem>
            </el-main>
        </el-container>
    </el-container>
</template>
<script>
import ProjectsItem from "../components/ProjectsItem.vue";
export default {
    name: "HomeView",
    data() {
        return {
            formLabelAlign: {
                name: "",
                region: "",
                type: "",
                options: [
                    {
                        value: "选项1",
                        label: "小程序",
                    },
                    {
                        value: "选项2",
                        label: "APP",
                    },
                    {
                        value: "选项3",
                        label: "Web",
                    },
                ],
                value: "",
            },
        };
    },
    methods: {
        open() {
            const h = this.$createElement;
            this.$msgbox({
                title: "添加项目",
                message: h("p", null, [
                    h("span", null, "内容可以是 "),
                    h("i", { style: "color: teal" }, "VNode"),
                ]),
                showCancelButton: true,
                confirmButtonText: "确定",
                cancelButtonText: "取消",
                beforeClose: (action, instance, done) => {
                    if (action === "confirm") {
                        instance.confirmButtonLoading = true;
                        instance.confirmButtonText = "执行中...";
                        setTimeout(() => {
                            done();
                            setTimeout(() => {
                                instance.confirmButtonLoading = false;
                            }, 300);
                        }, 3000);
                    } else {
                        done();
                    }
                },
            }).then((action) => {
                this.$message({
                    type: "info",
                    message: "action: " + action,
                });
            });
        },
    },
    components: {
        ProjectsItem,
    },
};
</script>
<style lang="less" scoped>
.el-header,
.el-footer {
    background-color: #b3c0d1;
    color: #333;
    text-align: center;
    line-height: 60px;
}

.el-aside {
    height: 100vh;
    background-color: #d3dce6;
    color: #333;
    text-align: center;
}

.el-main {
    background-color: #e9eef3;
    color: #333;
    text-align: left;
    // line-height: 160px;
}

.btn-wrap {
    margin-bottom: 16px;
}
body > .el-container {
    margin-bottom: 40px;
}

.el-container:nth-child(5) .el-aside,
.el-container:nth-child(6) .el-aside {
    line-height: 260px;
}

.el-container:nth-child(7) .el-aside {
    line-height: 320px;
}
</style>

