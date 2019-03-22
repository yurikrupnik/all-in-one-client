const path = require('path');
const webpack = require('webpack');
const TerserPlugin = require('terser-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer');
const dotenv = require('dotenv');
const VueLoaderPlugin = require('vue-loader/lib/plugin');

module.exports = env => {
    const isProd = env ? !!env.prod : false;
    const isDebug = env ? !!env.debug : false;

    return {
        context: path.resolve(__dirname, 'src'),
        optimization: {
            minimizer: [
                new TerserPlugin(),
                new OptimizeCSSAssetsPlugin({})
            ]
        },
        target: 'web',
        resolve: {
            extensions: ['.json', '.js', '.jsx', '.css', '.scss', '.vue'],
            alias: {
                vue: 'vue/dist/vue.js'
            }
        },
        devtool: isProd ? 'source-map' : 'eval-cheap-module-source-map',
        entry: './app.jsx',
        output: {
            filename: '[name].js',
            chunkFilename: '[name].js',
            path: path.resolve(__dirname, 'dist/assets'),
            publicPath: '/'
        },
        mode: isProd ? 'production' : 'development',
        module: {
            rules: [
                {
                    test: /\.(js|jsx)$/,
                    use: ['babel-loader'],
                    exclude: /node_modules/,
                },
                {
                    test: /\.vue$/,
                    loader: 'vue-loader'
                },
                {
                    test: /\.(html)$/,
                    use: {
                        loader: 'html-loader',
                        options: {
                            attrs: [':data-src']
                        }
                    }
                },
                {
                    test: /\.(css|scss)$/,
                    use: [
                        'css-hot-loader',
                        !isProd ? 'style-loader' : MiniCssExtractPlugin.loader,
                        {
                            loader: 'css-loader',
                            options: {
                                modules: true,
                                localIdentName: isProd ? '[hash:base64]' : '[local]--[hash:base64:5]'
                            }
                        },
                        {
                            loader: 'sass-loader'
                        }
                    ],
                },
                {
                    test: /\.ejs$/,
                    use: 'raw-loader'
                },
                {
                    test: /\.(png|jpg|gif)$/,
                    use: [
                        {
                            loader: 'file-loader',
                            options: {}
                        }
                    ]
                }
            ]
        },
        plugins: [
            new webpack.DefinePlugin({
                'process.env.DEBUG': JSON.stringify(isDebug),
                'process.env.PORT': JSON.stringify(process.env.PORT)
            }),
            new HtmlWebpackPlugin({
                template: 'index.ejs',
                filename: 'index.html',
                favicon: 'assets/favicon.ico',
                meta: {
                    charset: 'UTF-8',
                    viewport: 'width=device-width, initial-scale=1, shrink-to-fit=no'
                },
                minify: {
                    removeComments: true,
                    collapseWhitespace: true,
                    conservativeCollapse: true
                }
            }),
            new MiniCssExtractPlugin({
                // Options similar to the same options in webpackOptions.output
                // both options are optional
                filename: !isProd ? '[name].css' : '[name].[hash].css',
                chunkFilename: !isProd ? '[id].css' : '[id].[hash].css',
            }),
            new BundleAnalyzerPlugin({
                analyzerMode: 'static',
                openAnalyzer: false,
                reportFilename: 'bundles-report/index.ejs'
            }),
            new VueLoaderPlugin()
            // process.env.NODE_ENV_DOCKER ? new BundleAnalyzerPlugin({
            //     analyzerMode: 'static',
            //     openAnalyzer: false
            // }) : new BundleAnalyzerPlugin({})
        ],
        devServer: { // when not prod - NODE_ENV_DOCKER taken from docker-compose env
            // port: config.port + 1,
            open: true,
            host: process.env.NODE_ENV_DOCKER ? '0.0.0.0' : 'localhost',
            index: 'index.html',
            historyApiFallback: true
        }
    };
};
