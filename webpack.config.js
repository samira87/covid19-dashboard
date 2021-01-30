const path = require('path')
const webpack = require('webpack')
const nodeExternals = require('webpack-node-externals')
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: {
    main: path.resolve(__dirname,'./src/index.js'),
  },
  output: {
    path: path.join(__dirname, 'dist'),
    publicPath: '/',
    filename: '[name].js',
    globalObject: 'this'
  },
  target: 'web',
  devtool: 'source-map',
  //externals: [nodeExternals({allowlist: ['jquery']})], // Need this to avoid error when working with Express
  externals: {
    'jquery' : 'jQuery',
    'jQuery': 'jQuery',
    'moment': 'moment'
  },
  module: {
    rules: [{
      test: require.resolve("jquery"),
        loader: "expose-loader",
        options: {
          exposes: ["$", "jQuery"],
        },
      },
      {
        test: require.resolve("whatwg-fetch"),
        loader: "expose-loader",
        options: {
          exposes: ["fetch"],
        },
      },
      {
        // Loads the javacript into html template provided.
        // Entry point is set below in HtmlWebPackPlugin in Plugins 
        test: /\.html$/,
        use: [
          {
            loader: "html-loader",
            //options: { minimize: true }
          }
        ]
      },
      {
        test: /\.css$/,
        use: ["css-loader"],
      },
      {
       test: /\.(png|jpg|gif)$/,
       type: 'asset/resource',

      },
      {
        test: /\.(woff(2)?|ttf|eot|svg)(\?v=\d+\.\d+\.\d+)?$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[name].[ext]',
              outputPath: 'fonts/'
            }
          }
        ]
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./src/index.html",
      filename: "./index.html",
      excludeChunks: [ 'server' ]
    })
    
  ]
}