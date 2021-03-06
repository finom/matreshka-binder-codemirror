const UglifyJsPlugin = require('uglifyjs-webpack-plugin');

module.exports = {
    devtool: 'source-map',
    entry: './src',
    externals: {
        codemirror: {
            root: 'CodeMirror',
            commonjs2: 'codemirror',
            commonjs: 'codemirror',
            amd: 'codemirror'
        }
    },
    output: {
        path: `${__dirname}/bundle`,
        filename: 'codemirror-binder.min.js',
        libraryTarget: 'umd',
        library: 'codeMirrorBinder'
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                loaders: ['babel-loader']
            }
        ]
    },

    plugins: [
        new UglifyJsPlugin()
    ]
};
