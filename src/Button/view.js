import style from './style.css'
import {
	div
} from '@cycle/dom'

export default state$ => state$.map(state =>
	div('.bigbutton', state.title)
)
