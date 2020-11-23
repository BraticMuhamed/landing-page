var path = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var MiniCssExtractPlugin = require('mini-css-extract-plugin');
const loader = require('sass-loader');
const webpack = require('webpack');

module.exports = {
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: '/node-modules/',
        use: 'babel-loader',
      },
      {
        test: /\.(scss|sass|css)$/,
        exclude: '/node-modules/',
        use: [
          MiniCssExtractPlugin.loader,
          {
            loader: 'css-loader',
            options: {
              modules: true,
              sourceMap: true,
              importLoaders: 1,
            },
          },
          'sass-loader',
        ],
      },
      {
        test: /\.svg$/,
        exclude: '/node-modules/',
        use: {
          loader: '@svgr/webpack',
        },
      },
      {
        test: /\.(png|jpg)$/,
        exclude: '/node-modules/',
        use: { loader: 'url-loader' },
      },
    ],
  },
  resolve: {
    extensions: ['.js', '.jsx'],
  },
  mode: 'development',
  plugins: [
    new HtmlWebpackPlugin({
      template: 'src/index.html',
    }),
    new MiniCssExtractPlugin({
      filename: '[name].css',
      chunkFilename: '[id].css',
    }),
    new webpack.EnvironmentPlugin({ PUBLIC_URL: '/public' }),
  ],
  devServer: {
    port: 3000,
  },
};
