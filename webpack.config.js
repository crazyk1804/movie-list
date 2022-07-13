const HtmlWebPackPlugin = require('html-webpack-plugin');
const path = require('path')
const htmlPlugin = new HtmlWebPackPlugin({
	template: './src/index.html',
	filename: './index.html'
});

module.exports = {
	module: {
		rules: [{
			test: /\.js$/,
			exclude: /node_modules/,
			use: ['babel-loader', 'eslint-loader'],
		}, {
			test: /\.css$/,
			use: [ 'style-loader', 'css-loader' ]
		}]
	},
	// 책에 webpack 버전차이로 인해 devServer 설정 누락됨
	devServer: {
		static: {
			directory: path.join(__dirname, 'src')
		}
	},
	plugins: [htmlPlugin]
}