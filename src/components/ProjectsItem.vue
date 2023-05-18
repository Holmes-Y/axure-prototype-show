<template>
    <el-row :gutter="16">
        <!-- <el-col :span="6"> -->
        <el-col :span="8" v-for="(item, index) in projects" :key="index">
            <div class="grid-content" @click="goUrl">
                <div class="wrap">
                    <h4>{{ item.name }}</h4>
                    <p>{{ item.description }}</p>
                    <p>{{ item.type }}</p>
                </div>
            </div>
        </el-col>
        {{ classify }}

    </el-row>
</template>

<script>
import { mapState, mapActions } from "vuex";
export default {
    name: "ProjectsItem",
    data() {
        return {
            projects: [],
            // classify: classify()
        };
    },
    props: {
        msg: String,
    },
    computed: {
        ...mapState(["projectInfo"]),
        // 对所有 projects 进行分类
        classify() {
            let miniApp = [], app = [], web = []
            this.projects.forEach(
                (item) => {
                    switch (item.type) {
                        case '小程序':
                            miniApp.unshift(item)
                            return miniApp;
                        case 'app':
                            app.unshift(item)
                            return app;
                        default:
                            web.unshift(item)
                            return web;
                    }
                }
            )
            return {miniApp, app, web}
        }
    },
    methods: {
        ...mapActions(["updateProjInfo"]),
        goUrl(item) {
            const params = new Date().getTime().toString().slice(9, 12)
            const itemURL = this.$store.state.projectURL + item.projectName + "index.html" + "?" + params
            // window.open(itemURL);
            console.log(this.updateProjInfo(this.projects))
            console.log('asd', this.$store.state.projectInfo);
        },
    },
    created() {
        const url = '/project.json'  // 开发环境
        // const url = 'http://223.75.204.112:808/resources/directory/project.json'  //生产环境
        fetch(url)
            .then(response => response.json())
            .then(data => this.projects = data)
            // .then(data => this.updateProjInfo(data))
        console.log('dddd', this.projects);
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
    background-color: #fff;
    border-radius: 4px;

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
