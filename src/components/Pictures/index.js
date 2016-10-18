import xs from 'xstream'
import isolate from '@cycle/isolate'
import {
	div,
	h1
} from '@cycle/dom'

function Pictures(sources) {
	return {
		DOM: xs.of(
			div({}, [
				h1('.login', 'Pictures page...')
			])
		)
	}
}

export default sources => isolate(Pictures)(sources)
