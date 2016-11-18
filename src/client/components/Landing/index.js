import xs from 'xstream'
import isolate from '@cycle/isolate'
import intent from './intent'
import model from './model'
import view from './view'
import Button1 from './../Button'
import Button2 from './../Button'

export default sources => {

    const state$ = sources.onion.state$
    const msgButton1 = isolate(Button1, 'msgButton1')(sources)
    const msgButton2 = isolate(Button2, 'msgButton2')(sources)

    const actions = intent(sources.DOM, {
        msgButton1,
        msgButton2
    })

    const reducer$ = model(actions)

    const vdom$ = view(state$, {
        msgButton1,
        msgButton2
    })

    return {
        DOM: vdom$,
        onion: reducer$,
        console: state$,
        Socket: actions.socket$,
        route: actions.nav$
    }
}
