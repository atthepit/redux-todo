const path = require('path')
const webpack = require('webpack')
const express = require('express')
const config = require('./webpack.config')

const app = express()
const compiler = webpack(config)

app.use(require('webpack-dev-middleware')(compiler, {
    publicPath: config.output.publicPath,
    historyApiFallback: true,
}))

app.use(require('webpack-hot-middleware')(compiler))

app.get('*', function(req, res) {
    res.sendFile(path.join(__dirname, 'index.html'))
})

app.listen(3000, function(err) {
    if (err) {
        return console.error(err)  // eslint-disable-line no-console
    }

    console.log('Listening at http://localhost:3000/')  // eslint-disable-line no-console
})
