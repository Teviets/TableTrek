const path = require('path');
const htmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");

module.exports = {
    entry: {
        index: './src/main.js',
    },
    output: {
      filename: '[name].js',
      path: path.resolve(__dirname, 'dist'),
    },
    plugins: [
        new htmlWebpackPlugin({
            filename: 'index.html',
            template: './index.html',
            chunks: ['index']
        }),
        new MiniCssExtractPlugin({
            filename: '[name].css'
        }),
        new CssMinimizerPlugin(),
        
    ],
    module: {
      rules: [
        {
            test: /\.css$/,
            use: [
              MiniCssExtractPlugin.loader,
              'css-loader',
              'style-loader'
            ]
        },
        {
            test: /\.(png|jpe?g|gif|svg|webp)$/i,
            use: [
                {
                    loader: 'file-loader',
                    options: {
                        name: '[name].[ext]',
                        outputPath: 'img/'
                    }
                }
            ]
        },
      ]
    },
    optimization: {
        minimizer: [new CssMinimizerPlugin(),],
    },
    

};