const path = require('path');
const webpack = require('webpack');
const dotenv = require('dotenv');
const HtmlWebPackPlugin = require('html-webpack-plugin');

const env = dotenv.config().parsed;

const envKeys = Object.keys(env).reduce((prev, next) => {
  const previous = prev;
  previous[`process.env.${next}`] = JSON.stringify(env[next]);
  return previous;
}, {});

module.exports = {
  entry: './src/index.jsx',
  output: {
    path: path.join(__dirname, '/dist'),
    filename: 'index_bundle.js',
  },
  resolve: {
    extensions: ['.js', '.jsx'],
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: ['babel-loader', 'eslint-loader'],
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.scss$/,
        use: ['style-loader', 'css-loader', 'sass-loader'],
      },
      {
        test: /\.svg$/,
        loader: 'svg-inline-loader?classPrefix',
      },
      {
        test: /\.(jpe?g|png|gif)$/,
        use: [
          {
            loader: 'file-loader',
            options: {},
          },
        ],
      },
    ],
  },
  plugins: [
    new HtmlWebPackPlugin({
      template: './src/index.html',
    }),
    new webpack.DefinePlugin(envKeys),
  ],
  devServer: {
    historyApiFallback: true,
  },
};
