import style from './style.css'
import xs from 'xstream'
import {
	div,
	p
} from '@cycle/dom'

export default (state$, children) => xs
	.combine(state$, children.button)
	.map(([state, button]) => {
		return div([
			button,
			p(JSON.stringify(state))
		])
	})
