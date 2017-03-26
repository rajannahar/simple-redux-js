module.exports = {
	entry: [
		'./src/index.js' //our js file where we code
	], 
	output: {
		filename: './bundle.js' //the output that webpack spits out from entry (es5 version)
	},
	module: {
		//loaders tell webpack what modules to use
		loaders: [{
			exclude: '/node_modules', 
			loader: 'babel-loader'
		}]
	}
}