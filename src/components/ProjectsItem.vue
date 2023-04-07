<template>
    <el-row :gutter="20">
        <el-col :span="6" v-for="(item, index,) in projects" :key="index">
            <div class="grid-content bg-purple">
                <div class="wrap" @click="goUrl(item, index)">
                    <p>index{{ item.index }}</p>
                    <h4>{{ item.projectName }}</h4>
                    <p>{{ item.appType }}</p>
                    <p>{{ item.discription }}</p>
                </div>
            </div>
        </el-col>
    </el-row>
</template>

<script>
import { mapState } from "vuex";
export default {
    name: "ProjectsItem",
    data() {
        return {
            projects: [],
        };
    },
    props: {
        msg: String,
    },
    computed: {
        ...mapState(["projectInfo"]),
    },
    methods: {
        goUrl(item, index) {
            // console.log(this.$store.state.projectURL);
            // console.log(item.projectName);
            const itemURL = this.$store.state.projectURL + item.projectName + "index.html"
            // console.log(itemURL);
            window.open(itemURL)
        },
    },
    mounted() {
        // console.log('dss',this.projectInfo)
        this.projects = this.projectInfo;
    },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
.el-row {
    margin-bottom: 20px;
    &:last-child {
        margin-bottom: 0;
    }
}
.el-col {
    border-radius: 4px;
}
.bg-purple-dark {
    background: #99a9bf;
}
.bg-purple {
    background: #d3dce6;
}
.bg-purple-light {
    background: #e5e9f2;
}
.grid-content {
    border-radius: 4px;
    min-height: 36px;
    .wrap {
        padding: 16px;
        text-align: left;
        cursor: pointer;
        h4 {
            font-size: 16px;
            line-height: 18px;
            padding-bottom: 12px;
        }
        p {
            font-size: 14px;
            line-height: 16px;
            color: #99a9bf;
        }
    }
}
.row-bg {
    padding: 10px 0;
    background-color: #f9fafc;
}
</style>
