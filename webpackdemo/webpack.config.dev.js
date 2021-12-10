const HtmlWebpackPlugin = require('html-webpack-plugin')
const path = require('path')

module.exports = {
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'js/index.bundle.js',
        publicPath: '/',
        clean: true
    },
    mode: 'development',
    module: {
        rules: [
            {
                test: /\.css$/,
                use: ["style-loader", "css-loader"]
            },
            {
                test: /\.less$/,
                use: ["style-loader", "css-loader", "less-loader"]
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
                    outputPath: 'font'
                },
                type: 'javascript/auto'
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './public/index.html'
        })
    ],
    devServer: {
        compress: true,
        port: 3000,
        hot: true,
        open: true
    }
}
