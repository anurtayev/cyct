import xs from 'xstream'
import isolate from '@cycle/isolate'
import intent from './intent'
import model from './model'
import view from './view'

import Nav1 from '../../common/Nav'

export default sources => {

    const state$ = sources.onion.state$

    const nav1 = isolate(Nav1, 'nav1')(sources)

    const actions = intent(sources, {
        nav1
    })
    
    const reducer$ = model(actions)

    const vdom$ = view(state$, {
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
