module.exports = {
    entry: __dirname + '/app/main.js',
    output: {
      path: __dirname + '/dist',
      filename: 'bundle.js',
    },
    module: {
        loaders:[
            {
                test:/\.js$/,
                exclude: /node_modules/,
                loaders: 'babel-loader',
                query: {
                    presets:['es2015']
                }
            }
        ]
    }
};