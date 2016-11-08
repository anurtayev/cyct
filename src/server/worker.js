import express from 'express'
import serveStatic from 'serve-static'
import path from 'path'
import webpack from 'webpack';
import webpackDevMiddleware from 'webpack-dev-middleware'
import webpackHotMiddleware from 'webpack-hot-middleware'
import config from './webpack.config.babel'

export function run(worker) {
    console.log('!!!=>Worker PID:', process.pid)
    console.log(config.output.publicPath)

    const app = express()

    const httpServer = worker.httpServer
    const scServer = worker.scServer

    console.log(config.output.path)
    app.use(serveStatic(config.output.path))

    httpServer.on('request', app)

    /* ===> HRM */
    const compiler = webpack(config);
    app.use(webpackDevMiddleware(compiler, {
        noInfo: true,
        publicPath: config.output.publicPath
    }))
    app.use(webpackHotMiddleware(compiler))
        /* ===> end of HRM */

    scServer.on('connection', socket => {

        socket.on('sampleClientEvent', data => {
            var count = 0
            count++
            console.log('Handled sampleClientEvent', data)
            scServer.exchange.publish('sample', count)
        })

    })
}
