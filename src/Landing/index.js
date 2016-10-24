import xs from 'xstream'
import isolate from '@cycle/isolate'
import {
	div
} from '@cycle/dom'

import style from './style.css'
import Documents from './Documents'

export default sources => isolate(sources => {

	const state$ = sources.onion.state$

	return {
		DOM: xs.of(div('.pongo', [
			div('.line', 'hey now!!!')
		])),
		onion: reducer$
	}
})(sources)

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
