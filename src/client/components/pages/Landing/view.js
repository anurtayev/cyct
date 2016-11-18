import style from './style.css'
import xs from 'xstream'
import {
    div,
    p,
    nav
} from '@cycle/dom'

export default (state$, {
    msg1,
    msg2,
    nav1
}) => xs
    .combine(
        state$,
        msg1.DOM,
        msg2.DOM,
        nav1.DOM
    )
    .map(([state, msg1, msg2, nav1]) =>
        div([
            nav([nav1]),
            div('.workArea', [
                msg1,
                div('------------------------'),
                msg2,
                p(JSON.stringify(state))
            ])
        ])
    )
