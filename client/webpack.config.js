const path = require('path');

module.exports = {
    mode: 'development',
    entry: {
        bundle: './src/pages/main.tsx',
    },

    resolve: {
        extensions: ['.tsx', '.ts', '.jsx', '.js'],
    },

    output: {
        filename: '[name].js',
        path: path.resolve(__dirname, 'dist'),
        clean: true,
    },
    
    devServer: {
        hot: true,
        static: "./dist",
    },

    target: 'web',
};