const webpack = require('webpack');
const HtmlWebPackPlugin = require('html-webpack-plugin');
const autoprefixer = require('autoprefixer');
const globImporter = require('node-sass-glob-importer');

const commonPaths = require('./paths');

module.exports = {
  mode: 'development',
  entry: commonPaths.entryPath,
  output: {
    path: commonPaths.buildPath,
    publicPath: '/',
    filename: '[name].[hash:8].js',
    chunkFilename: '[id].[hash:8].js'
  },
  target: 'web',
  devtool: 'source-map',
  module: {
    rules: [
      {
        enforce: 'pre',
        test: /\.(js|jsx)$/,
        loader: 'eslint-loader',
        exclude: /(node_modules)/,
        options: {
          emitWarning: true
        }
      },
      {
        test: /\.(js|jsx)$/,
        loader: 'babel-loader',
        exclude: /(node_modules)/
      },
      {
        test: /\.(css|scss)$/,
        loaders: [
          'style-loader', 'css-loader', {
            loader: 'postcss-loader',
            options: {
              plugins: [
                autoprefixer
              ]
            }
          },
          {
            loader: 'sass-loader',
            options: {
              sassOptions: {
                importer: globImporter()
              }
            }
          }
        ]
      },
      {
        test: /\.(png|jpg|gif|svg)$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              outputPath: commonPaths.imagesFolder
            }
          }
        ]
      },
      {
        test: /\.(woff2|ttf|woff|eot)$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              outputPath: commonPaths.fontsFolder
            }
          }
        ]
      }
    ]
  },
  resolve: {
    modules: ['src', 'node_modules'],
    extensions: ['.js', '.jsx']
  },
  plugins: [
    new HtmlWebPackPlugin({
      template: commonPaths.templatePath,
      filename: './index.html',
      favicon: commonPaths.favicon
    }),
    new webpack.HotModuleReplacementPlugin()
  ],
  devServer: {
    contentBase: commonPaths.buildPath,
    compress: true,
    hot: true,
    historyApiFallback: true,
    port: 9002,
  },
};
