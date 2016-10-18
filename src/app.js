import consoleDriver from './util/consoleDriver'
import xs from 'xstream'
import {makeRouterDriver} from 'cyclic-router'
import {createHistory} from 'history'
import switchPath from 'switch-path'

import {run} from '@cycle/xstream-run'
import {makeDOMDriver} from '@cycle/dom'

import MainMenu from './components/MainMenu'
import Documents from './components/Documents'
import Pictures from './components/Pictures'
import Movies from './components/Movies'
import Music from './components/Music'
import ComponentRouter from './util/componentRouter'

function main(sources) {
	const routes = {
		'/': MainMenu,
		'/documents': Documents,
		'/pictures': Pictures,
		'/movies': Movies,
		'/music': Music,
	}

  const page = ComponentRouter({...sources, routes$: xs.of(routes)})

	return {
    DOM: page.DOM,
    router: page.route$
	}
}

run(main, {
	DOM: makeDOMDriver('#app'),
	console: consoleDriver,
	router: makeRouterDriver(createHistory(), switchPath)
})
