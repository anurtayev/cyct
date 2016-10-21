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
import mergeFlatten from './util/mergeFlatten'

function main(sources) {
	const match$ = sources.router.define({
		'/': MainMenu,
		'/documents': Documents,
		'/pictures': Pictures,
		'/movies': Movies,
		'/music': Music,
	})

  const page$ = match$.map(({path, value}) => {
    return value(Object.assign({}, sources, {
      router: sources.router.path(path)
    }))
  }).debug()

  return {
    DOM: mergeFlatten('DOM' , [page$]),
    router: mergeFlatten('route$', [page$])
  }
}

run(main, {
	DOM: makeDOMDriver('#app'),
	console: consoleDriver,
	router: makeRouterDriver(createHistory(), switchPath)
})
