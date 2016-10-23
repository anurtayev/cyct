import xs from 'xstream'
import isolate from '@cycle/isolate'
import {nav,a,section,span,div} from '@cycle/dom'
import delay from 'xstream/extra/delay'
import style from './style1.css'

function renderAnchorTag(category) {
	return a({
		attrs: {
			'href': '#'
		}
	}, [
		span({
			attrs: {
				'data-hover': category
			}
		}, category)
	])
}

function MainMenu(sources) {

  const props$ = xs.of({
    categories: ['Pictures', 'Documents', 'Music', 'Movies']
  })

	const route$ = sources.DOM
		.select('a')
		.events('click')
		.map(e => '/music')

	return {
		DOM: props$.map(props =>
			div('.container', [
        div('.pongo','sdfsdfssf'),
				section('.color-4', [
					nav('.cl-effect-2', props.categories.map(renderAnchorTag))
				])
			])
		),
		// console: clicks$,
    route$
	}
}

export default sources => isolate(MainMenu)(sources)
