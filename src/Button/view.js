import style from './style.css'
import {
	div,
	p
} from '@cycle/dom'

export default state$ => state$.map(state => div('.container', [
	div('.bigbutton', 'Big Button'),
	p(JSON.stringify(state))
]))
