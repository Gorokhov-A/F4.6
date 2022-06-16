const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const TerserWebpackPlugin = require('terser-webpack-plugin')
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin')
const StylelintPlugin = require('stylelint-webpack-plugin')
// const webpack = require('webpack')
const path = require('path')
const Dotenv = require('dotenv-webpack')

const PATHS = {
  src: path.join(__dirname, '../src/'),
  dist: path.join(__dirname, '../templates/frontend/'),
  build: path.join(__dirname, '../templates/frontend/'),
  assets: 'assets/',
  static: '/static/',
  css: path.join(__dirname, '../templates/static/css/'),
}
const PAGES_DIR = `${PATHS.src}/pug/`

module.exports = {
  externals: {
    paths: PATHS,
  },
  entry: {
    app: `${PATHS.src}index.tsx`,
  },
  output: {
    // filename: 'js/[name].[chunkhash].js',
    filename: 'js/[name].js',
    path: PATHS.dist,
    publicPath: PATHS.static,
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: `css/[name].css`,
    }),
    new HtmlWebpackPlugin({ template: `${PAGES_DIR}index.pug` }),
    new TerserWebpackPlugin(),
    new OptimizeCSSAssetsPlugin(),
    new StylelintPlugin(),
    new Dotenv(),
    // new webpack.DefinePlugin({
    //   'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV),
    //   'process.env.REACT_APP_WEATHER_API_KEY': JSON.stringify(
    //     process.env.REACT_APP_WEATHER_API_KEY
    //   ),
    // }),
  ],
  optimization: {
    minimizer: [new TerserWebpackPlugin({}), new OptimizeCSSAssetsPlugin({})],
  },
  module: {
    rules: [
      {
        test: /\.(ts|tsx)?$/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'ts-loader',
          },
          // 'ts-loader',eader 1
        ],
      },

      {
        test: /\.css$/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
            options: {
              esModule: true,
            },
          },
          'css-loader',
        ],
      },
      {
        test: /\.styl$/,
        use: [
          MiniCssExtractPlugin.loader,
          {
            loader: 'css-loader',
            options: {
              sourceMap: true,
              esModule: true,
            },
          },
          {
            loader: 'stylus-loader',
            options: {
              sourceMap: true,
              // config: { path: PATHS.build }
            },
          },
        ],
      },
      {
        test: /\.pug$/,
        loader: 'pug-loader',
        options: {
          pretty: true,
        },
      },
    ],
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js', '.jsx', '.json'],
  },
}
