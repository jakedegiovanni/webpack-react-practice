const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: {
        app: ['./src/app/App.tsx', 'webpack-hot-middleware/Client'],
        vendor: ['react', 'react-dom']
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'js/[name].bundle.js'
    },
    resolve: {
        extensions: [".js", ".jsx", ".json", ".ts", ".tsx"]
    },
    devtool: "source-map",
    module: {
        rules: [
            {
                test: /\.(ts|tsx)$/,
                use: "ts-loader"
            },
            {
                enforce: "pre", test: /\.js$/, loader: "source-map-loader"
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({template: path.resolve(__dirname, 'src', 'app', 'index.html')}),
        new webpack.HotModuleReplacementPlugin()
    ]
};