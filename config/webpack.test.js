var webpack = require('webpack');

var helpers = require('./helpers');

module.exports = {

  devtool: 'inline-source-map',

  resolve: {
    extensions: ['.ts', '.js', '.json', '.css', '.scss', '.html']
  },

  module: {
    rules: [
      {
        test: /\.ts$/,
        use: ['awesome-typescript-loader', 'angular2-template-loader']
      },
      {
        test: /\.html$/,
        use: ['html-loader']
      },
      {
        test: /\.(png|jpe?g|gif|svg|woff|woff2|ttf|eot|ico)$/,
        use: ['null-loader']
      },
      {
        test: /\.css$/,
        exclude: helpers.root('src', 'app'),
        use: ['null-loader']
      },
      {
        test: /\.css$/,
        include: helpers.root('src', 'app'),
        use: ['to-string-loader', 'css-loader', 'postcss-loader', 'resolve-url-loader']
      },
      {
        test: /\.scss$/,
        exclude: helpers.root('src', 'app'),
        use: ['null-loader']
      },
      {
        test: /\.scss$/,
        include: helpers.root('src', 'app'),
        use: ['to-string-loader', 'css-loader', 'postcss-loader', 'resolve-url-loader', 'sass-loader']
      }
    ]
  },

  plugins: [

    /**
     * https://github.com/angular/angular/issues/11580
     */
    new webpack.ContextReplacementPlugin(
      /angular(\\|\/)core(\\|\/)(esm(\\|\/)src|src)(\\|\/)linker/,
      helpers.root('src'),
      {}
    )

  ]

};
