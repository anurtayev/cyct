import consoleDriver from './util/consoleDriver'
import onionify from 'cycle-onionify'
import switchPath from 'switch-path'

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

import Landing from './Landing'

const main = onionify(Landing)

run(main, {
	DOM: makeDOMDriver('#app'),
	console: consoleDriver,
	router: makeRouterDriver(createHistory(), switchPath)
})
