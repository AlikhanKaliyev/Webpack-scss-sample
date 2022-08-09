const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const {CleanWebpackPlugin} = require('clean-webpack-plugin');
const autoprefixer = require('autoprefixer');
const path = require('path');
const Dotenv = require("dotenv-webpack");
const buildPath = path.resolve(__dirname, 'dist');

module.exports = {
  mode: 'development',
  performance: {
    hints: false,
  },
    devServer:{
        static:{
           directory: path.join(__dirname, '')
        },
        compress:true,
        port: 3005
     },
    entry: ["./scss/all.scss", './js/modal/modal.js', './js/slider/slider.js'],
    output: {
        filename: 'main.js',
        path: path.resolve(__dirname, 'dist'),
        clean: true,
        assetModuleFilename: "assets/[hash][ext][query]",
    },
    module: {
        rules: [
          { // a loader loads file with matching extension no matter
            // if it is listed in entry: or imported inside js
            test: /\.s[a|c]ss$/i,
                use: [ MiniCssExtractPlugin.loader,
                    'css-loader',
                    {
                      loader: 'postcss-loader',
                      options: {
                          postcssOptions:{
                              plugins: () => [autoprefixer()],
                              // parser: "postcss-js",
                          },
                          // execute: true
                      }
                  },
                    'sass-loader',
                ],
          },
          // { 
          //   test: /\.jsx?$/,         // Match both .js and .jsx files
          //   exclude: /node_modules/, 
          //   loader: "babel-loader", 
          // },
        //   {
        //     test: /\.(jpe?g|png|gif|svg)$/i,
        //       use: [
        //         'url-loader?limit=10000',
        //         'img-loader'
        //       ]
        //     }
        ],
      },
      optimization: {
        minimize: true,
        minimizer: [
          // Для webpack @ 5 вы можете использовать синтаксис `...` для расширения существующих минимизаторов (например, `terser-webpack-plugin`), раскомментируйте следующую строку
          // `...`,
          new CssMinimizerPlugin(), '...',
        ],
      },
      plugins: [new MiniCssExtractPlugin({
        filename: 'all.css',
        chunkFilename: 'all.css'}),
        new Dotenv(),
        new HtmlWebpackPlugin({
          template: path.resolve(__dirname, 'index.html'),  
          filename: 'index.html', // название выходного файла
       }),
       new CleanWebpackPlugin({buildPath}),
        new CopyWebpackPlugin(
          { 
            patterns: [
              { from:'./img', to:'img'}
            ]
          }
        )
    ]
}