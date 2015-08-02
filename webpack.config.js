module.exports= {
    entry: './resources/public/js/src/ganja.jsx',
    output: {
        filename: './resources/public/js/build/ganja.js',
        publicPath: 'http://localhost:3000/resources/public/js/build'
    },
    module: {
        loaders: [
            {
                test: /\.jsx$/,
                loader: 'jsx-loader?insertPragma=React.DOM&harmony'
            }
        ]
    },
    externals: {
        'react': 'React'
    },
    resolve: {
        extensions: ['', '.js', '.jsx']
    }
}
