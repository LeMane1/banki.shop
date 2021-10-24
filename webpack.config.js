const path = require('path');
const VueLoaderPlugin = require('vue-loader/lib/plugin');

module.exports = {
    entry: path.join(__dirname, 'src', 'main.js'),
    output:{
        filename: 'build.js',
        path: path.join(__dirname, 'dist'),
        publicPath: '/dist/'
    },
    module: {
        rules:[
            {
                test: /\.vue$/,
                loader: 'vue-loader'
            },
            {
                test: /\.css$/,
                use:[
                    'vue-style-loader',
                    'css-loader'
                ]
            },
            {
                test: /\.m?js$/,
                exclude: /(node_modules|bower_components)/,
                use: {
                  loader: 'babel-loader',
                  options: {
                    presets: ['@babel/preset-env']
                  }
                }
            },
            {
                test: /\.(png|jpg|gif)$/,
                use: 'file-loader'
            },
            {
                test: /\.(ttf|woff|woff2)$/,
                use: 'file-loader'
            }
        ]
    },
    plugins:[
        new VueLoaderPlugin()
    ],
    devServer: {
        historyApiFallback: true
    }
}