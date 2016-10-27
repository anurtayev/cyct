import xs from 'xstream'
import isolate from '@cycle/isolate'
import intent from './intent'
import model from './model'
import view from './view'
import Button from './../Button'
import Button2 from './../Button'

export default sources => {

	const state$ = sources.onion.state$
	const actions = intent(sources.DOM)

  const button = isolate(Button, 'button')(sources)
	const button2 = isolate(Button2, 'button2')(sources)

	const reducer$ = model(actions, {
		button: button.onion,
    button2: button2.onion
	})

	const vdom$ = view(state$, {
		button: button.DOM,
    button2: button2.DOM
	})

	return {
		DOM: vdom$,
		onion: reducer$,
    console: state$
	}
}
