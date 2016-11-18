import style from './style.css'
import xs from 'xstream'
import {
    div,
    p,
    button,
    nav
} from '@cycle/dom'

export default (state$, children) => xs
    .combine(
        state$,
        children.nav1.DOM
    )
    .map(([state, nav1]) =>
        div([
            nav([nav1]),
            div([
                button('.inc', '+'),
                p(state.clicksCounter),
                button('.dec', '-'),
                p(state.msg),
                p(state.adminEmail)
            ])
        ])
    )
