import xs from 'xstream'
import isolate from '@cycle/isolate'
import intent from './intent'
import model from './model'
import view from './view'

export default sources => {

    const state$ = sources.onion.state$
    const actions = intent(sources)
    const reducer$ = model(actions)
    const vdom$ = view(state$)

    return {
        DOM: vdom$,
        onion: reducer$,
        console: state$,
        Socket: actions.socket$,
        route: actions.nav$
    }
}
