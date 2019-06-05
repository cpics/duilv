module.exports = {
    publicPath:'pc',
    pluginOptions: {
        'style-resources-loader': {
            preProcessor: 'scss',
            patterns: []
        }
    },
    chainWebpack: (config) => {
        config.resolve.alias.set('vue$', 'vue/dist/vue.js');
    }
}