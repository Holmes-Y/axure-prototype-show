const { defineConfig } = require("@vue/cli-service");
module.exports = defineConfig({
    transpileDependencies: true,

    // 关闭 ESlint
    lintOnSave: false,

    // build 后打开 index.html 空白
    publicPath : process.env.NODE_ENV === 'production' ? './' : '/'
});

