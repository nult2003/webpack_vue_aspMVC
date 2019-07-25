"use strict";
//const path = require("path");
//const webpack = require("webpack");
//const Merge = require("webpack-merge");
//const CommonConfig = require("./webpack.common.js");
//const HtmlWebpackPlugin = require('html-webpack-plugin');
//const CleanWebpackPlugin = require('clean-webpack-plugin');
////const ExtractTextPlugin = require("extract-text-webpack-plugin");
//// Images, Fonts Loading: https://webpack.js.org/guides/asset-management/
//// LESS Loading: https://webpack.js.org/loaders/less-loader/
//// Code splitting: https://webpack.js.org/guides/code-splitting
//// Caching: https://webpack.js.org/guides/caching/
////const extractLess = new ExtractTextPlugin({
////    filename: "[name].[contenthash].css"
////});
//module.exports = Merge(CommonConfig, {
//    devtool: "hidden-source-map",
//    devServer: {
//        contentBase: './dist',
//        writeToDisk: true
//    },
//    entry: {
//        index: path.resolve(__dirname, 'src/index.ts'),
//        vendor: [
//            "jquery",
//            "jquery-validation",
//            "bootstrap",
//            "jquery-validation-unobtrusive"
//        ]
//    },
//    //output: {
//    //    filename: "[name].[chunkhash].js",
//    //    path: __dirname + "/dist",
//    //    // Making sure the CSS and JS files that are split out do not break the template cshtml.
//    //    publicPath: "/dist/",
//    //    // Defining a global var that can used to call functions from within ASP.NET Razor pages.
//    //    library: "aspAndWebpack",
//    //    libraryTarget: "var"
//    //},
//    //module: {
//    //    loaders: [
//    //        // All css files will be handled here
//    //        {
//    //            test: /\.css$/,
//    //            use: extractLess.extract({ fallback: "style-loader", use: ["css-loader"] })
//    //        },
//    //        // All files with ".less" will be handled and transpiled to css
//    //        {
//    //            test: /\.less$/,
//    //            use: extractLess.extract({
//    //                use: [{
//    //                    loader: "css-loader", options: {
//    //                        sourceMap: true
//    //                    }
//    //                }, {
//    //                    loader: "less-loader", options: {
//    //                        sourceMap: true
//    //                    }
//    //                }]
//    //            })
//    //        },
//    //    ]
//    //},
//    plugins: [
//        new CleanWebpackPlugin(),
//        new HtmlWebpackPlugin({
//            inject: true,
//            filename: "index.html",
//            template: "./src/index.html"
//        })
//    ],
//    //plugins: [
//    //    new webpack.DefinePlugin({
//    //        "process.env": {
//    //            "NODE_ENV": JSON.stringify("production")
//    //        }
//    //    }),
//    //    // Split out library into seperate bundle and remove from app bundle.
//    //    new webpack.HashedModuleIdsPlugin(),
//    //    new webpack.optimize.CommonsChunkPlugin({
//    //        name: "vendor"
//    //    }),
//    //    // Webpack boilerplate and manifest in seperate file.
//    //    new webpack.optimize.CommonsChunkPlugin({
//    //        name: "runtime"
//    //    }),
//    //    // Write out CSS bundle to its own file:
//    //    //extractLess,
//    //    new webpack.LoaderOptionsPlugin({
//    //        minimize: true,
//    //        debug: false
//    //    }),
//    //    new webpack.optimize.UglifyJsPlugin({
//    //        beautify: false,
//    //        mangle: {
//    //            screw_ie8: true,
//    //            keep_fnames: true
//    //        },
//    //        compress: {
//    //            screw_ie8: true
//    //        },
//    //        comments: false
//    //    })
//    //]
//})
var merge = require('webpack-merge');
var common = require('./webpack.common.js');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var CleanWebpackPlugin = require('clean-webpack-plugin');
module.exports = merge(common, {
    mode: 'development',
    devtool: 'inline-source-map',
    devServer: {
        contentBase: './dist',
        writeToDisk: true
    },
    plugins: [
        new CleanWebpackPlugin(),
        new HtmlWebpackPlugin({
            inject: true,
            filename: "index.html",
            template: "./src/index.html"
        })
    ],
});
//# sourceMappingURL=webpack.prod.js.map