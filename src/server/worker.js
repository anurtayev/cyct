import express from 'express'
import serveStatic from 'serve-static'
import path from 'path'

export default worker = > {
  console.log('   >> Worker PID:', process.pid)

  const app = express()

  const httpServer = worker.httpServer
  const scServer = worker.scServer

  app.use(serveStatic(path.resolve(__dirname, 'public')))

  httpServer.on('request', app)

  scServer.on('connection', socket => {

    socket.on('sampleClientEvent', data => {
      var count = 0
      count++
      console.log('Handled sampleClientEvent', data)
      scServer.exchange.publish('sample', count)
    })

  })
}
