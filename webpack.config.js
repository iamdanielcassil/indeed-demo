const path = require('path');
const HtmlWebPackPlugin = require("html-webpack-plugin");

module.exports = {
	entry: 'index.js',
	module: {
		rules: [
			{
				test: /\.js$/,
				exclude: /node_modules/,
				use: {
					loader: "babel-loader"
				}
			},
			{
				test: /\.(png|jpg|gif|svg)$/,
				loader: 'file-loader',
				query: {
						name: '[name].[ext]?[hash]'
				}
			},
			{
				test: /\.(css|scss)$/,
				use: [
					{
						loader: "style-loader"
					},
					{
						loader: "css-loader",
						options: {
							modules: true,
							importLoaders: 1,
							localIdentName: "[name]_[local]_[hash:base64]",
							sourceMap: true,
							minimize: true
						}
					},
					{
						loader: "sass-loader",
					}
				]
			}
		]
	},
	output: {
		path: path.resolve(__dirname, 'dist'),
		filename: 'bundle.js'
	},
	plugins: [
		new HtmlWebPackPlugin({
			template: "./src/index.html",
			filename: "./index.html"
		})
	],
	resolve: {
		extensions: ['*', '.js', '.jsx', '.css'],
		modules: [
			path.resolve('./src'),
			path.resolve('./node_modules')
		]
	},
};