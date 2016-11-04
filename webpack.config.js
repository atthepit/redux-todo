const path = require('path')
const webpack = require('webpack')
const validate = require('webpack-validator')

const config = {
    devtool: 'eval',
    entry: [
        'react-hot-loader/patch',
        'webpack-hot-middleware/client',
        path.join(__dirname, 'src', 'index.js'),
    ],
    output: {
        path: path.join(__dirname, 'dist'),
        filename: 'bundle.js',
        publicPath: '/static/',
    },
    module: {
        loaders: [
            {
                test: /\.jsx?$/,
                loaders: ['babel'],
                include: [path.join(__dirname, 'src')],
            },
        ],
        preLoaders: [
            {
                test: /\.jsx?$/,
                loaders: ['eslint'],
                include: [path.join(__dirname, 'src')],
            },
        ],
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
    ],
}

module.exports = validate(config)
