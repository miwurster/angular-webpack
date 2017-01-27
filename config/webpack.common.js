
const webpack = require('webpack');

// const HtmlWebpackPlugin = require('html-webpack-plugin');
// const ExtractTextPlugin = require('extract-text-webpack-plugin');
// const CopyWebpackPlugin = require('copy-webpack-plugin');

const helpers = require('./helpers');

module.exports = {

  /*
   * https://webpack.js.org/configuration/entry-context/#entry
   */
  entry: {
    'polyfills': './src/polyfills.ts',
    'vendor': './src/vendor.ts',
    'main': './src/main.ts'
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
        use: ['ts-loader', 'angular2-template-loader'],
      },
      {
        test: /\.html$/,
        use: ['html-loader']
      },
      // TODO
      // {
      //   test: /\.css$/,
      //   exclude: helpers.root('src', 'app'),
      //   loader: ExtractTextPlugin.extract(['css?sourceMap', 'postcss'])
      // },
      // {
      //   test: /\.css$/,
      //   include: helpers.root('src', 'app'),
      //   loaders: ['raw', 'postcss']
      // },
      // {
      //   test: /\.scss$/,
      //   exclude: helpers.root('src', 'app'),
      //   loader: ExtractTextPlugin.extract(['css?sourceMap', 'postcss', 'resolve-url', 'sass'])
      // },
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

    /*
     * https://webpack.js.org/plugins/commons-chunk-plugin
     */
    new webpack.optimize.CommonsChunkPlugin({
      names: ['main', 'vendor', 'polyfills'],
    }),

    // TODO
    // /*
    //  * https://www.npmjs.com/package/copy-webpack-plugin
    //  */
    // new CopyWebpackPlugin([
    //   { from: 'src/static' },
    // ]),
    //
    // /*
    //  * https://github.com/ampedandwired/html-webpack-plugin
    //  */
    // new HtmlWebpackPlugin({
    //   template: 'src/index.html',
    // }),
  ],

  // TODO
  // /*
  //  * PostCSS
  //  * https://github.com/postcss/postcss-loader
  //  */
  // postcss: function () {
  //   return [require('autoprefixer')];
  // },
  //
  // /*
  //  * Include polyfills or mocks for various node stuff
  //  * https://webpack.github.io/docs/configuration.html#node
  //  */
  // node: {
  //   global: 'window',
  //   crypto: 'empty',
  //   process: false,
  //   module: false,
  //   clearImmediate: false,
  //   setImmediate: false,
  // },
};
