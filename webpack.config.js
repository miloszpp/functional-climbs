const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const config = {
    entry: './index.js',
    resolve: {
        extensions: ['.js']
    },
    devtool: 'source-map',
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist')
    },
    context: path.resolve(__dirname, "src"),
    plugins: [
        new HtmlWebpackPlugin({
            template: 'index.html'
        })
    ],
};
module.exports = config;