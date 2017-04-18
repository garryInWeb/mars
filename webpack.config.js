const path = require('path');
const webpack = require('webpack');

module.exports = {
    entry: './source/js/index.js',
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'template/default/js')
    },
    module: {
        loaders: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: 'babel-loader',
                query: {
                    presets: ['env']
                }
            }
        ]
    },
    stats: {
        colors: true
    },
    watch: true,
    devtool: 'source-map'
}

