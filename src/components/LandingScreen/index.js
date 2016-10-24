import xs from 'xstream'
import isolate from '@cycle/isolate'
import {
	div
} from '@cycle/dom'

import style from './style.css'
import Documents from './components/Documents'

function MainMenu(sources) {

  const state$ = sources.onion.state$

	const props$ = xs.of({
		categories: ['Pictures', 'Documents', 'Music', 'Movies']
	})

	const route$ = sources.DOM
		.select('a')
		.events('click')
		.map(e => '/music')

	return {
		DOM: props$.map(props =>
			div('.pongo', [
					div('.line', 'hey now!!!')
				])
			])
		),
    onion: reducer$,
		route$
	}
}

export default sources => isolate(MainMenu)(sources)


function main(sources) {
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
