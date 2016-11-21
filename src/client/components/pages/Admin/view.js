import style from './style.css'
import xs from 'xstream'
import {
    div,
    p,
    button,
    nav,
    a
} from '@cycle/dom'

export default state$ =>
    state$.map(state =>
        div([
            nav([
                a('.Admin.nav1', 'to Landing Screen')
            ]),
            div([
                button('.Admin.inc', '+'),
                p(state.clicksCounter),
                button('.Admin.dec', '-'),
                p(state.msg),
                p(state.adminEmail)
            ])
        ])
    )
