import xs from 'xstream'
import {
	run
} from '@cycle/xstream-run'
import {
	makeDOMDriver
} from '@cycle/dom'

import MainMenu from './components/MainMenu'

function main(sources) {

	const props$ = xs.of({
		categories: ['Pictures', 'Documents', 'Music', 'Movies']
	})

	const vdom$ = MainMenu({props$}).DOM

	return {
		DOM: vdom$
	}
}

run(main, {
	DOM: makeDOMDriver('#app')
})
