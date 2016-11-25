import style from './style.css'
import xs from 'xstream'
import {
    div,
    nav,
    button,
    a,
    input
} from '@cycle/dom'

export default (state$, {
    nav1
}) => {

    console.log('here:');
    console.log(nav1.DOM);

    return state$.map(state =>
        div([
            nav1,
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
}
