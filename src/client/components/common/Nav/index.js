import intent from './intent'
import view from './view'

export default sources => {

	const state$ = sources.onion.state$
	const actions = intent(sources)
	const vdom$ = view(state$)

	return {
		DOM: vdom$,
    click: actions.click$
	}
}
