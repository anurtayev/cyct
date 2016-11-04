import webpack from 'webpack'

module.exports = {
	entry: [
		'webpack-dev-server/client?http://localhost:8080',
		'webpack/hot/only-dev-server',
		'./src/app.js'
	],

	output: {
		path: './public',
		filename: 'bundle.js',
		publicPath: 'http://localhost:8080/'
	},

	module: {
		loaders: [{
				test: /\.js/,
				loader: 'babel',
				exclude: /node_modules/
			},
			{
				test: /\.css$/,
				loader: 'style!css'
			}
		]
	},

	plugins: [
		new webpack.NoErrorsPlugin(),
		new webpack.HotModuleReplacementPlugin()
	],

	devServer: {
		hot: true,
		contentBase: './dist'
	}
}
