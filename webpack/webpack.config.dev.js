const path = require('path');

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
    devtool: 'source-map'
};