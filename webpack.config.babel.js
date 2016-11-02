import path from 'path'

const config = {
    entry: path.join(__dirname, 'src', 'index.js'),
    output: {
        path: 'dist',
        filename: 'bundle.js',
    },
    module: {
        loaders: [
            {
                test: /\.jsx?$/,
                loaders: ['babel'],
                include: [path.join(__dirname, 'src')],
            },
        ],
    },
}

export default config
