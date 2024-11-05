const { merge } = require('webpack-merge');
const common = require('../webpack.common.js');
const webpack = require('webpack');

module.exports = merge(common, {
    mode: 'development',
    devtool: 'eval',
    devServer: {
        historyApiFallback: true,
        hot: true,
        port: 3000,
        open: true
    },
    plugins: [
        new webpack.DefinePlugin({
            'process.env.NODE_ENV': JSON.stringify('development')
        })
    ]
});
