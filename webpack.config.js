const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');


module.exports = {
    
    resolve: {
        extensions: ['.ts', '.tsx', '.js'],
    },
    module: {
        rules: [
            {
                test: /\.scss$/,
                use: ['style-loader', 'css-loader', 'sass-loader']
            },
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader'],
            },
            {
                test: /\.tsx?$/,
                use: 'ts-loader',
                exclude: /node_modules/,
            },
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env', '@babel/preset-react']
                    }
                }
            },
            {
                test: /\.(png|jpg|gif|svg)$/i,
                type: 'asset/resource',

            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: 'VGym App',
            filename: 'index.html',
            template: 'src/index.html',
        }),
    ],


}