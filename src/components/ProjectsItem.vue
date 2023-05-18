<template>
    <el-row :gutter="20">
        <!-- <el-col :span="6"> -->
        <el-col :span="6" v-for="(item, index) in projects" :key="index">
            <div class="grid-content bg-purple">
                <div class="wrap">
                    <p>index{{ item.index }}</p>
                    <h4>{{ item.name }}</h4>
                    <p>{{ item.description }}</p>
                    <p>{{ item.type }}</p>
                </div>
            </div>
        </el-col>
    </el-row>
</template>

<script>
import { mapState } from "vuex";
import axios from "axios"
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
        goUrl(item) {
            const params = new Date().getTime().toString().slice(9, 12)
            // console.log(this.$store.state.projectURL);
            // console.log(item.projectName);
            const itemURL = this.$store.state.projectURL + item.projectName + "index.html" + "?" + params
            // console.log(itemURL);
            window.open(itemURL);
        },
    },
    created() {
        // 开发环境
        fetch('/project.json')
            .then(response => response.json())
            .then(data => this.projects = data)
        console.log('dddd', this.projects);

        // 生产环境
        // fetch('http://223.75.204.112:808/resources/directory/project.json')
        //     .then(response => response.json())
        //     .then(data => this.projects = data)
        // console.log('dddd', this.projects);
        
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
