import xs from 'xstream'
import isolate from '@cycle/isolate'
import {
	div,
	h1
} from '@cycle/dom'

function MainMenu(sources) {
	return {
		DOM: xs.of(
			div('#mainmenu', [
				h1({}, 'Menu')
			])
		)
	}
}

export default sources => isolate(MainMenu)(sources)
