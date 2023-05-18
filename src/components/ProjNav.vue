<template>
    <el-tabs v-model="activeName" @tab-click="handleClick">
        <el-tab-pane :label="`全部应用 (${label.all})`" name="first">全部应用</el-tab-pane>
        <el-tab-pane :label="`小程序应用 (${label.miniApp})`" name="second">小程序应用</el-tab-pane>
        <el-tab-pane :label="`APP应用 (${label.app})`" name="third">APP应用</el-tab-pane>
        <el-tab-pane :label="`Web应用 (${label.web})`" name="fourth">Web应用</el-tab-pane>
    </el-tabs>
</template>

<script>
export default {
    data() {
        return {
            activeName: 'first',
            label: {
                "all": 1,
                "miniApp": 0,
                "app": 0,
                "web": 0
            },
            count: {
                "all": 1
            }
        };
    },
    methods: {
        handleClick(tab, event) {
            console.log(tab, event);
        }
    }
};
</script>

<style lang="lcss" scoped>

</style>