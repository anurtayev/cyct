import xs from 'xstream'
import isolate from '@cycle/isolate'
import intent from './intent'
import model from './model'
import view from './view'
import Button1 from './../../common/Button'
import Button2 from './../../common/Button'
import Nav1 from './../../common/Nav'

export default sources => {

    const state$ = sources.onion.state$

    const msg1 = isolate(Button1, 'msg1')(sources)
    const msg2 = isolate(Button2, 'msg2')(sources)
    const nav1 = isolate(Nav1, 'nav1')(sources)

    const actions = intent(sources.DOM, {
        msg1,
        msg2,
        nav1
    })

    const reducer$ = model(actions)

    const vdom$ = view(state$, {
        msg1,
        msg2,
        nav1
    })

    return {
        DOM: vdom$,
        onion: reducer$,
        console: state$,
        Socket: actions.socket$,
        route: actions.nav$
    }
}
