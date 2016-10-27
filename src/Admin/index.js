import intent from './intent'
import model from './model'
import view from './view'

export default sources => {

	const state$ = sources.onion.state$
	const actions = intent(sources.DOM)
	const reducer$ = model(actions)
	const vdom$ = view(state$)

	return {
		DOM: vdom$,
		onion: reducer$,
    console: state$
	}
}
