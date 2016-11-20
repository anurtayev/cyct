import webpack from 'webpack'
import path from 'path'

module.exports = {
    entry: [
        'webpack-hot-middleware/client',
        './src/client/app.js'
    ],

    output: {
        path: path.join(process.cwd(), 'public'),
        filename: 'bundle.js',
        publicPath: '/'
    },

    module: {
        loaders: [{
            test: /\.js/,
            loader: 'babel',
            exclude: /node_modules/
        }, {
            test: /\.css$/,
            loader: 'style!css'
        }]
    },

    plugins: [
        new webpack.NoErrorsPlugin(),
        new webpack.HotModuleReplacementPlugin()
    ],

    devtool: 'eval-source-map'
}
