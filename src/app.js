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

function router(sources) {
	const match$ = sources.router.define({
		'/': MainMenu,
		'/documents': Documents,
		'/pictures': Pictures,
		'/movies': Movies,
		'/music': Music,
	})

	const page$ = match$.map(({
		path,
		value
	}) => {
		return value({...sources,
			router: sources.router.path(path)
		})
	}).debug()

	return {
		DOM: mergeFlatten('DOM', [page$]),
		router: mergeFlatten('route$', [page$])
	}
}
