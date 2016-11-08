import {SocketCluster} from 'socketcluster'

const socketCluster = new SocketCluster({
  workers: 1,
  brokers: 1,
  port: 8080,
  appName: 'cyct',
  wsEngine: 'ws',
  workerController: __dirname + '/worker.js',
  socketChannelLimit: 1000,
  crashWorkerOnError: true
})
