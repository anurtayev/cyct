import style from './style.css'
import xs from 'xstream'
import {
    div,
    nav,
    button,
    a,
    input
} from '@cycle/dom'

export default state$ =>
    state$.map(state =>
        div([
            nav([
                a('.Landing.nav1', 'admin')
            ]),
            div('.Landing.workArea', [
                button('.Landing.msg1', 'message1'),
                div('------------------------'),
                button('.Landing.msg2', 'message with Tsoi song'),
                input('.Landing.nameInput', {attrs: {value: state.name }})
            ])
        ])
    )
