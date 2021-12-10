const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require("mini-css-extract-plugin")
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin")
const path = require('path')

module.exports = {
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'js/index.bundle.js',
        publicPath: '/',
        clean: true
    },
    mode: 'production',
    module: {
        rules: [
            {
                test: /\.css$/,
                use: [
                    MiniCssExtractPlugin.loader,
                    "css-loader",
                    {
                        loader: 'postcss-loader',
                        options: {
                            postcssOptions: {
                                plugins: [
                                    [
                                        'postcss-preset-env'
                                    ]
                                ]
                            }
                        }
                    }
                ]
            },
            {
                test: /\.less$/,
                use: [
                    MiniCssExtractPlugin.loader,
                    "css-loader",
                    "less-loader",
                    {
                        loader: 'postcss-loader',
                        options: {
                            postcssOptions: {
                                plugins: [
                                    [
                                        'postcss-preset-env'
                                    ]
                                ]
                            }
                        }
                    }
                ]
            },
            {
                test: /\.(png|jpe?g|gif)$/,
                loader: 'url-loader',
                options: {
                    name: '[name].[hash:5].[ext]',
                    outputPath: 'images',
                    esModule: false,
                    limit: 8192
                },
                type: 'javascript/auto'
            },
            {
                test: /\.html$/,
                loader: "html-loader",
            },
            {
                test: /\.(eot|svg|ttf|woff|woff2)$/,
                loader: "file-loader",
                options: {
                    outputPath: 'font',
                    esModule: false
                },
                type: 'javascript/auto'
            },
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env']
                    }
                }
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './public/index.html'
        }),
        new MiniCssExtractPlugin({
            filename: "css/bundle.css"
        })
    ],
    optimization: {
        minimizer: [
            new CssMinimizerPlugin()
        ]
    }
}
