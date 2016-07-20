const path = require('path');
const closureCompilerPlugin = require('webpack-closure-compiler');

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
        new closureCompilerPlugin({
          compiler: {
            language_in: 'ECMASCRIPT6',
            language_out: 'ECMASCRIPT5',
            compilation_level: 'ADVANCED'
          },
          concurrency: 3,
        })
    ],
    devtool: 'source-map'
};