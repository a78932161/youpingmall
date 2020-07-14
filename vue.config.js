const CompressionWebpackPlugin = require('compression-webpack-plugin');
const productionGzipExtensions = ['js', 'css'];
const isProduction = process.env.NODE_ENV === 'production';

module.exports = {

    publicPath: "./", // 构建好的文件输出到哪里

    outputDir: "dist", // where to put static assets (js/css/img/font/...) // 是否在保存时使用‘eslint-loader’进行检查 // 有效值: true | false | 'error' // 当设置为‘error’时，检查出的错误会触发编译失败

    lintOnSave: false, // 使用带有浏览器内编译器的完整构建版本 // https://vuejs.org/v2/guide/installation.html#Runtime-Compiler-vs-Runtime-only

    runtimeCompiler: false, // babel-loader默认会跳过`node_modules`依赖. // 通过这个选项可以显示转译一个依赖

    transpileDependencies: [
        /* string or regex */
    ], // 是否为生产环境构建生成sourceMap?

    productionSourceMap: false, // 调整内部的webpack配置. // see https://github.com/vuejs/vue-cli/blob/dev/docs/webpack.md


    chainWebpack: config => {

        // 一个规则里的 基础Loader
        // svg是个基础loader
        const svgRule = config.module.rule('svg')
        // 清除已有的所有 loader。
        // 如果你不这样做，接下来的 loader 会附加在该规则现有的 loader 之后。
        svgRule.uses.clear()

        // 添加要替换的 loader
        svgRule
            .use('svg-sprite-loader')
            .loader('svg-sprite-loader')
            .options({
                symbolId: 'icon-[name]'
            })
    },


    configureWebpack: config => {

        if (isProduction) {
            // 开启分离js
            config.optimization = {
                runtimeChunk: 'single',
                splitChunks: {
                    chunks: 'all',
                    maxInitialRequests: Infinity,
                    minSize: 20000,
                    cacheGroups: {
                        vendor: {
                            test: /[\\/]node_modules[\\/]/,
                            name(module) {
                                // get the name. E.g. node_modules/packageName/not/this/part.js
                                // or node_modules/packageName
                                const packageName = module.context.match(/[\\/]node_modules[\\/](.*?)([\\/]|$)/)[1]
                                // npm package names are URL-safe, but some servers don't like @ symbols
                                return `npm.${packageName.replace('@', '')}`
                            }
                        }
                    }
                }
            };
            // 开启GZIP
            config.plugins.push(new CompressionWebpackPlugin({
                algorithm: 'gzip',
                test: /\.js$|\.html$|\.css$|\.jpg$|\.jpeg$|\.png/,
                deleteOriginalAssets: false,
                threshold: 10240,
                minRatio: 0.8,
            }))
            //DNS加速
            // config.externals = {
            //     'vue': 'Vue',
            //     'vue-router': 'VueRouter',
            //     'moment': 'moment'
            // }
        }

        return {
            resolve: {
                alias: {
                    'assets': '@/assets',
                    'components': '@/components',
                    'views': '@/views',
                    'field': '@/field',
                    'common': '@/common',
                    'base': '@/base',
                    'api': '@/api',
                    'store': '@/store',
                    'plugins': '@/plugins'
                }
            }
        }
    },

    parallel: require("os").cpus().length > 1, // PWA 插件相关配置 // see https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-pwa

    pwa: {}, // configure webpack-dev-server behavior

    devServer: {
        open: process.platform === "darwin",

        disableHostCheck: false,

        host: "0.0.0.0",

        port: 8088,

        https: false,

        hotOnly: false, // See https://github.com/vuejs/vue-cli/blob/dev/docs/cli-service.md#configuring-proxy

        proxy: null, // string | Object

        // before: app => {}
    }, // 第三方插件配置

    pluginOptions: {},
};