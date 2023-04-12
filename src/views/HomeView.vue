<template>
    <el-container>
        <el-aside width="200px">Aside</el-aside>
        <el-container>
            <el-header>Header</el-header>
            <el-main>
                <AddProjectDialog></AddProjectDialog>
                <ProjectsItem></ProjectsItem>
            </el-main>
        </el-container>
    </el-container>
</template>
<script>
import AddProjectDialog from '@/components/AddProjectDialog.vue';
import ProjectsItem from "../components/ProjectsItem.vue";
export default {
    name: "HomeView",
    components: {
        AddProjectDialog,
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

