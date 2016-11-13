import consoleDriver from './util/consoleDriver'
import onionify from 'cycle-onionify'
import switchPath from 'switch-path'
import {makeSCDriver} from 'cycle-socketcluster'

import {
	makeRouterDriver
} from 'cyclic-router'

import {
	createHistory
} from 'history'

import {
	run
} from '@cycle/xstream-run'

import {
	makeDOMDriver
} from '@cycle/dom'

import Router from './components/Router'

const main = onionify(Router)

run(main, {
	DOM: makeDOMDriver('#app'),
	console: consoleDriver,
	router: makeRouterDriver(createHistory(), switchPath),
  Socket: makeSCDriver()
})
