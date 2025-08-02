const path = require('path') // commoJS

module.exports = {
    mode: 'production', //modes = 'development' e 'production'
    entry: './src/index.js',
    output: { 
        path: path.resolve(__dirname, 'public', 'assets', 'js'),
        filename: 'budle.js'
    },
    module: {
        rules: [{
            exclude: /node_modules/, 
            test: /\.js$/,
            use: {
                loader: 'babel-loader',
                options: {
                    presets: ['@babel/env']
                }
            }
        }]
    },
    devtool: 'source-map'
};