
const webpack = require('webpack');
const webpackMerge = require('webpack-merge');

const ExtractTextPlugin = require('extract-text-webpack-plugin');

const common = require('./webpack.common.js');
const helpers = require('./helpers');

const ENV = process.env.ENV = process.env.NODE_ENV = 'development';

module.exports = webpackMerge(common, {

  devtool: 'cheap-module-eval-source-map',

  /*
   * https://webpack.js.org/plugins
   */
  plugins: [

    /**
     * https://webpack.js.org/plugins/loader-options-plugin
     */
    new webpack.LoaderOptionsPlugin({
      debug: true
    }),

    /**
     * https://webpack.js.org/plugins/extract-text-webpack-plugin
     */
    new ExtractTextPlugin('[name].css'),

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

  // TODO
  // /*
  //  * http://webpack.github.io/docs/configuration.html#devserver
  //  */
  // devServer: {
  //   port: 3000,
  //   historyApiFallback: true,
  //   watchOptions: { aggregateTimeout: 300, poll: 1000 },
  //   outputPath: helpers.root('dist'),
  // },

});
