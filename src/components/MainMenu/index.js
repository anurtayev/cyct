import xs from 'xstream'
import isolate from '@cycle/isolate'
import {
    nav,
    a,
    section,
    span,
    div
} from '@cycle/dom'

function MainMenu(sources) {
	
    console.log(sources.props$);

    return {
        DOM: xs.of(
            div('.container', [
                section('.color-4', [
                    nav('.cl-effect-2', sources.props$.categories.map(cat => a({
                        attrs: {
                            'href': '#'
                        }
                    }, [
                        span({
                            attrs: {
                                'data-hover': cat
                            }
                        }, cat)
                    ])))
                ])
            ])
        )
    }
}

export default sources => isolate(MainMenu)(sources)
