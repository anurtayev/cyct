import style from './style.css'
import {
	div,
  p,
  h1
} from '@cycle/dom'

export default state$ => state$.map(state =>
  div([
    h1('votchina'),
    div('.bigbutton', state.msg),
    p(state.adminEmail)
  ])
)
