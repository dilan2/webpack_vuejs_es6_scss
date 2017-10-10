var ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {


  entry: {
    app: ['./app.js', './scss/main.scss']
},


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
      /*
      your other rules for JavaScript transpiling go in here
      */
      { // regular css files
        test: /\.css$/,
        use: ExtractTextPlugin.extract({
          loader: 'css-loader?importLoaders=1',
        options: {
          includePath: "./css/plain_css.css"
        }
        }),
      },
      { // sass / scss loader for webpack
        test: /\.(sass|scss)$/,
        use: ExtractTextPlugin.extract(['css-loader', 'sass-loader'])
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