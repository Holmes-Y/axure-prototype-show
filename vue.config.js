const { defineConfig } = require("@vue/cli-service");
module.exports = defineConfig({
    transpileDependencies: true,

    // 关闭 ESlint
    lintOnSave: false,

    devServer: {
        proxy: {
            // 和自定义的 baseURL 保持一致
            '/api': {
                target: 'http://223.75.204.112:808/',
                changeOrigin: true,
                pathRewrite: { '^/api': '' },
            }
        }
    },
});

