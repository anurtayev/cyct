import xs from 'xstream'
import isolate from '@cycle/isolate'
import {
	nav,
	a,
	section,
	span,
	div
} from '@cycle/dom'

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

function MainMenu({props$}) {
	return {
		DOM: props$.map(props =>
			div('.container', [
				section('.color-4', [
					nav('.cl-effect-2', props.categories.map(renderAnchorTag))
				])
			])
		)
	}
}

export default sources => isolate(MainMenu)(sources)
