const path = require('path');
const webpack = require('webpack');

module.exports = {
    entry: path.join(__dirname, '..', 'src', 'client', 'app.tsx'),
    resolve: {
        extensions: ['', '.tsx', '.ts', '.js']
    },
    output: {
        path: path.join(__dirname, '..', 'dist', 'client'),
        filename: 'bundle.js',
        chunkFilename: 'bundle.chunk.js',
    },
    module: {
        loaders: [
            { test: /\.ts(x?)$/, loader: 'ts-loader' }
        ]
    },
    plugins: [
        new webpack.DefinePlugin({
            "process.env": { 
                NODE_ENV: JSON.stringify("production") 
            }
        }),
        new webpack.optimize.UglifyJsPlugin({
            compress: {
                warnings: false
            }
        })
    ],
    devtool: 'source-map'
};