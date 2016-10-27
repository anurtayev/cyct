import xs from 'xstream'
import isolate from '@cycle/isolate'
import intent from './intent'
import model from './model'
import view from './view'
import Button from './../Button'

export default sources => {

	const state$ = sources.onion.state$
	const actions = intent(sources.DOM)

	const button = isolate(Button, 'button')(sources)

	const reducer$ = model(actions, {
		button: button.onion
	})

	const vdom$ = view(state$, {
		button: button.DOM
	})

	return {
		DOM: vdom$,
		onion: reducer$,
    console: button.DOM
	}
}
