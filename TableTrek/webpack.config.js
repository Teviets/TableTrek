const path = require('path');
const htmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");
const { VueLoaderPlugin } = require('vue-loader');
const { VuetifyPlugin } = require('webpack-plugin-vuetify')

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
        new VueLoaderPlugin(),
        new VuetifyPlugin({ autoImport: true })
        
    ],
    module: {
      rules: [
        {
            test: /\.css$/,
            use: [
              MiniCssExtractPlugin.loader,
              'css-loader'
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
        {
            test: /\.vue$/,
            loader: 'vue-loader'
        }
      ]
    },
    optimization: {
        minimizer: [new CssMinimizerPlugin(),],
    },
    resolve: {
        extensions: ['.js', '.vue', '.json']
    },
      

};