import isolate from '@cycle/isolate'
import intent from './intent'
import model from './model'
import view from './view'

export default sources => isolate(sources => {

	const state$ = sources.onion.state$
	const actions = intent(sources.DOM)
	const reducer$ = model(actions)
	const vdom$ = view(state$)

	return {
		DOM: vdom$,
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
