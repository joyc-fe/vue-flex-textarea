var path = require('path');
var webpack = require('webpack');
//webpack.config.js
module.exports = {
    // 入口文件
    entry: {
        'flex-textarea': path.join(__dirname, 'src/flex-textarea.vue')
    },
    // 编译输出的文件路径
    output: {
        path: path.join(__dirname, 'dist'),
        publicPath: '/',
        library: 'flexTextarea',
        libraryTarget: 'umd',
        filename: "[name].js"
    },
    //加载器
    module: {
        loaders: [{
            test: /\.vue$/,
            exclude: /node_modules/,
            loader: 'vue-loader'
        }, {
            test: /\.css$/,
            exclude: /node_modules/,
            loader: 'style-loader!css-loader'
        }, {
            test: /\.js$/,
            exclude: /node_modules/,
            loader: 'babel'
        }]
    },
    babel: {
        presets: ['es2015', 'stage-0'],
        //plugins: ['transform-runtime']
    },
    plugins: []
};

if (process.env.NODE_ENV === 'dev') {
   // module.exports.devtool = '#eval-source-map';
} else {
  //  module.exports.plugins.push(new webpack.optimize.UglifyJsPlugin());

}