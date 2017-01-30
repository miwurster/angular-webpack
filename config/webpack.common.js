
const webpack = require('webpack');

const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');

const helpers = require('./helpers');

module.exports = {

  /*
   * https://webpack.js.org/configuration/entry-context/#entry
   */
  entry: {
    'polyfills': './src/polyfills.ts',
    'vendor': './src/vendor.ts',
    'main': './src/main.ts',
  },

  /*
   * https://webpack.js.org/configuration/output
   */
  output: {
    path: helpers.root('dist'),
    filename: '[name].bundle.js',
    sourceMapFilename: '[name].map',
    chunkFilename: '[id].chunk.js',
  },

  /*
   * https://webpack.js.org/configuration/resolve
   */
  resolve: {
    extensions: ['.ts', '.js', '.json', '.css', '.scss', '.html'],
  },

  /**
   * https://webpack.js.org/loaders
   */
  module: {
    rules: [
      {
        test: /\.ts$/,
        use: ['awesome-typescript-loader', 'angular2-template-loader'],
      },
      {
        test: /\.html$/,
        use: ['html-loader']
      },
      {
        test: /\.css$/,
        exclude: helpers.root('src', 'app'),
        loader: ExtractTextPlugin.extract(['css-loader?sourceMap', 'postcss-loader'])
      },
      {
        test: /\.css$/,
        include: helpers.root('src', 'app'),
        use: ['raw-loader', 'postcss-loader']
      },
      {
        test: /\.scss$/,
        exclude: helpers.root('src', 'app'),
        loader: ExtractTextPlugin.extract(['css-loader?sourceMap', 'postcss-loader', 'resolve-url-loader', 'sass-loader'])
      },
      {
        test: /\.scss$/,
        include: helpers.root('src', 'app'),
        use: ['raw-loader', 'postcss-loader', 'resolve-url-loader', 'sass-loader']
      },
      {
        test: /\.(png|jpe?g|gif|ico|ttf|eot|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
        use: ['file-loader?name=assets/[name].[hash].[ext]']
      },
      {
        test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/,
        use: ['url-loader?limit=8192&mimetype=application/font-woff&name=assets/[name].[hash].[ext]']
      },
    ]
  },

  /*
   * https://webpack.js.org/plugins
   */
  plugins: [

    /**
     * https://github.com/angular/angular/issues/11580
     */
    new webpack.ContextReplacementPlugin(
      /angular(\\|\/)core(\\|\/)(esm(\\|\/)src|src)(\\|\/)linker/,
      helpers.root('src'),
      {}
    ),

    /*
     * https://webpack.js.org/plugins/commons-chunk-plugin
     */
    new webpack.optimize.CommonsChunkPlugin({
      names: ['main', 'vendor', 'polyfills'],
    }),

    /*
     * https://github.com/kevlened/copy-webpack-plugin
     */
    new CopyWebpackPlugin([
      { from: 'src/static' },
    ]),

    /*
     * https://webpack.js.org/plugins/html-webpack-plugin/
     */
    new HtmlWebpackPlugin({
      template: 'src/index.html',
    }),
  ],

};
