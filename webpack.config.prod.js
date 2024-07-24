const path = require('path');
const Dotenv = require('dotenv-webpack');
const { merge } = require('webpack-merge');
const baseConfig = require('./webpack.config.js');


const envConfig = {
    mode: 'production',
    entry: {
        bundle: path.resolve(__dirname, 'src/index.tsx')
    },
    plugins: [
        new Dotenv({
            path: path.resolve(__dirname, '.env.prod'), 
        }),
    ],
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: '[name].js',
        clean: true,
        assetModuleFilename: '[name][ext]',
        publicPath: '/'
    },

};

module.exports = merge(baseConfig, envConfig);

