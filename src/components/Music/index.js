import xs from 'xstream'
import isolate from '@cycle/isolate'
import {div, h1} from '@cycle/dom'
import delay from 'xstream/extra/delay'

function Music (sources) {
  const menuClicks$ = sources.DOM
    .select('.menushka')
    .events('click')
    .map(e => '/documents')

  const delayEvent$ = xs.of('/pictures')
    .compose(delay(3000))

  return {
    DOM: xs.of(
      div({}, [
        h1('.login', 'Music page...12'),
        div('.menushka', {style:{color: 'red'}}, 'menushka')
      ])
    ),
    route$: xs.merge(menuClicks$, delayEvent$)
  }
}

export default sources => isolate(Music)(sources)
