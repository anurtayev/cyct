import style from './style.css'
import xs from 'xstream'
import {
    div,
    p
} from '@cycle/dom'

export default (state$, children) => xs
    .combine(state$, children.msgButton1.DOM, children.msgButton2.DOM)
    .map(([state, button1, button2]) =>
        div([
            button1,
            div('------------------------'),
            button2,
            p(JSON.stringify(state)),
            div('.menushka', 'navigate to Admin')
        ])
    )
