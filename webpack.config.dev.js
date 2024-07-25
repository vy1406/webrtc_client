const path = require('path');
const Dotenv = require('dotenv-webpack');
const { merge } = require('webpack-merge');
const baseConfig = require('./webpack.config.js');


const envConfig = {
    devtool: 'source-map',
    mode: 'development',
    entry: './src/index.tsx',
    devServer: {
        historyApiFallback: true,
        // static: {
        //     directory: path.resolve(__dirname, 'dist'),
        // },
        port: 3000,
        hot: true,
        compress: true,
        open: true,
    },
    plugins: [
        new Dotenv({
            path: path.resolve(__dirname, '.env.dev'),
        }),

    ],

};

module.exports = merge(baseConfig, envConfig);

