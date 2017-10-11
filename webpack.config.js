var ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {

  entry: {
    app: ['./app.js', './scss/main.scss']
  },

  watch: true,

  output: {
    path: `${__dirname}/dist`,
    filename: '[name].bundle.js',
  },
  module: {

    rules: [

    {
      test: /\.js$/,
      exclude: /(node_modules|bower_components)/,
      use: {
        loader: 'babel-loader',
        query: {
        presets: ['es2015'] // Transpile the ES6 to es2015 standard
      }
    }
  },
  {
    test: /\.vue$/,
    use: 'vue-loader'
  },
      { // sass / scss loader for webpack
        test: /\.(sass|scss)$/,
        use: ExtractTextPlugin.extract(['css-loader', 'sass-loader'])
      },
      {
        test: /\.(png|jpg|svg|gif|ttf|eot|woff|woff2)$/,
        loader: 'file-loader?name=[path][name].[ext]'
      }
      ]
    },
    resolve: {
      alias: {
'vue$': 'vue/dist/vue.esm.js'  // Resolving the vue var for standalone build
}
},
plugins: [
new ExtractTextPlugin({ // define where to save the file
  filename: 'css/[name].bundle.css',
  allChunks: true,
}),
],
};