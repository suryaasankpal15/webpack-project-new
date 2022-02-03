module.exports = {
    entry: [
        './src/index.js'
    ],
    output : {
        path: __dirname + '/dist',
        publicPath: '/',
        filename: 'bundle.js'
    },
    devServer: {
        static : {
            directory : './dist'
        }
    },

    module: {
        loaders: [{
            test: /\.(.js|jsx)$/,
            exclude: /node_modules/,
            use: ['babel-loader']
        }]
    },
    resolve: {
        extenskons: ['js','jsx']
    }
}


//Initial commit

//https://github.com/webpack/webpack-dev-server/blob/master/migration-v4.md
//https://stackoverflow.com/questions/69102254/webpack-options-has-an-unknown-property-hotonly-invalid-options-object-dev-s