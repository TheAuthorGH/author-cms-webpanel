const {VueLoaderPlugin} = require('vue-loader');

module.exports = {
  entry: './src/index.js',
  resolve: {
    extensions: ['.js', '.vue', '.scss']
  },
  module: {
    rules: [
      {
        test: /\.vue$/,
        use: ['vue-loader']
      },
      {
        test: /\.scss$/,
        use: ['vue-style-loader', 'css-loader', 'sass-loader']
      }
    ]
  },
  plugins: [
    new VueLoaderPlugin()
  ]
};