import style from './style.css'
import xs from 'xstream'
import {
    div,
    nav,
    button,
    a,
    input
} from '@cycle/dom'

export default ({
    state$,
    nav1dom$
}) =>
xs.combine(state$, nav1dom$)
    .map(([state, nav1dom]) =>
        div([
            nav1dom,
            div('.Landing.workArea', {
                style: {
                    'display': 'flex',
                    'flex-direction': 'column'
                }
            }, [
                button('.Landing.msg1', {
                        style: {
                            'margin-top': '1em'
                        }
                    },
                    'message1'),
                button('.Landing.msg2', 'message with Tsoi song'),
                input('.Landing.nameInput', {
                    attrs: {
                        value: state.name
                    }
                })
            ])
        ])
    )
