
const webpack = require('webpack');
const webpackMerge = require('webpack-merge');

const ExtractTextPlugin = require('extract-text-webpack-plugin');

const common = require('./webpack.common.js');

const ENV = process.env.ENV = process.env.NODE_ENV = 'production';

module.exports = webpackMerge(common, {

  devtool: 'source-map',

  /*
   * https://webpack.js.org/plugins
   */
  plugins: [

    new ExtractTextPlugin('[name].[hash].css'),

    new webpack.NoEmitOnErrorsPlugin(),

    new webpack.optimize.UglifyJsPlugin({
      sourceMap: true,
      compress: {
        warnings: true
      },
    }),

    new webpack.LoaderOptionsPlugin({
      // Workaround for Angular2
      minimize: false
    }),

    /*
     * https://webpack.js.org/plugins/define-plugin
     */
    new webpack.DefinePlugin({
      'process.env': {
        'ENV': JSON.stringify(ENV),
        'NODE_ENV': JSON.stringify(ENV),
      }
    }),
  ],

});
