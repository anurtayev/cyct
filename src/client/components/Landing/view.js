import style from './style.css'
import xs from 'xstream'
import {
	div,
	p
} from '@cycle/dom'

export default (state$, children) => xs
	.combine(state$, children.button, children.button2)
	.map(([state, button, button2]) => {
		return div([
			button,
			p(JSON.stringify(state)),
			button2,
			div('.menushka', 'go to <><><>'),
      div('.event1', 'fire!')
		])
	})
