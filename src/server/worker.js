import express from 'express'
import serveStatic from 'serve-static'
import path from 'path'
import webpack from 'webpack';
import webpackDevMiddleware from 'webpack-dev-middleware'
import webpackHotMiddleware from 'webpack-hot-middleware'
import config from './webpack.config.babel'

export function run(worker) {
    console.log('===>Worker PID:', process.pid)

    const app = express()
    const httpServer = worker.httpServer
    const scServer = worker.scServer

    app.use(serveStatic(config.output.path))
    httpServer.on('request', app)

    const compiler = webpack(config);
    app.use(webpackDevMiddleware(compiler, {
        noInfo: true,
        publicPath: config.output.publicPath
    }))
    app.use(webpackHotMiddleware(compiler))

    scServer.on('connection', socket => {

        socket.on('cyct.msg1', data => {
            console.log('incoming <cyct.msg1>', data)
            socket.emit('filesEvent', {
                file: '1file'
            })
        })

        socket.on('cyct.msg2', data => {
            console.log('incoming <cyct.msg2>', data)
						socket.emit('metadataEvent', {
                name: 'file1',
                ext: 'jpeg',
                size: 129000
            })
        })

    })
}
