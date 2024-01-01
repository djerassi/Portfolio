const path = require('path');
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
    entry: './src/index.js',
    output: {
        //it makes sense to change "main.js" to "[name].js" in case there are more than one input files
        filename: '[name].js',
        path: path.resolve(__dirname, 'dist'),
    },
    module:{
        rules: [
        {
            test: /\.css$/i,
            use: ['style-loader', 'css-loader'],
        },        
        {
            test: /\.(png|svg|jpg|jpeg|gif)$/i,
            type: 'asset/resource',
        },
        {
            test: /\.(ttf|eot|svg)$/,
            type: 'asset/resource',
        },
        {
            test: /\.(html)$/,
            use: ['html-loader']
         },
         {
            test: /\.(woff|woff2|eot|ttf|otf)$/i,
            type: 'asset/resource',
          }
        ]
    },
    devServer: {
        static: "./dist"
    },
    optimization: {
        runtimeChunk: "single",
    },
    resolve: {
        alias: {
          config$: './configs/app-config.js',
          react: './vendor/react-master',
        },
        extensions: ['.js', '.jsx'],
        modules: [
          'node_modules',
          'bower_components',
          'shared',
          '/shared/vendor/modules',
        ],
      },
    mode: "development",
    devtool: "inline-source-map",
    plugins: [
        new HtmlWebpackPlugin({
            template: "./src/index.html",
        }),
    ],
};