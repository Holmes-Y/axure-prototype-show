<template>
    <div class="bg">
        <div class="container">
            <div class="left">

            </div>
            <div class="wrap">
                <div class="nav">
                    <ProjNav></ProjNav>
                </div>
                <!-- <AddProjectDialog></AddProjectDialog> -->
                <ProjectsItem></ProjectsItem>
            </div>
        </div>
    </div>
</template>
<script>
// import AddProjectDialog from '@/components/AddProjectDialog.vue';
import ProjectsItem from "../components/ProjectsItem.vue";
import ProjNav from "@/components/ProjNav.vue";
export default {
    name: "HomeView",
    components: {
        // AddProjectDialog,
        ProjectsItem,
        ProjNav,
    },
};
</script>
<style lang="less" scoped>
.bg {
    width: 100vw;
    height: 100vh;
    background-color: #000;
    display: flex;
    align-items: center;
    justify-content: center;

    .container {
        position: relative;
        width: 60vw;
        height: 70vh;
        background-color: rgba(255, 255, 255, .9);
        border-radius: 8px;

        .left {
            position: absolute;
            width: 54px;
            height: 100%;
            border-radius: 8px 0 0 8px;
            background-color: #22253f;
        }

        .wrap {
            position: absolute;
            width: calc(100% - 54px);
            height: 100%;
            left: 54px;
            position: absolute;
            padding: 24px;
        }
    }
}
</style>

